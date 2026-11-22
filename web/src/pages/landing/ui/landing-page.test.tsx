import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { LandingPage } from '../index'

function renderLanding() {
  render(
    <MemoryRouter>
      <LandingPage />
    </MemoryRouter>,
  )
}

test('shows the hero and the main sections', () => {
  renderLanding()
  expect(
    screen.getByRole('heading', { level: 1, name: /Thi thử như thi thật/ }),
  ).toBeInTheDocument()
  for (const name of [
    'Mọi thứ bạn cần để luyện TOEIC L&R',
    'Hiểu vì sao mình sai, không chỉ biết mình sai',
    'Ba bước để lên điểm',
    'Bắt đầu miễn phí, nâng cấp khi cần',
    'Câu hỏi thường gặp',
  ]) {
    expect(screen.getByRole('heading', { level: 2, name })).toBeInTheDocument()
  }
})

test('sign-up and login point to their (placeholder) routes', () => {
  renderLanding()
  expect(screen.getByRole('link', { name: 'Đăng nhập' })).toHaveAttribute(
    'href',
    '/login',
  )
  for (const link of screen.getAllByRole('link', {
    name: /Bắt đầu miễn phí/,
  })) {
    expect(link).toHaveAttribute('href', '/register')
  }
})

test('carries the ETS trademark disclaimer', () => {
  renderLanding()
  expect(
    screen.getByText(/not endorsed or approved by ETS/),
  ).toBeInTheDocument()
})
