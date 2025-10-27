import './App.css'
import Sidebar from './components/sidebar'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './components/HomePage';
import MatchingPage from './components/MatchingPage';
import ChattingPage from './components/ChattingPage';
import ProfilePage from './components/ProfilePage';
import AboutPage from './components/AboutPage';
import MorePage from './components/MorePage';
// import ErrorBoundary from './components/ErrorBoundary';

const router = createBrowserRouter([
  {path: "/hashtag", element: <><Sidebar /><MorePage /></>},
  {path: "/", element: <><Sidebar /><HomePage /></>},
  {path: "/Matching", element: <><Sidebar /><MatchingPage /></>},
  {path: "/Chatting", element:<> <Sidebar /><ChattingPage /></>},
  {path: "/Profile", element: <><Sidebar /><ProfilePage /></>},
  {path: "/About", element:<><Sidebar /><AboutPage /></>},

])

function App() {

  return (
    <> 
      <RouterProvider router={router} />
      
    </>
  )
}

export default App
