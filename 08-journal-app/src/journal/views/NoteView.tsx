import { useEffect, useMemo } from 'react'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { SaveOutlined } from '@mui/icons-material'
import { ImageGallery } from '../components'
import { useAppDispatch, useAppSelector, useForm } from '../../hooks'
import { setActiveNote, startSaveNote } from '../../store/journal'

export const NoteView = () => {

  const dispatch = useAppDispatch();

  const { active:note } = useAppSelector( state => state.journal );

  /**
    * TODO: refactorizar useForm debería aceptar de forma dinamica los tipos
   */
  const { body, title, date, onInputChange, formState } = useForm( note );

  const dateString = useMemo(() => {
    const newDate = new Date( date );
    return newDate.toUTCString()
  }, [date])
  
  useEffect(() => {
    dispatch( setActiveNote(formState))
  }, [formState])
  
  const onSaveNote = () => {
    dispatch( startSaveNote() );
  }

  return (
    <Grid
      className="animate__animated animated__fadeIn"
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">{dateString}</Typography>
      </Grid>
      
      <Grid item>
        <Button
          color="primary"
          sx={{ padding: 2 }}
          onClick={ onSaveNote }
        >
          <SaveOutlined sx={{  fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un título"
          label="Título"
          sx={{ border: "none", mb: 1 }}
          name="title"
          value={title}
          onChange={onInputChange}
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Qué sucedió en el día de hoy?"
          minRows={ 5 }
          name="body"
          value={body}
          onChange={onInputChange}
        />
      </Grid>

      {/* Image gallery  */}
      <ImageGallery />

    </Grid>
  )
}
