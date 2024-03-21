import {
    createBrowserRouter,
  } from "react-router-dom";
  import Home from './components/Home.jsx';
  import Blog from './components/Blog.jsx';
  import Bookmark from './components/Bookmarks.jsx';
  import MainLayout from './components/MainLayout.jsx';
  import SingleBlog from './components/SingleBlog.jsx';
  

export const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout></MainLayout>,
        children: [
          {
            path: '/',
            element: <Home></Home>
          },
          {
            path: '/blog',
            loader: () => fetch("https://dev.to/api/articles?per_page=20&top=7"),
            element: <Blog></Blog>
          },
          
          {
            path: '/blog/:id',
            loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
            element: <SingleBlog></SingleBlog>
          },
          {
            path: '/bookmark',
            element: <Bookmark></Bookmark>,
          },
        ]
      }
  ]);