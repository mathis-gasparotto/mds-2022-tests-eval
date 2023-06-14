import { useParams } from 'react-router-dom'
import { useState } from 'react'
import React from 'react'
import Modal from '../components/Modal'
import Form from '../components/Form'
import useNoteStore from '../../store/notes'

export default function User() {
  const {id} = useParams()
  // const notes = JSON.parse(localStorage.getItem('notes'))
  // const [note, setNote] = useState(notes.find((e) => e.id === id))
  const [notes, updateNote] = useNoteStore(
    (state) => [state.notes, state.updateNote]
    )
  const [note, setNote] = useState(notes.find((e) => e.id === id))
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [noteToEdit, setNoteToEdit] = useState({})

  function handleEditSubmit(event) {
    event.preventDefault()

    // const note = notes.find((e) => {
    //   return e.id === noteToEdit.id
    // })

    // note.title = noteToEdit.title
    // note.comment = noteToEdit.comment
    // note.note = noteToEdit.note

    // setNote(note)

    // localStorage.setItem('notes', JSON.stringify(notes))

    const payload = {
      title: noteToEdit.title,
      comment: noteToEdit.comment,
      note: noteToEdit.note
    }

    setNote({...note, ...payload})

    updateNote(note.id, payload)

    setModalIsOpen(false)
  }

  function handleEditFormChange(event) {
    setNoteToEdit({
      ...noteToEdit,
      [event.target.name]: event.target.value
    })
  }

  return (
    <>
      <h1>Single Note</h1>
      <div>Title: {note.title}</div>
      <div>Note: {note.note}</div>
      <div>Comment: {note.comment}</div>
      <button type='button' onClick={() => handleClick(id)}>Delete</button>
      <button type='button' onClick={() => {
        setModalIsOpen(true)
        setNoteToEdit(note)
      }}>Edit</button>
      <Modal onClose={() => setModalIsOpen(false)} open={modalIsOpen}>
        <Form handleSubmit={handleEditSubmit} handleChange={handleEditFormChange} formData={noteToEdit} submitText='Edit' />
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
    </>
  )
}