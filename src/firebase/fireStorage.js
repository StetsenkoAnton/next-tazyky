import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import firebase_app from "./config";

const storage = getStorage(firebase_app);
export function uploadMedia(carId, fileName, file) {
  const fileRef = ref(storage, `${carId}/${fileName}`);
  const uploadTask = uploadBytesResumable(fileRef, file);
  return new Promise((resolve, reject) => {
    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        reject(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const typeRaw = uploadTask.snapshot.metadata.contentType;
          const typeSplit = uploadTask.snapshot.metadata.contentType.split('/')[0];
          const type = typeSplit === 'image' ? 'image' : typeRaw;
          console.log(type);
          resolve({
            path: downloadURL,
            type,
          });
        });
      }
    );
  })
}
