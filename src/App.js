import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Home from './components/home/home';
import { AppContext } from './appContext';
import RootLayout from './components/rootlayout/rootlayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
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
