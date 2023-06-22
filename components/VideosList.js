import {createThumbnail} from 'react-native-create-thumbnail';
import {StyleSheet, View, FlatList, Pressable, ScrollView} from 'react-native';
import {Text, Button} from 'react-native-paper';
import React, {useEffect, useState} from 'react';
import {getAllVideos} from '../utils/fileSystem';
import FastImage from 'react-native-fast-image';
import Video from 'react-native-video';
import {useIsFocused} from '@react-navigation/native';
import BackgroundService from 'react-native-background-actions';

const VideosList = () => {
  const [thumbnails, setThumbnails] = useState([]);
  const [videos, setVideos] = useState([]);
  const [video, setVideo] = useState();
  const isFocused = useIsFocused();
  // 'file:///storage/emulated/0/Pictures/ZaytricsVideos/VisionCamera-20230620_1457398787422839744166012.mp4',
  //

  useEffect(() => {
    if (isFocused) {
      // handleVideos();
      // handleStartBackgroundTask();
    }
  }, [isFocused]);

  const backgroundTask = async taskDataArguments => {
    try {
      let start = performance.now();
      const videos = await getAllVideos();
      for (const video of videos) {
        //generate Thumbnail
        const thumbnail = await createThumbnail({
          url: 'file://' + video.path,
        });
        const obj = {
          ...video,
          thumbnail: thumbnail.path,
        };
        setVideos(prev => [...prev, obj]);
      }
      let timeTaken = performance.now() - start;
      console.log('performance', timeTaken);
      await Promise.resolve();
    } catch (error) {
      console.log('error', error.message);
    }
  };
  const handleStartBackgroundTask = async () => {
    const options = {
      taskName: 'Example',
      taskTitle: 'ExampleTask title',
      taskDesc: 'ExampleTask description',
      taskIcon: {
        name: 'ic_launcher',
        type: 'mipmap',
      },
      color: '#ff00ff',
      linkingURI: 'yourSchemeHere://chat/jane', // See Deep Linking for more info
      parameters: {
        delay: 1000,
      },
    };

    await BackgroundService.start(backgroundTask, options);
    await BackgroundService.updateNotification({
      taskDesc: 'New ExampleTask description',
    });
    // Only Android, iOS will ignore this call
    // iOS will also run everything here in the background until .stop() is called
  };

  const handleStopBackgroundTask = async () => {
    await BackgroundService.stop();
  };

  const clearStates = () => {
    setThumbnails([]);
    setVideos([]);
  };

  const renderItem = ({item}) => {
    // console.log('item', item);
    const playVideo = item => {
      // console.log('playVideo', item);
      const videoUrl = `file://${item.path}`;
      // console.log('videoURL', videoUrl);
      setVideo(videoUrl);
    };
    return (
      <Pressable onPress={() => playVideo(item)}>
        <FastImage
          style={styles.albumCover}
          source={{
            uri: item.thumbnail,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </Pressable>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>VideosList</Text>
      <FlatList
        horizontal
        scrollEnabled={true}
        // numColumns={3}
        data={videos}
        keyExtractor={(item, index) => index}
        renderItem={renderItem}
        contentContainerStyle={{gap: 20}}
        // columnWrapperStyle={{gap: 20}}
      />
      <Text style={styles.text}>Video</Text>
      {video && (
        <Video
          source={{uri: video}} // the video file
          paused={false} // make it start
          style={styles.video} // any style you want
          repeat={true} // make it a loop
        />
      )}
    </ScrollView>
  );
};

export default VideosList;

const styles = StyleSheet.create({
  //   container: {},
  albumCover: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 28,
    marginVertical: 20,
    fontWeight: 'bold',
  },
  video: {
    width: '100%',
    height: 400,
    // resizeMode: 'contain',
  },
});
