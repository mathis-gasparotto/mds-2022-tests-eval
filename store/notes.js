import create from 'zustand'
import { v4 as uuid } from 'uuid'

const useNoteStore = create(
  (set) => ({
    notes: [],
    
    addNote: (payload) => {
      const newNote = {
        id: uuid(),
        createdAt: new Date(),
        ...payload
      }

      set((state) => ({ notes: [...state.notes, newNote] }))
    },

    updateNote: (id, payload) => {
      set((state) => ({
        notes: state.notes.map((note) => {
          if (note.id === id) return { ...note, ...payload }
          return note
        })
      }))
    },

    deleteNote: (id) => {
      set((state) => ({
        notes: state.notes.filter((note) => note.id !== id)
      }))
    }
  }),
  {
    name: 'note-store',
    getStorage: () => localStorage
  }
)

export default useNoteStore
