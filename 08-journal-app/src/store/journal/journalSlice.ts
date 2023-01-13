import { createSlice } from '@reduxjs/toolkit';

interface journalState {
  isSaving: boolean
  messageSaved: string
  notes: []
  active: null | {}
}

const initialState: journalState = {
  isSaving: false,
  messageSaved: "",
  notes: [],
  active: null
}

export const journalSlice = createSlice({
  name: 'journal',
  initialState,
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true
    },
    addNewEmptyNote: ( state, action ) => {
      state.notes.push( action.payload );
      state.isSaving = false;
    },
    setActiveNote: ( state, action ) => {
      state.active = action.payload;
    },
    setNotes: ( state, action ) => {

    },
    setSaving: (state) => {

    },
    updateNote: ( state, action ) => {

    },
    deleteNoteById: ( state, action ) => {

    } 
  }
});
// Action creators are generated for each case reducer function
export const {
  savingNewNote,
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById
} = journalSlice.actions;