import { useState } from 'react';
import photoImg from '../image/photo.png';
import twitter from '../image/twitter.png';
import github from '../image/github.png';
import linkedin from '../image/linkedin.png';
import instagram from '../image/instagram.png';
import mail from '../image/mail.png';
import location from '../image/location.png';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Grid from '@mui/material/Grid';
import emailjs from 'emailjs-com';

import courseApp from '../image/courseapps.jpeg';
import randomIdea from '../image/randomidea.jpg';
import movieApp from '../image/movie.jpg';
import tracalories from '../image/tracalorie.png';
import xcrypto from '../image/xcrypto.png';
import note from '../image/note.png';
import technostar from '../image/technostar.png';
import videoHub from '../image/videoHub.png';
import blogApp  from '../image/blog.png';
import chucknorris from '../image/chucknorris_logo.png';
import Upsc from '../image/upsc.png';
import clock from '../image/clock.webp';
import music from '../image/music.png';

const Home = () => {
  const [formData, setFormData] = useState({
    subject: '',
    email: '',
    message: '',
  });

  const { subject, email, message } = formData;

  const changeHandle = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = e => {
    e.preventDefault();
    emailjs.sendForm('service_8wc54gn', 'template_m4310kc', e.target, 'fTerdLDh9oy_s3VpO')
      .then(result => {
        console.log(result.text);
        setFormData({ subject: '', email: '', message: '' });
      })
      .catch(error => {
        console.log('FAILED...', error.text);
      });
    
  };

  return (
    <div style={{ display: 'flex'}}>
      <div style={{position:'fixed', backgroundColor: '#e6e6e6', width: '550px', height: '100vh',overflowY: 'auto' }}>
        <img style={{ height: '250px', width: '250px' }} src={photoImg} alt="Image" />
        <Typography style={{ fontSize: '35px', fontWeight: '900', marginTop: '-25px', marginLeft: '45px' }}>Pavan Mudavath</Typography>
        <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '45px' }}>
          <img style={{ height: '20px', filter: 'brightness(100%)', marginRight: '5px' }} src={location} alt='location' />
          <Typography style={{ marginRight: '15px' }}>India</Typography>
          <img style={{ height: '20px', filter: 'brightness(100%)', marginRight: '5px' }} src={mail} alt='location' />
          <Typography>mudavathpavankumar822@gmail.com</Typography>
        </div>
        <Typography style={{ marginLeft: '45px', marginTop: '10px' }}>I`m a driven developer committed to creating innovative </Typography>
        <Typography style={{ marginLeft: '45px' }}>solutions with precision and expertise. <a style={{fontWeight:'bold'}}>Let`s connect!👇</a></Typography>
        <br/>
        <div>
        <Card style={{ backgroundColor: '#FFC0CB', marginTop: '0px', width: "300px", marginLeft: "45px", height: "auto", padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
  <form onSubmit={submitHandler} autoComplete='off' style={{ }}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField fullWidth label="Name" name="subject" value={subject} onChange={changeHandle} variant="outlined" />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth label="Email" name="email" type="email" value={email} onChange={changeHandle} variant="outlined" />
      </Grid>
      <Grid item xs={12} style={{color:'red', maxHeight: '72px', overflow: 'hidden' }}>
        <TextareaAutosize
          rows={3}
          placeholder="Message"
          name="message"
          value={message}
          onChange={changeHandle}
          style={{ width: '100%', padding: '8px', marginBottom: '16px', borderRadius: '5px', border: '1px solid #ccc', resize: 'none' }}
        />
      </Grid>
      <Grid item xs={12} style={{ textAlign: 'center' }}>
        <Button style={{marginTop:'-15px',color:'black',backgroundColor:'#FFE5CC'}} variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Grid>
    </Grid>
  </form>
</Card>
      </div>
        <div style={{ display: 'flex',marginTop:'15px' }}>
          <a href="https://twitter.com/PavanMudavath99" target="_blank" rel="noopener noreferrer">
            <div style={{ marginLeft: '45px' }} className="container">
              <img className="logo" src={twitter} alt="Twitter Logo" />
            </div>
          </a>
          <a href="https://github.com/pavanmudavath" target="_blank" rel="noopener noreferrer">
            <div className="container">
              <img className="logo" src={github} alt="github Logo" />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/pavanmudavath/" target="_blank" rel="noopener noreferrer">
            <div className="container">
              <img className="logo" src={linkedin} alt="Linkedin Logo" />
            </div>
          </a>
          <a href="https://www.instagram.com/pavan_0822/" target="_blank" rel="noopener noreferrer">
            <div className="container">
              <img className="logo" src={instagram} alt="Instagram Logo" />
            </div>
          </a>
        </div>
      </div>


      <div style={{ marginLeft: '550px', flex: 1, backgroundColor: '#e6e6e6', overflowY: 'auto'  }}>
      <div style={{ padding: '20px' }}>

        <div  style={{display:'flex',marginBottom:'50px'}}>
        <Card style={{width:'425px',backgroundColor:'white',height:'225px',borderRadius:'25px'}}>
          <div style={{display:'flex'}}>
          <img className="project-logo" src={courseApp} alt='course-app'/>
          <Typography style={{fontWeight: '900',marginTop:'25px'}}>Course App</Typography>
          </div>
          <Typography style={{marginLeft:'35px',marginTop:'-10px'}}>Upgrade your learning with CourseApp: user-friendly, feature-rich, and ready for the future!</Typography>
          <div>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'30px',marginTop:'5px'}}>React</Button>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'20px',marginTop:'5px'}}>NodeJS</Button>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'20px',marginTop:'5px'}}>Mongodb</Button>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'20px',marginTop:'5px'}}>Express</Button>
          </div>
          <div>
          <Button style={{backgroundColor:'#FFC0CB',marginLeft:'130px',marginTop:'15px'}} href='https://github.com/pavanmudavath/course-app' >github</Button>
          <Button style={{backgroundColor:'#FFC0CB',marginLeft:'20px',marginTop:'15px'}} href='https://github.com/pavanmudavath/course-app' >Live</Button>
          </div>
        </Card>
        <Card style={{width:'425px',backgroundColor:'white',height:'225px',borderRadius:'25px',marginLeft:'45px'}}>
          <div style={{display:'flex'}}>
          <img className="project-logo" src={randomIdea} alt='course-app'/>
          <Typography style={{fontWeight: '900',marginTop:'25px'}}>Random Ideas</Typography>
          </div>
          <Typography style={{marginLeft:'35px',marginTop:'-10px'}}>Capture and organize your random ideas effortlessly with our intuitive note-taking web application.</Typography>
          <div>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'30px',marginTop:'5px'}}>React</Button>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'10px',marginTop:'5px'}}>NodeJS</Button>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'10px',marginTop:'5px'}}>Mongodb</Button>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'10px',marginTop:'5px'}}>Express</Button>
          </div>
          <div>
          <Button style={{backgroundColor:'#FFC0CB',marginLeft:'130px',marginTop:'15px'}} href='https://github.com/pavanmudavath/randomideas-app' >github</Button>
          <Button style={{backgroundColor:'#FFC0CB',marginLeft:'20px',marginTop:'15px'}} href='https://randomideas-app-nxnp.onrender.com/' >Live</Button>
          </div>
        </Card>
        </div>


        <div  style={{display:'flex',marginBottom:'50px'}}>
        <Card style={{width:'425px',backgroundColor:'white',height:'225px',borderRadius:'25px'}}>
          <div style={{display:'flex'}}>
          <img className="project-logo" style={{marginTop:'25px',marginLeft:'35px',marginRight:'15px',width:'35px',height:'35px'}} src={movieApp} alt='course-app'/>
          <Typography style={{fontWeight: '900',marginTop:'25px'}}>FlixxMovies-App</Typography>
          </div>
          <Typography style={{marginLeft:'35px',marginTop:'5px'}}>Your ultimate destination for comprehensive movie and TV show details, all in one convenient platform</Typography>
          <div>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'30px',marginTop:'5px'}}>JavaScript</Button>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'20px',marginTop:'5px'}}>API</Button>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'20px',marginTop:'5px'}}>HTML</Button>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'20px',marginTop:'5px'}}>CSS</Button>
          </div>
          <div>
          <Button style={{backgroundColor:'#FFC0CB',marginLeft:'130px',marginTop:'15px'}} href='https://github.com/pavanmudavath/FlixxMovies-App' >github</Button>
          <Button style={{backgroundColor:'#FFC0CB',marginLeft:'20px',marginTop:'15px'}} href='https://flixx-movies-app.vercel.app/' >Live</Button>
          </div>
        </Card>
        <Card style={{width:'425px',backgroundColor:'white',height:'225px',borderRadius:'25px',marginLeft:'45px'}}>
          <div style={{display:'flex'}}>
          <img className="project-logo" style={{width:'45px',height:'45px',marginTop:'10px',marginRight:'10px',marginLeft:'25px'}} src={tracalories} alt='tracalories'/>
          <Typography style={{fontWeight: '900',marginTop:'25px'}}>Tracalories</Typography>
          </div>
          <Typography style={{marginLeft:'35px',marginTop:'-0px'}}>Your ultimate companion for effortless calorie tracking and management</Typography>
          <div>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'30px',marginTop:'5px'}}>JavaScript</Button>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'20px',marginTop:'5px'}}>API</Button>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'20px',marginTop:'5px'}}>HTML</Button>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'20px',marginTop:'5px'}}>CSS</Button>
          </div>
          <div>
          <Button style={{backgroundColor:'#FFC0CB',marginLeft:'130px',marginTop:'15px'}} href='https://github.com/pavanmudavath/Tracalories' >github</Button>
          <Button style={{backgroundColor:'#FFC0CB',marginLeft:'20px',marginTop:'15px'}} href='https://tracalories-sigma.vercel.app/' >Live</Button>
          </div>
        </Card>
        </div>


        <div  style={{display:'flex',marginBottom:'50px'}}>
        <Card style={{width:'425px',backgroundColor:'white',height:'225px',borderRadius:'25px'}}>
          <div style={{display:'flex'}}>
          <img className="project-logo" style={{width:'45px',height:'45px',marginTop:'20px',marginLeft:'25px',marginRight:'15px'}} src={xcrypto} alt='xcrypto-app'/>
          <Typography style={{fontWeight: '900',marginTop:'25px'}}>Xcrypto App</Typography>
          </div>
          <Typography style={{marginLeft:'35px',marginTop:'0px'}}>Real-time cryptocurrency insights for smart investing.</Typography>
          <div>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'30px',marginTop:'5px'}}>React</Button>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'20px',marginTop:'5px'}}>API</Button>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'20px',marginTop:'5px'}}>JavaScript</Button>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'20px',marginTop:'5px'}}>HTML</Button>
          </div>
          <div>
          <Button style={{backgroundColor:'#FFC0CB',marginLeft:'130px',marginTop:'15px'}} href='https://github.com/pavanmudavath/react-xcrypto-app' >github</Button>
          <Button style={{backgroundColor:'#FFC0CB',marginLeft:'20px',marginTop:'15px'}} href='https://x-crypto-m56zjjon0-pavanmudavaths-projects.vercel.app/' >Live</Button>
          </div>
        </Card>
        <Card style={{width:'425px',backgroundColor:'white',height:'225px',borderRadius:'25px',marginLeft:'45px'}}>
          <div style={{display:'flex'}}>
          <img className="project-logo" style={{width:'50px',height:'50px',marginTop:'20px',marginLeft:'25px',marginRight:'10px'}} src={note} alt='course-app'/>
          <Typography style={{fontWeight: '900',marginTop:'25px'}}>Shopping List</Typography>
          </div>
          <Typography style={{marginLeft:'35px',marginTop:'0px'}}>Simplify shopping with easy list creation, updates, and deletions.</Typography>
          <div>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'30px',marginTop:'5px'}}>React</Button>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'20px',marginTop:'5px'}}>PostMan</Button>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'20px',marginTop:'5px'}}>JavaScript</Button>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'20px',marginTop:'5px'}}>HTML</Button>
          </div>
          <div>
          <Button style={{backgroundColor:'#FFC0CB',marginLeft:'130px',marginTop:'15px'}} href='https://github.com/pavanmudavath/shopping-list' >github</Button>
          <Button style={{backgroundColor:'#FFC0CB',marginLeft:'20px',marginTop:'15px'}} href='https://shopping-list-five-azure.vercel.app/' >Live</Button>
          </div>
        </Card>
        </div>


        <div  style={{display:'flex',marginBottom:'50px'}}>
        <Card style={{width:'425px',backgroundColor:'white',height:'225px',borderRadius:'25px'}}>
          <div style={{display:'flex'}}>
          <img className="project-logo" style={{width:'50px',height:'50px',marginTop:'20px',marginLeft:"25px",marginRight:"10px"}} src={technostar} alt='techno-minds'/>
          <Typography style={{fontWeight: '900',marginTop:'25px'}}>TechnoMinds</Typography>
          </div>
          <Typography style={{marginLeft:'35px',marginTop:'0px'}}>Your tech optimization experts.</Typography>
          <div>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'30px',marginTop:'5px'}}>React</Button>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'20px',marginTop:'5px'}}>JavaScript</Button>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'20px',marginTop:'5px'}}>HTML</Button>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'20px',marginTop:'5px'}}>Css</Button>
          </div>
          <div>
          <Button style={{backgroundColor:'#FFC0CB',marginLeft:'130px',marginTop:'15px'}} href='https://github.com/pavanmudavath/TechnoMinds' >github</Button>
          <Button style={{backgroundColor:'#FFC0CB',marginLeft:'20px',marginTop:'15px'}} href='https://reactone-nqiohxqb3-pavanmudavaths-projects.vercel.app/' >Live</Button>
          </div>
        </Card>
        <Card style={{width:'425px',backgroundColor:'white',height:'225px',borderRadius:'25px',marginLeft:'45px'}}>
          <div style={{display:'flex'}}>
          <img className="project-logo" style={{width:'50px',height:'50px',marginTop:'20px',marginLeft:'25px',marginRight:'10px'}} src={videoHub} alt='course-app'/>
          <Typography style={{fontWeight: '900',marginTop:'25px'}}>VideoHub</Typography>
          </div>
          <Typography style={{marginLeft:'35px',marginTop:'0px'}}>Your ultimate destination for seamless video streaming and discovery.</Typography>
          <div>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'30px',marginTop:'5px'}}>React</Button>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'20px',marginTop:'5px'}}>JavaScript</Button>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'20px',marginTop:'5px'}}>HTML</Button>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'20px',marginTop:'5px'}}>CSS</Button>
          </div>
          <div>
          <Button style={{backgroundColor:'#FFC0CB',marginLeft:'130px',marginTop:'15px'}} href='https://github.com/pavanmudavath/VideoHub' >github</Button>
          <Button style={{backgroundColor:'#FFC0CB',marginLeft:'20px',marginTop:'15px'}} href='https://video-kggyonigh-pavanmudavaths-projects.vercel.app/' >Live</Button>
          </div>
        </Card>
        </div>



        <div  style={{display:'flex',marginBottom:'50px'}}>
        <Card style={{width:'425px',backgroundColor:'white',height:'225px',borderRadius:'25px'}}>
          <div style={{display:'flex'}}>
          <img className="project-logo" style={{width:'50px',height:'50px',marginTop:'20px',marginLeft:"15px",marginRight:'10px'}} src={blogApp} alt='blog-app'/>
          <Typography style={{fontWeight: '900',marginTop:'25px'}}>Blog App</Typography>
          </div>
          <Typography style={{marginLeft:'35px',marginTop:'5px'}}>Unlock your creativity and reach your audience with our intuitive blog platform.</Typography>
          <div>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'20px',marginTop:'5px'}}>React</Button>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'15px',marginTop:'5px'}}>MaterialUI</Button>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'15px',marginTop:'5px'}}>JavaScript</Button>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'15px',marginTop:'5px'}}>HTML</Button>
          </div>
          <div>
          <Button style={{backgroundColor:'#FFC0CB',marginLeft:'130px',marginTop:'15px'}} href='https://github.com/pavanmudavath/blogerApp' >github</Button>
          <Button style={{backgroundColor:'#FFC0CB',marginLeft:'20px',marginTop:'15px'}} href='https://blogsapp-lregqjzrm-pavanmudavaths-projects.vercel.app/' >Live</Button>
          </div>
        </Card>
        <Card style={{width:'425px',backgroundColor:'white',height:'225px',borderRadius:'25px',marginLeft:'45px'}}>
          <div style={{display:'flex'}}>
          <img className="project-logo" style={{width:'40px',height:'40px',marginTop:'20px',marginLeft:"25px",marginRight:'10px'}} src={chucknorris} alt='Jokes-app'/>
          <Typography style={{fontWeight: '900',marginTop:'25px'}}>GenerateJokes</Typography>
          </div>
          <Typography style={{marginLeft:'35px',marginTop:'0px'}}> Unleash laughter with Chuck Norris-inspired jokes at the click of a button</Typography>
          <div>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'30px',marginTop:'5px'}}>JavaScript</Button>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'20px',marginTop:'5px'}}>API</Button>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'20px',marginTop:'5px'}}>HTML</Button>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'20px',marginTop:'5px'}}>CSS</Button>
          </div>
          <div>
          <Button style={{backgroundColor:'#FFC0CB',marginLeft:'130px',marginTop:'15px'}} href='https://github.com/pavanmudavath/GenerateJokes' >github</Button>
          <Button style={{backgroundColor:'#FFC0CB',marginLeft:'20px',marginTop:'15px'}} href='https://generate-jokes.vercel.app/' >Live</Button>
          </div>
        </Card>
        </div>



        <div  style={{display:'flex',marginBottom:'50px'}}>
        <Card style={{width:'425px',backgroundColor:'white',height:'225px',borderRadius:'25px'}}>
          <div style={{display:'flex'}}>
          <img className="project-logo" style={{width:'50px',height:'50px',marginTop:'20px',marginLeft:"25px",marginRight:'10px'}}  src={Upsc} alt='Upsc-clone'/>
          <Typography style={{fontWeight: '900',marginTop:'25px'}}>UPSC Clone</Typography>
          </div>
          <Typography style={{marginLeft:'35px',marginTop:'5px'}}>Upsc clone(like Official website)</Typography>
          <div>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'30px',marginTop:'5px'}}>JavaScript</Button>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'20px',marginTop:'5px'}}>HTML</Button>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'20px',marginTop:'5px'}}>CSS</Button>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'20px',marginTop:'5px'}}>API</Button>
          </div>
          <div>
          <Button style={{backgroundColor:'#FFC0CB',marginLeft:'130px',marginTop:'15px'}} href='https://github.com/pavanmudavath/upsc' >github</Button>
          <Button style={{backgroundColor:'#FFC0CB',marginLeft:'20px',marginTop:'15px'}} href='https://upsc-393lc7gcd-pavanmudavaths-projects.vercel.app/' >Live</Button>
          </div>
        </Card>
        <Card style={{width:'425px',backgroundColor:'white',height:'225px',borderRadius:'25px',marginLeft:'45px'}}>
          <div style={{display:'flex'}}>
          <img className="project-logo" src={clock} alt='clock-app'/>
          <Typography style={{fontWeight: '900',marginTop:'25px'}}>CustomClock</Typography>
          </div>
          <Typography style={{marginLeft:'35px',marginTop:'-10px'}}>Create CustomClock </Typography>
          <div>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'30px',marginTop:'5px'}}>JavaScript</Button>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'20px',marginTop:'5px'}}>HTML</Button>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'20px',marginTop:'5px'}}>CSS</Button>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'20px',marginTop:'5px'}}>API</Button>
          </div>
          <div>
          <Button style={{backgroundColor:'#FFC0CB',marginLeft:'130px',marginTop:'15px'}} href='https://github.com/pavanmudavath/CreateCustomClock' >github</Button>
          <Button style={{backgroundColor:'#FFC0CB',marginLeft:'20px',marginTop:'15px'}} href='https://create-custom-clock.vercel.app/' >Live</Button>
          </div>
        </Card>
        </div>
        <div  style={{display:'flex',marginBottom:'50px'}}>
        <Card style={{width:'425px',backgroundColor:'white',height:'225px',borderRadius:'25px'}}>
          <div style={{display:'flex'}}>
          <img className="project-logo" style={{width:'50px',height:'50px',marginTop:'20px',marginLeft:"25px",marginRight:'10px'}}  src={music} alt='music-player'/>
          <Typography style={{fontWeight: '900',marginTop:'25px'}}>MusicPlayer</Typography>
          </div>
          <Typography style={{marginLeft:'35px',marginTop:'5px'}}>Your ultimate destination for endless music discovery and personalized playlists</Typography>
          <div>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'30px',marginTop:'5px'}}>JavaScript</Button>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'20px',marginTop:'5px'}}>HTML</Button>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'20px',marginTop:'5px'}}>CSS</Button>
          <Button style={{backgroundColor:'#FFE5CC',marginLeft:'20px',marginTop:'5px'}}>API</Button>
          </div>
          <div>
          <Button style={{backgroundColor:'#FFC0CB',marginLeft:'130px',marginTop:'15px'}} href='https://github.com/pavanmudavath/Music-Player' >github</Button>
          <Button style={{backgroundColor:'#FFC0CB',marginLeft:'20px',marginTop:'15px'}} href='https://music-player-ebon-nine.vercel.app/' >Live</Button>
          </div>
        </Card>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
