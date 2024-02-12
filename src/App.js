import logo from './logo.svg';


import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom";
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './app.scss'
import Sucess from './pages/Sucess/Sucess';
import Fail from './pages/Fail/Fail';

const Layout=()=>{
  return (
    <div className='appscss'>
      <Navbar/>
      <Outlet/>
      <Footer/>

    </div>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/products/:id",
        element:<Products/>
      },
      {
        path:"/product/:id",
        element:<Product/>
      },{
        path:"/success",
        element:<Sucess/>
      },
      {
        path:"/fail",
        element:<Fail/>

      }
    ]
  }
])
function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
