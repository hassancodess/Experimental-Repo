import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  View,
  Platform,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {
  askForAudioPermission,
  askForCameraPermission,
  askForMediaPermission,
} from '../utils/permission';
import {
  Camera as CameraVision,
  useCameraDevices,
} from 'react-native-vision-camera';
import {storeFile} from '../utils/fileSystem';
import VideosList from '../components/VideosList';

const Home = () => {
  const vision = useRef(null);
  const devices = useCameraDevices();
  const device = devices.back;

  const [photo, setPhoto] = useState();
  const [isRecording, setIsRecording] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [imageSource, setImageSource] = useState('');

  useEffect(() => {
    getPermissions();
  }, []);

  const getPermissions = async () => {
    await askForCameraPermission();
    await askForMediaPermission();
    await askForAudioPermission();
  };

  const handleOpenCamera = async () => {
    setShowCamera(!showCamera);
  };

  const saveVideo = async video => {
    console.log('Video ', video);
    await storeFile(video);
    setShowCamera(false);
    setIsRecording(false);
  };
  const startRecording = async () => {
    if (vision.current !== null && isRecording === false) {
      vision.current.startRecording({
        onRecordingFinished: video => saveVideo(video),
        onRecordingError: error => console.error(error),
      });
      setIsRecording(true);
    }
  };
  const stopRecording = async () => {
    if (vision.current !== null && isRecording) {
      await vision.current.stopRecording();
      setIsRecording(false);
    }
  };

  const savePhoto = async () => {
    setShowCamera(true);
    await handleCaptureImageVisionCamera(photo);
    navigation.navigate('AlbumsStack');
  };

  if (device == null) {
    return <Text>Camera not available</Text>;
  }

  return (
    // <View style={styles.container}>
    // </View>
    <View style={styles.container}>
      {!showCamera && !isRecording && (
        <>
          <Button
            mode="contained"
            style={styles.openCameraButton}
            onPress={handleOpenCamera}>
            Open Camera
          </Button>
          <VideosList />
        </>
      )}
      {showCamera ? (
        <>
          <CameraVision
            ref={vision}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={showCamera}
            // photo={true}
            video={true}
            audio={true}

            // fps={240}
          />

          <View style={styles.buttonContainer}>
            {!isRecording ? (
              <TouchableOpacity
                style={styles.camButton}
                onPress={startRecording}
              />
            ) : (
              <TouchableOpacity
                style={styles.stopRecordingButton}
                onPress={stopRecording}
              />
            )}
          </View>
        </>
      ) : (
        imageSource && (
          <>
            {imageSource !== '' ? (
              <Image
                style={styles.image}
                source={{
                  uri: `file://'${imageSource}`,
                }}
              />
            ) : null}

            <View style={styles.backButton}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'rgba(0,0,0,0.2)',
                  padding: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: '#fff',
                  width: 100,
                }}
                onPress={() => setShowCamera(true)}>
                <Text style={{color: 'white', fontWeight: '500'}}>Back</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
              <View style={styles.buttons}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#77c3ec',
                    padding: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    borderWidth: 2,
                    borderColor: 'white',
                  }}
                  onPress={savePhoto}>
                  <Text style={{color: 'white', fontWeight: '500'}}>
                    Save Photo
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  //   container: {
  // flex: 1,
  // alignItems: 'center',
  // justifyContent: 'center',
  //   },
  openCameraButton: {
    width: '50%',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'gray',
  },
  backButton: {
    backgroundColor: 'rgba(0,0,0,0.0)',
    position: 'absolute',
    justifyContent: 'center',
    width: '100%',
    top: 0,
    padding: 20,
  },
  buttonContainer: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    bottom: 0,
    padding: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
  },
  camButton: {
    height: 80,
    width: 80,
    borderRadius: 40,
    //ADD backgroundColor COLOR GREY
    backgroundColor: '#B2BEB5',

    alignSelf: 'center',
    borderWidth: 4,
    borderColor: 'white',
  },
  stopRecordingButton: {
    height: 80,
    width: 80,
    borderRadius: 40,
    //ADD backgroundColor COLOR GREY
    backgroundColor: 'red',
    alignSelf: 'center',
    borderWidth: 4,
    borderColor: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
    aspectRatio: 9 / 16,
  },
});
