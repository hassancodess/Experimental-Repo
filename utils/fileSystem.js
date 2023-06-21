import RNFS from 'react-native-fs';
const folderPath = RNFS.PicturesDirectoryPath + '/ZaytricsVideos/';

export const storeFile = async file => {
  //   const fileName = 'abc.mp4';
  const path = file.path;
  const fileName = path.split('/').pop();

  const destinationPath = `${folderPath}${fileName}`;
  console.log('destinationPath', destinationPath);
  RNFS.moveFile(file.path, destinationPath)
    .then(result => {
      console.log(
        'Successfully moved file to specified destination.',
        'fileName',
        fileName,
      );
      //   showToast('Successfully moved file to specified destination.');
    })
    .catch(err => {
      console.log(err.message);
      //   showToast(err.message, 'error');
    });
  return destinationPath;
};

export const getAllVideos = async () => {
  const response = await RNFS.readDir(folderPath);
  return response;
};
