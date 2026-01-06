import { useState,useEffect } from "react";
import authService from "./appwrite/auth.js";
import {login,logout} from "./store/authSlice.js"
import {useDispatch} from "react-redux"
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx";
import { Outlet } from "react-router";

function App() {
  const [loading,setLoading]=useState(true);
  const dispatch=useDispatch();
  let userData;

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}));
      }
      else{
        dispatch(logout());
      }
    })
    .catch((err)=>{
      console.error("error fetching current user",err);
      dispatch(logout());
    })
    .finally(()=>setLoading(false))
      
    

    // userData=authService.getCurrentUser();
    // userData.then((res)=>{
    //   console.log(res);
      
    //   if(res){
    //   dispatch(login({res}));
    //   setLoading(false);
    // }
    // else{
    //   dispatch(logout());
    //   setLoading(false);
    // }
    // })
    
    

  },[])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <Outlet/>
        <Footer />
      </div>
    </div>
  ) : null

}

export default App
