import React from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase.js";
import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom"
import bg from '../images/bg.png'
import Container from '@mui/material/Container';


  
export default function Form() {
    const [pageType, setPageType] = useState("login");
    const navigate = useNavigate();
    const isLogin = pageType === "login";
    const isRegister = pageType === "register";
  
    const registerSchema = yup.object().shape({
        firstName: yup.string().required("required"),
        lastName: yup.string().required("required"),
        email: yup.string().email("invalid email").required("required"),
        password: yup.string().required("required"),
        post: yup.string().required("required"),
      });
      
      const loginSchema = yup.object().shape({
        email: yup.string().email("invalid email").required("required"),
        password: yup.string().required("required"),
        post: yup.string().required("required"),
      });
      
      const initialValuesRegister = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        post: "",
      };
      
      const initialValuesLogin = {
        email: "",
        password: "",
        post: "",
      };

      const register=(values, onSubmitProps)=>{
        createUserWithEmailAndPassword(auth, values.email, values.password)
        .then(async (res) => {
            const user = res.user;
            await updateProfile(user, {
            displayName: values.firstName
            });
            setPageType("login");
           })
        .catch((err) => {
            console.log(err.message)
        });
      }
  
      const login=(values, onSubmitProps)=>{
        signInWithEmailAndPassword(auth, values.email, values.password)
        .then(async (res) => {
            const user = res.user;
            await updateProfile(user, {
            displayName: values.firstName
            });  
          navigate("/");
        })
        .catch((err) => {
         console.log(err.message);
        });
      }

      const handleFormSubmit = async (values, onSubmitProps) => {
        if (isLogin)  login(values, onSubmitProps);
        if (isRegister)  register(values, onSubmitProps);
      };
    
    return (
   < >
     <Container style={{ display:"flex", borderRadius:"3rem" , justifyContent:"center", alignContent:"center" , width:"50vw"  ,backgroundImage:`url(${bg})` , objectFit:"contain" , marginTop:"5rem", backgroundRepeat:"no-repeat" }}>
     <Formik
      onSubmit={handleFormSubmit}
      initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
      validationSchema={isLogin ? loginSchema : registerSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
      }) => (
        <form onSubmit={handleSubmit} >
          <Box
            marginTop="5rem"
            display="flex"
            flexDirection="column"
            gap="10px"
            justifyContent="center" alignItems="center"
          >
            {isRegister && (
              <>
                <Box display="flex" gap="1.5rem">
                <TextField
                  variant="outlined"
                  label="First Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  name="firstName"
                  error={
                    Boolean(touched.firstName) && Boolean(errors.firstName)
                  }
                  helperText={touched.firstName && errors.firstName}
                  sx={{ width:"19vw" }}
                />
                <TextField
                  label="Last Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  name="lastName"
                  error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                  sx={{ width:"19vw" }}
                />
                </Box>
              </>
            )}

            <TextField
              label="Email"
              InputProps={{
                style: {
                  color: 'black', // sets the color of the input text
                },
              }}
              inputProps={{
                style: {
                  color: 'red', // sets the color of the text field label
                },
              }}
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              name="email"
              error={Boolean(touched.email) && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              sx={{ width:"40vw" }}
            />
            <TextField
              label="Password"
              type="password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
              name="password"
              error={Boolean(touched.password) && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              sx={{ width:"40vw" }}
            />
            <TextField
              label="Post"
              type="text"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.post}
              name="post"
              error={Boolean(touched.post) && Boolean(errors.post)}
              helperText={touched.post && errors.post}
              sx={{ width:"40vw" }}
            />
          </Box>

          {/* BUTTONS */}
          <Box display="flex"
            flexDirection="column"
            gap="30px"
            padding="1rem"
            width="100%"
            justifyContent="center" alignItems="center">
            <Button
              type="submit"
              sx={{
                width:"40vw" ,
                p: "1rem",
                backgroundColor:"blue",
                color: "skyblue",
                "&:hover": { color:"skyblue" },
              }}
            >
              {isLogin ? "LOGIN" : "REGISTER"}
            </Button>
            <Typography
              onClick={() => {
                setPageType(isLogin ? "register" : "login");
                resetForm();
              }}
              sx={{
                textDecoration: "underline",
                color:"blue",
                "&:hover": {
                  cursor: "pointer",
                  color: "skyblue",
                },
              }}
            >
              {isLogin
                ? "Don't have an account? Sign Up here."
                : "Already have an account? Login here."}
            </Typography>
          </Box>
        </form>
      )}
    </Formik>
    </Container>
   </>
  )
}
