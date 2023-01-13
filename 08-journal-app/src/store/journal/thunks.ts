import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDb } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote } from "./journalSlice";

interface propsNewNote {
  id?: number | string
  title: string
  body: string
  date: number
}

export const startNewNote = () => {

  //TODO: Investigar TYPES for getState y dispatch
  return async( dispatch, getState ) => {

    dispatch( savingNewNote() )
    
    const { uid } = getState().auth;

    const newNote:propsNewNote = {
      title: "",
      body: "",
      date: new Date().getTime()
    }

    /**
     * *UID corresponde al usuario que tiene iniciada la sesión
     */

    const newDoc = doc( collection( FirebaseDb, `${ uid }/journal/notes` ) );
    await setDoc( newDoc, newNote );

    newNote.id = newDoc.id;

    dispatch( addNewEmptyNote( newNote ) );
    dispatch( setActiveNote( newNote ) );
    
  }
}