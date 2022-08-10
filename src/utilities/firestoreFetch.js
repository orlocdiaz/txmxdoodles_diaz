import { query, where, orderBy, collection, getDocs } from "@firebase/firestore";
import { getDoc, doc } from "firebase/firestore";
import { db } from './firebaseConfig';

export const firestoreFetchGallery = async (idList) => {
  let q;
  if (idList) {
    q = query (collection(db, "products"), where("categoryId", "array-contains", parseInt(idList)))
  } else {
    q = query (collection(db, "products"), orderBy ("title"))
  }
  const querySnapshot = await getDocs(q);
  const dataFromFirestore = querySnapshot.docs.map((doc) => ({
    idItem: doc.id,
    ...doc.data()
  }));
  return dataFromFirestore
}

export const firestoreFetchItem = async (idDetail) => {
  const docRef = doc(db, "products", idDetail);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return{
      idItem: docSnap.id, 
      ...docSnap.data()
    };
  } else {
    console.log("No such document!");
  }
}