import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/index.scss"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Header, About, Projects, Skills, Contact, SingleProject } from "./pages";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index={true} element={<Header/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='projects' element={<Projects/>}/>
          <Route path='skills' element={<Skills/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='projects/:projectId' element={<SingleProject/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

