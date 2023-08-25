import { getDatabase , ref, onValue, set, update } from "firebase/database";
import firebase_app from "./config";

const rtDb = getDatabase (firebase_app);
export async function createRtDbData(path, data) {
  return await set(ref(rtDb, path), data);
}
export async function updateRtDbData(path, body) {
  const updates = {};
  updates[path] = body;
  return await update(ref(rtDb), updates);
}
export function getRtDbData(path, funcCb = () => {}) {
  const starCountRef = ref(rtDb, path);
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    funcCb(data);
  });
}
