import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Home from './components/home/home';
import { AppContext } from './appContext';
import RootLayout from './components/rootlayout/rootlayout';
import Listings from './components/Listings/Listings';
import ListingDetail from './components/ListingDetail/listingdetail';
import SignIn from './components/SignIn/SignIn';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='/listings' element={<Listings/>}/>
      <Route path='/listing-details' element={<ListingDetail/>}/>
      <Route path='/login' element={<SignIn/>}/>
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
