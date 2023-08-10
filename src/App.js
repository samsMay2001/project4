import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Root from './components/Root/root';
import Home from './components/home/home';
import { AppContext } from './appContext';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>}>
      <Route index element={<Home/>}/>
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
