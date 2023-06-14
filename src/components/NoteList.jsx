import NoteItem from './NoteItem'

export default function NoteList({ notes, handleDelete, handleEdit }) {
  return (
    <ul className='notes' data-testid="note-list">
      {notes.map((item) => {
        return (
          <NoteItem key={item.id} item={item} handleDelete={handleDelete} handleEdit={() => handleEdit(item)} />
        )
      })}
    </ul>
  )
}
