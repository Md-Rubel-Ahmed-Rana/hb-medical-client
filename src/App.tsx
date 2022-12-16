import React from 'react';
import {RouterProvider} from "react-router-dom"
import './App.css';
import router from './routes/Router';

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
