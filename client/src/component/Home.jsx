
import * as React from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import hero from '../images/food.png'
import food1 from '../images/food1.jpg'
import food2 from '../images/food2.jpg'
import food3 from '../images/food3.jpg'
import food4 from '../images/food4.jpg'
import food5 from '../images/food5.jpg'
import food6 from '../images/food6.jpg'
import {Card,CardActions,CardContent,CardMedia } from '@mui/material';
import { useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import data from "../data"

export default function Home() {
    const navigate=useNavigate();
    useEffect(()=>{
      AOS.init({duration:2000})
    },[])
    
    const reception=()=>{
      navigate("/reception");
    }
    


  return (
    <>
   <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"sx={{ backgroundColor:"#6c0baa" }} >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Foodies
          </Typography>
          <Box display="flex" gap="2.5rem" padding="0 5rem" >
          <Button color="inherit">About</Button>
          <Button color="inherit" onClick={reception}>Reception</Button>
          <Button color="inherit">Waiter</Button>
          <Button color="inherit">Contact Us</Button></Box>
        </Toolbar>
      </AppBar>
    </Box>

    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        <Grid data-aos="fade-right" item xs={6} display="flex" flexDirection="column" justifyContent="center"  >
            <Box style={{ margin:"0.15rem 5rem 0 5rem" , color:"#6c0baa"}} sx={{ fontSize:"3rem", fontFamily:"Dancing Script, cursive" }}>
            <h1>Welcome to </h1>
            <h1>Foodies</h1></Box>
           <p style={{ margin:"2rem 2rem 0 5rem", color:"#6c0baa", fontSize:"1.3rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate repudiandae rem consequuntur ea laboriosam, tempore quaerat debitis vero mollitia illum maiores architecto deserunt hic aperiam quibusdam, pariatur assumenda expedita corrupti?</p>
           <a href='#special'><Button variant="outlined" 
           sx={{ width:"30%",margin:"2rem 2rem 0 5rem", color:"#6c0baa",
           border:"0.1rem solid #6c0baa" , borderRadius:"1rem",
           "&:hover": { cursor: "pointer", backgroundColor:"#6c0baa", color:"white"}}}>Today's Special</Button></a>
        </Grid>
        <Grid item xs={0} md={6}>
            <Box data-aos="zoom-in" sx={{height:"89vh"}} display="flex" justifyContent="center" alignItems="center">
            <img src={hero} alt="" style={ {height:"85%", width:"100%"} }/></Box>
        </Grid>
      </Grid>
    </Box>
     
     {/* special */}

     <Box id="special" data-aos="fade-up" >
     
        <Box display="flex" color="#6c0baa" justifyContent="center" paddingBottom="2rem" alignItems="center"  sx={{ fontSize:"2rem", fontFamily:"Dancing Script, cursive" }}>
        <h1>Today's special</h1>
        </Box>    
        <Box >
        <Grid container spacing= "2" paddingLeft="7vw" >
            <Grid xs={12} sm={6} md={4} >
              <Card sx={{ maxWidth: 345, marginBottom:"1rem", }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    style={{ objectFit: 'cover' }}
                    image={food1}
                />
                <CardContent sx={{ backgroundColor:"#b00ac8", color:"white" }}>
                    <Typography gutterBottom variant="h5" component="div">
                    Chole Rice
                    </Typography>
                    <Typography variant="body2" color="white">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
            <Grid xs={12} sm={6} md={4} >
            <Card sx={{ maxWidth: 345, marginBottom:"1rem"  }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    style={{ objectFit: 'cover' }}
                    image={food2}
                />
                <CardContent sx={{ backgroundColor:"#b00ac8", color:"white" }}>
                    <Typography gutterBottom variant="h5" component="div">
                    Fish Salad
                    </Typography>
                    <Typography variant="body2" color="white">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
            <Grid xs={12} sm={6} md={4} >
            <Card sx={{ maxWidth: 345, marginBottom:"1rem"  }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    style={{ objectFit: 'cover' }}
                    image={food3}
                />
                <CardContent sx={{ backgroundColor:"#b00ac8", color:"white" }}>
                    <Typography gutterBottom variant="h5" component="div">
                    Noodels
                    </Typography>
                    <Typography variant="body2" color="white">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
            <Grid xs={12} sm={6} md={4} >
            <Card sx={{ maxWidth: 345, marginBottom:"1rem"  }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    style={{ objectFit: 'cover' }}
                    image={food4}
                />
                <CardContent sx={{ backgroundColor:"#b00ac8", color:"white" }}>
                    <Typography gutterBottom variant="h5" component="div">
                    Mexican Barito
                    </Typography>
                    <Typography variant="body2" color="white">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
            <Grid xs={12} sm={6} md={4} >
            <Card sx={{ maxWidth: 345, marginBottom:"1rem"  }}>
                <CardMedia 
                    component="img"
                    alt="green iguana"
                    height="140"
                    style={{ objectFit: 'cover' }}
                    image={food5}
                />
                <CardContent sx={{ backgroundColor:"#b00ac8", color:"white" }}>
                    <Typography gutterBottom variant="h5" component="div">
                    Mexican Bread
                    </Typography>
                    <Typography variant="body2" color="white">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
            <Grid xs={12} sm={6} md={4} >
            <Card sx={{ maxWidth: 345, marginBottom:"1rem"  }}>
                <CardMedia
                    component="img"
                    style={{ objectFit: 'cover' }}
                    alt="green iguana"
                    height="140"
                    image={food6}
                />
                <CardContent sx={{ backgroundColor:"#b00ac8", color:"white" }}>
                    <Typography gutterBottom variant="h5" component="div">
                    Taco
                    </Typography>
                    <Typography variant="body2" color="white">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
        </Grid>
        </Box> 
     </Box>
     
     <Box padding="4rem 0 0 0" height="100vh" data-aos="fade-up">
       <Box display="flex" color="#6c0baa" justifyContent="center" sx={{ fontSize:"2rem", fontFamily:"Dancing Script, cursive" }}>
        <h1>Testimonials</h1> 
        </Box>
        <Box display="flex" color="#6c0baa" justifyContent="center"  sx={{ fontSize:"1.5rem", fontFamily:"Suranna, serif"}}>
          <h2 color="#6c0baa"> What people thnik about us! </h2>
        </Box>
        
     <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
         {data.map((unit, index) => (
            <SwiperSlide key={index}>
            <Card sx={{ maxWidth: 345}}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={hero}
                    />
                    <CardContent sx={{ backgroundColor:"#b00ac8", color:"white" }}>
                        <Typography gutterBottom variant="h5" component="div">
                         {unit.Name}
                        </Typography>
                        <Typography variant="body2" color="white">
                         {unit.Comment}
                        </Typography>
                    </CardContent>
                    </Card> 
            </SwiperSlide>
        ))}
      </Swiper>
      </Box>


    </>
  )
}


