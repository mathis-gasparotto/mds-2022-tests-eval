import '../css/NoteItem.css'
import { Link } from 'react-router-dom'
import { dateTimeFormat } from '../utils/formatting'

export function bgColor(note) {
  if (note < 8) {
    return 'red'
  } else if (note < 10) {
    return 'orange'
  } else if (note < 13) {
    return 'yellow'
  } else {
    return 'green'
  }
}

export default function NoteItem({item, handleDelete, handleEdit}) {
  return (
    <li className={`note-item ${bgColor(item.note)}`}>
      <div data-testid="note-title">Title: {item.title}</div>
      <div data-testid="note-number">Note: {item.note}/20</div>
      <div data-testid="note-comment">Comment: {item.comment}</div>
      <div>Created At: {dateTimeFormat(item.createdAt)}</div>
      <button type='button' onClick={() => handleDelete(item.id)}>Delete</button>
      <button type='button' onClick={() => handleEdit()}>Edit</button>
      <Link to={`/notes/${item.id}`}>Note page</Link>
    </li>
  )
}