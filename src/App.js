import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Home from './components/home/home';
import { AppContext } from './appContext';
import RootLayout from './components/rootlayout/rootlayout';
import Listings from './components/Listings/Listings';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='/listings' element={<Listings/>}/>
    </Route>
  )
)

function App() {

  return (
    <div className="App">
      <AppContext>
        <RouterProvider router={router}/>
      </AppContext>
    </div>
  );
}

export default App;
