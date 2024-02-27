import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import Home from './components/home/Home';
import Leftbar from './components/leftBar/LeftBar';
import Rightbar from './components/rightBar/RightBar';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

const App = () => {
  const Layout = () => {
    return (
      <>
        <Header />
        <div style={{ display: 'flex' }}>
          <Leftbar />
          <Outlet />
          <Rightbar />
        </div>
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/profile/:id',
          element: <Profile />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
