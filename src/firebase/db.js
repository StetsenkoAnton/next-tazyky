import { getFirestore, doc, getDoc, setDoc, collection, getDocs } from "firebase/firestore";
import firebase_app from "./config";

const db = getFirestore(firebase_app)

export async function getDbCollection(name) {
  const querySnapshot = await getDocs(collection(db, name));
  const answer = [];
  querySnapshot.forEach((doc) => {
    answer.push(doc.data())
  });
  return answer
}
export async function getDbData(collection, id) {
  let docRef = doc(db, collection, id);
  const docSnap = await getDoc(docRef);
  return docSnap.data()
}

export async function setDbData(collection, id, data) {
  let result = null;
  let error = null;

  try {
    result = await setDoc(doc(db, collection, id), data, {
      merge: true,
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
}
