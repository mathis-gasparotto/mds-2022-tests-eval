import { render, screen } from '@testing-library/react'
import NoteItem from '../../src/components/NoteItem'
import { bgColor } from '../../src/components/NoteItem'

const notes = [
  { id: 1, title: 'Oui', note: 4, comment: 'Excellent !', createdAt: new Date('2023-01-01') },
  { id: 2, title: 'Non', note: 9, comment: 'Très bien', createdAt: new Date('2023-03-01') },
  { id: 3, title: 'Bril', note: 12, comment: 'A retravailler', createdAt: new Date('2023-04-01') },
  { id: 4, title: 'Qualité', note: 18, comment: 'Peut mieux faire...', createdAt: new Date('2023-02-01') }
]

function handleDelete() {}
function handleEdit() {}

describe('NoteItem component', () => {
  it('should return the bg color of a NoteItem', () => {
    expect(bgColor(notes[0].note)).toBe('red')
    expect(bgColor(notes[1].note)).toBe('orange')
    expect(bgColor(notes[2].note)).toBe('yellow')
    expect(bgColor(notes[3].note)).toBe('green')
  })
})

// describe('NoteItem component', () => {
//   it('should render NoteItem component correctly', () => {
//     render(<NoteItem item={notes[0]} handleDelete={handleDelete} handleEdit={handleEdit} />)
//     const element = screen.getByRole('heading')
//     expect(element).toBeInTheDocument()
//   })
// })
