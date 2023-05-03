import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './src/pages/Home.jsx';
import Login from './src/pages/Login.jsx';
import Register from './src/pages/Register.jsx';
import Main from './src/pages/Main.jsx';
import Footer from './src/shared/Footer.jsx';
import Chef from './src/pages/Chef.jsx';
import RecipePage from './src/components/RecipePage.jsx';
import Banner from './src/components/Banner.jsx';
import ChefIDetail from './src/components/ChefIDetail.jsx';
import AuthProvider from './src/provider/AuthProvider.jsx';
import PrivateRoute from './src/routes/PrivateRoute.jsx';
import Blog from './src/components/Blog.jsx';

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
      {
        path: 'blog',
        element: <Blog />
      }
    ]
  },
  {
    path: 'recipe',
    element: <RecipePage />,
    children: [
      {
        path: ':id',
        element: <PrivateRoute><ChefIDetail /></PrivateRoute>,
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
