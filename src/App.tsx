import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Wrapper } from './App.style';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: 'signup',
    element: <SignupPage />,
  },
]);

const App = () => {
  return (
    <Wrapper>
      <RouterProvider router={Router} />
    </Wrapper>
  );
};

export default App;
