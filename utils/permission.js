import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';

export const askForMediaPermission = async () => {
  const result = await request(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
  console.log('read images', result);
};
export const askForCameraPermission = async () => {
  const result = await request(PERMISSIONS.ANDROID.CAMERA);
  console.log('camera', result);
};
export const askForAudioPermission = async () => {
  const result = await request(PERMISSIONS.ANDROID.RECORD_AUDIO);
  console.log('camera', result);
};
// export const askForForegroundPermission = async () => {
//   const result = await request(PERMISSIONS.ANDROID.);
//   console.log('camera', result);
// };
