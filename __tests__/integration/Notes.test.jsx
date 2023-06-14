import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import App from '../../src/App'
import { test, expect, describe, it } from 'vitest'
import Notes from '../../src/views/Notes'

describe('Notes.tsx tests', () => {
  test('Add note', async () => {
    // ARRANGE
    render(<App />, { wrapper: Notes })

    // ACT
    await userEvent.type(screen.getByTestId('note-input-title'), 'Title')
    await userEvent.type(screen.getByTestId('note-input-comment'), 'Comment')
    await userEvent.type(screen.getByTestId('note-input-title'), '5')
    await userEvent.click(screen.getByTestId('note-submit'))

    // ASSERT
    expect(screen.getByTestId('note-title')).toHaveTextContent('Title: Title')
    expect(screen.getByTestId('note-comment')).toHaveTextContent('Comment: Comment')
    expect(screen.getByTestId('note-number')).toHaveTextContent('Note: 5/20')
  })

  it('should render Notes component correctly', () => {
    render(<App />, { wrapper: Notes })
    const element = screen.getByRole('heading')
    expect(element).toBeInTheDocument()
  })
})
