import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import {RouterProvider} from "react-router-dom";
import {Home,Header,About,Contact,Footer,User,Github} from "./components"
import { githubInfoLoader } from './components/Github/Github.jsx';
import App from './App.jsx'

// const router= createBrowserRouter([
//   {path:"/",Component:App, children:[
//     {path:"/",Component:Home},
//     {path:"About",Component:About},
//     {path:"Contact",Component:Contact},
     
//   ]},
  
  
// ])

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' Component={App}>
      <Route path='/' Component={Home}/>
      <Route path='About' Component={About}/>
      <Route path='Contact' Component={Contact}/>
      <Route path='Github' Component={Github} loader={githubInfoLoader}/>
      <Route path='user/:userId' Component={User} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
