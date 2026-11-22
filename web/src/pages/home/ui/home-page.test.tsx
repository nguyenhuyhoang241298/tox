import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { HomePage } from '../index'

test('greets the learner and links to the test library', () => {
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>,
  )
  expect(screen.getByText('TOX')).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /Vào kho đề/ })).toHaveAttribute(
    'href',
    '/tests',
  )
})
