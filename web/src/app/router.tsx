import { createBrowserRouter, type RouteObject } from 'react-router'
import { HomePage } from '@/pages/home'

const routes: RouteObject[] = [{ path: '/', element: <HomePage /> }]

if (import.meta.env.DEV) {
  routes.push({
    path: '/dev/ui',
    lazy: async () => {
      const { DevUiPage } = await import('@/pages/dev-ui')
      return { Component: DevUiPage }
    },
  })
}

export const router = createBrowserRouter(routes)
