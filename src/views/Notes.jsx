import { useState } from 'react'
import React from 'react'
import NoteList from '../components/NoteList'
import { v4 as uuid } from 'uuid'
import Modal from '../components/Modal'
import Form from '../components/Form'
import useNoteStore from '../../store/notes'

export default function Notes() {
  const [form, setForm] = useState({
    title: '',
    comment: '',
    note: ''
  })
  // const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])
  const [notes, addNote, updateNote, deleteNote] = useNoteStore(
    (state) => [state.notes, state.addNote, state.updateNote, state.deleteNote]
  )
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [noteToEdit, setNoteToEdit] = useState({})

  function handleAddSubmit(event) {
    event.preventDefault()

    const newNote = {
      id: uuid(),
      title: form.title,
      comment: form.comment,
      note: form.note,
      createdAt: new Date()
    }

    // const newNotes = [
    //   ...notes,
    //   newNote
    // ]

    // setNotes(newNotes)

    // localStorage.setItem('notes', JSON.stringify(newNotes))

    addNote(newNote)

    setForm({
      ...form,
      title: '',
      comment: '',
      note: ''
    })
  }

  function handleEditSubmit(event) {
    event.preventDefault()

    // const note = notes.find((e) => {
    //   return e.id === noteToEdit.id
    // })

    // note.title = noteToEdit.title
    // note.comment = noteToEdit.comment
    // note.note = noteToEdit.note

    // setNotes(notes)

    // localStorage.setItem('notes', JSON.stringify(notes))

    
    const payload = {
      title: noteToEdit.title,
      comment: noteToEdit.comment,
      note: noteToEdit.note
    }

    updateNote(noteToEdit.id, payload)

    setForm({
      ...form,
      title: '',
      comment: '',
      note: ''
    })

    setModalIsOpen(false)
  }

  function handleAddFormChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  function handleEditFormChange(event) {
    setNoteToEdit({
      ...noteToEdit,
      [event.target.name]: event.target.value
    })
  }

  function handleDelete(id) {

    deleteNote(id)


    // const newNotes = notes.filter((e) => {
    //   return e.id !== id
    // })

    // setNotes(newNotes)

    // localStorage.setItem('notes', JSON.stringify(newNotes))
  }

  return (
    <div className="notes" data-testid="notes">
      <h1>Note List</h1>
      <Form handleSubmit={handleAddSubmit} handleChange={handleAddFormChange} formData={form} submitText='Add' />
      <h2>Notes</h2>
      <NoteList notes={notes} handleDelete={handleDelete} handleEdit={(item) => {
        setModalIsOpen(true)
        setNoteToEdit(item)
      }} />
      <Modal onClose={() => setModalIsOpen(false)} open={modalIsOpen}>
        <Form handleSubmit={handleEditSubmit} handleChange={handleEditFormChange} formData={noteToEdit} submitText='Edit' />
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
    </div>
  )
}
