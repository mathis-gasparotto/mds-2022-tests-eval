import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import App from './App'
import { test, expect, describe, vi } from 'vitest'

describe('Simple App.tsx tests', () => {
  test('Button count increments 1', async () => {
    // ARRANGE
    render(<App />)

    // ACT
    await userEvent.click(screen.getByTestId('bouton-count'))

    // ASSERT
    expect(screen.getByTestId('bouton-count')).toHaveTextContent('count is 1')
  })

  test('Button count has default 0 state', async () => {
    // ARRANGE
    render(<App />)

    // ACT

    // ASSERT
    expect(screen.getByTestId('bouton-count')).toHaveTextContent('count is 0')
  })
})
