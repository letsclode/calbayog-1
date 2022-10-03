import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    deleteDoc,
    doc,
    query,
    where,
    setDoc,
    collectionGroup,
    Timestamp,// export { initializeApp, getApp, getApps, deleteApp } from './lifecycle';
  } from "firebase/firestore";
  import { gets } from "firebase/storage";
  
  export async function queryByCollection(col) {
  // @ts-ignore
  const colRef = collection(firestoreDb, col);

  const snapshot = await getDocs(colRef);

  const docs = Array.from(snapshot.docs).map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });

  return docs;
}
  
  export const set = async (col, document) => {
    await setDoc(doc(collection(firestoreDb, col)), document, { merge: true });
  };
  
  export const add = async (col, document) => {
    // @ts-ignore
    const colRef = collection(firestoreDb, col);
  
    const docRef = await addDoc(colRef, document);
  
    return docRef;
  };
  
  export const del = async (col, id) => {
    const docRef = doc(firestoreDb, col, id);
    return await deleteDoc(docRef);
  };