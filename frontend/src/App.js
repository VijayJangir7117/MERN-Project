 import './App.css';
 import Navbar from '../src/components/Navbar';
 import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';

function App() {

const router=createBrowserRouter([
  {
    path:'/',
    element:<div>
      <Navbar/>
      <Create/>
      </div>
  },
  {
    path:'/all',
    element:<div>
    <Navbar/>
    <Read/>
    </div>
  },   {
    path:'/:id',
    element:<div>
    <Navbar/>
    <Update/>
    </div>
  }, 
])
  return (
  <>
  <h2>Hello jee</h2>
  
  <RouterProvider router={router}/>
  </>
  );
}

export default App;
