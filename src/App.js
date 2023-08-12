import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Home from './components/home/home';
import { AppContext } from './appContext';
import RootLayout from './components/rootlayout/rootlayout';
import Listings from './components/Listings/Listings';
import ListingDetail from './components/ListingDetail/listingdetail';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Services from './components/Services/services';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='/listings' element={<Listings/>}/>
      <Route path='/listing-details' element={<ListingDetail/>}/>
      <Route path='/login' element={<SignIn/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/Services' element={<Services/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
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
