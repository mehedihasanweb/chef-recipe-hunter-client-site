import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Main from './pages/Main';
import Footer from './shared/Footer';
import Chef from './pages/Chef';
import RecipePage from './components/RecipePage';
import Banner from './components/Banner';
import ChefIDetail from './components/ChefIDetail';
import AuthProvider from './provider/AuthProvider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/',
        element: <Main />
      },
      {
        path: 'chef',
        element: <Chef />
      },
      {
        path: 'footer',
        element: <Footer />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
    ]
  },
  {
    path: 'recipe',
    element: <RecipePage />,
    children: [
      {
        path: ':id',
        element: <ChefIDetail />,
        loader: ({ params }) => fetch(`http://localhost:5000/chef/${params.id}`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
