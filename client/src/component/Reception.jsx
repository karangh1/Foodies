import { useState,useEffect } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Reception() {
   
    const [order,setOrder]=useState([])
    const getOrder=async()=>{
        const response = await fetch(`http://localhost:3001/getOrder`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }, 
        });
        const json=await response.json()
        console.log(json)
        setOrder(json)
      }
      useEffect(()=>{
        getOrder();
    },[])
  return (
   <>
     <Box height="100vh"> 
        <Box display="flex" justifyContent="center" margin="2rem" color="#6c0baa" sx={{ fontSize:"2rem", fontFamily:"Dancing Script, cursive" }} ><h1>Your Orders</h1></Box>
        {order.length===0&&'No orders to display'}
        
        <Box display="flex" justifyContent="center" alignItems="center">     
        <Grid container spacing= "2" paddingLeft="7vw" >  
        {order.map((unit) => {
            return(      
        <Grid xs={12} sm={6} md={4} >      
           <Card sx={{ minWidth: 275 ,margin:"0.5rem" }}>
           <CardContent sx={{ backgroundColor:"#b00ac8", color:"white" }}> 
             <Typography sx={{ fontSize: 20 }}  gutterBottom>
              Table No. : {unit.tableNo}
             </Typography>
             <Typography variant="h5" component="div">
                 Order:
             </Typography>
             <Typography variant="h5" component="div">
                 {unit.order}
             </Typography>
             <Typography sx={{ mb: 1.5, fontSize: 20  }} >
               Phone No. :
               {unit.phone}
             </Typography>
           </CardContent>
           <CardActions sx={{ backgroundColor:"#b00ac8"}}>
             <Button size="small" sx={{fontSize: 20 ,color:"white"}}>Create Bill</Button>
           </CardActions>
         </Card>
       </Grid>  )
        })}
         </Grid> 
       </Box>  
     </Box>
   </>
  )
}


