import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDb } from "../../firebase/config";
import { loadNotes } from "../../helpers";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setSaving, updateNote } from "./journalSlice";

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

export const startLoadingNotes = () => {
  return async ( dispatch, getState ) => {
    const { uid } = getState().auth;

    if( !uid ) throw new Error("El UID del usuario no existe");
    const notes = await loadNotes( uid );
    dispatch(setNotes( notes ));
  }
}

export const startSaveNote = () => {
  return async( dispatch, getState ) => {

    dispatch( setSaving() );

    const { uid } = getState().auth;
    const { active:note } = getState().journal;

    const noteToFireStore = { ...note };
    delete noteToFireStore.id;

    const docRef = doc( FirebaseDb, `${uid}/journal/notes/${ note.id }`);
    await setDoc( docRef, noteToFireStore, { merge: true });

    dispatch( updateNote( note ) );
  }
}