import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDb } from "../firebase/config";

interface propsNotes {
  body?: string
  date?: number
  id: string,
  title?: string
}

export const loadNotes = async ( uid= "") => {
  if( !uid ) throw new Error("El UID del usuario no existe");
  const collectionRef = collection( FirebaseDb, `${ uid }/journal/notes`);
  const docs = await getDocs(collectionRef);

  const notes: Array<propsNotes> = [];

  docs.forEach( doc => {
    notes.push({id: doc.id, ...doc.data()})
  })

  return notes;
}
