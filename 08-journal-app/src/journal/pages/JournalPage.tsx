import { JournalLayout } from "../layout/JournalLayout";
import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";

import { NoteView, NothingSelectedView } from "../views";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { startNewNote } from "../../store/journal";

export const JournalPage = () => {

  const dispatch = useAppDispatch();

  const { isSaving, active } = useAppSelector( state => state.journal );

  const onClickNewNote = () => {
    dispatch( startNewNote() );
  }

  return (
    <JournalLayout>

      {
        // active != null
        !!active
        ? <NoteView />
        : <NothingSelectedView />
      }

      <IconButton
        size="large"
        onClick={ onClickNewNote }
        disabled={ isSaving }
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }}/>
      </IconButton>
    </JournalLayout>
  )
}
