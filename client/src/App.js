import React from "react";
import { useEffect,useState } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Home from  "./component/Home.jsx";
import Form from "./component/form.jsx";
import Reception from "./component/Reception.jsx";
import { auth } from "./firebase";
function App() {
  const [isLogin, setIsLogin] = useState("");
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setIsLogin("yes");
        } else setIsLogin("");
      });
    }, []);

  return (
   <>
     <BrowserRouter>
        <Routes>
            <Route path='/' element={ isLogin ? <Home/> :<Navigate to="/register" />}></Route> 
            <Route path='/register' element={ <Form/> } ></Route> 
            <Route path='/reception' element={ <Reception/> } ></Route> 
        </Routes>
     </BrowserRouter>
   </>
  );
}

export default App;
