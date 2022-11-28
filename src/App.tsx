import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import { Wrapper } from './App.style'

interface Props {}
const Router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />
  },
  {
    path: 'signup',
    element: <SignupPage />
  }
])

const App = (props: Props) => {
  return (
    <Wrapper>
      <RouterProvider router={Router} />
    </Wrapper>
  )
}

export default App
