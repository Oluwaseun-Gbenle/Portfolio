import React from 'react';
import './App.css';

let pictures = ["https://i.ibb.co/K2CnrnR/useful1.jpg", 
"https://i.ibb.co/6gbH6kB/useful.jpg"
]; 


class App extends React.Component {
 constructor(props){
   super(props);
   this.state={
darkModeOn: true,
     dropdown:false,
      pic: "https://i.ibb.co/K2CnrnR/useful3.jpg"
   }
 this.toggleDropDown=this.toggleDropDown.bind(this);
   this.toggleDarkMode=this.toggleDarkMode.bind(this);
 } 
 toggleDarkMode () {
     this.setState({darkModeOn: !this.state.darkModeOn
                   });
 }
toggleDropDown () {
  this.setState(state =>({
  dropDown:!state.dropDown
  
  }));
}
  
  componentDidUpdate (prevProps) {
   let picture = pictures[Math.floor(Math.random() * 2)];
    setTimeout(() => {this.setState({
      pic: picture
    });
   },2500);                 
  }
  
  
  
  render () {
    let optionOne = <button style={!this.state.darkModeOn ? {backgroundColor : '##f2ffde',color:'#0f0f0f'} : {backgroundColor : '#9aff00',color:'#fbf4f4'}} onClick={this.toggleDarkMode}> Dark Mode OFF</button>;
    let optionTwo = <button  onClick={this.toggleDarkMode}> Dark Mode ON</button>;
    let darkModeActive= !this.state.darkModeOn ? {backgroundColor : '#fbf4f4',color:'#0f0f0f'} : {backgroundColor : '#020202',color:'#fbf4f4'};
     let darkModeActiveProject= !this.state.darkModeOn ? {backgroundColor : '#f1f0fb',color:'#0f0f0f'} : {backgroundColor : '#0f0f0f',color:'#fbf4f4'};
    let blue= !this.state.darkModeOn ?         {color:'#0c0737'}:{color:'#0c0737'};
   let green= !this.state.darkModeOn ?         {color:'#7acb00'}:{color:'#9aff00'};
    
    if(this.state.dropDown){
      return(
      <div id="container">
    <div className="links">
    <nav id="nav-bar">
      <a className="navLink" href="#about"> About </a>
      <a className="navLink" href="#work"> Work </a>
      <a className="navLink" href="#contact"> Contact </a>
    </nav>
  </div>
        
      <main id="welcome-section">
    <div id="image">  
      <h2 id="text">Hello, I'm Seun,</h2>
    <p id="text2">a web developer.</p>
    <a id="box" onClick={this.toggleDropDown} href="#about">Know more</a></div>
  </main>
        
         <section style={darkModeActive} id="about">
     <p className="subhead">About</p>
      { !this.state.darkModeOn? 
      optionOne : optionTwo
      }  
           <div className ="headerBar"/>
           <div id="parent">
             
                    <div id="left-box">
     <div id="circle">
          
        <img className="image" src={this.state.pic} alt="pic" border="0"/>
     
      
      </div> 
    
     
    
      <p id="about-p">I am a web developer with a passion for coding.I always sought out oppurtunities and challenges that are meaningful to me. I am passionate about helping others and solving problems. I am most excited about the outcome of every of my creations while programming.
      </p>
      
    </div>
      
      <div id="right-box">
     <p style={green} id="paragraph"className="about-p2">I am proficient in:</p>
        <p className="about-p2"><i style={green}className="fa fa-check"></i>HTML</p>
        <p className="about-p2"><i style={green}className="fa fa-check"></i>CSS</p>
        <p className="about-p2"><i style={green}className="fa fa-check"></i>Javascript</p>
        <p className="about-p2"><i style={green}className="fa fa-check"></i>React</p>
        <p className="about-p2"><i style={green}className="fa fa-check"></i>JQuery</p>
      </div>
      
    </div>
  </section>       
        
        <section  style={darkModeActiveProject} id="work">
        <p className="subhead">Projects</p>
       { !this.state.darkModeOn? 
      optionOne : optionTwo
      }  
          <div className ="headerBar"/>
          <div  style={green} id="workFolder">
            
           <div className="work-p flip-box">
  <div className="flip-box-inner">
    <div className="flip-box-front">
       <img className="reSize" src="https://i.ibb.co/5G8H6tG/clock.png" alt="pomodoro-clock" border="0"/>
    </div>
    <a href= "https://codepen.io/sheywungee/full/abvVrgJ" target="_blank">
    <div className="flip-box-back">
      <p className="back-word"> click to view </p>
      <p>Pomordoro Clock</p>
    </div>
      </a>
  </div>
</div> 
            
       <div className="work-p flip-box">
  <div className="flip-box-inner">
    <div className="flip-box-front">
       <img className="reSize" src="https://i.ibb.co/10HQ9NC/drum-machine.png" alt="drum-machine" border="0"/>
    </div>
    <a href= "https://codepen.io/sheywungee/full/ZEbKXpJ" target="_blank">
    <div className="flip-box-back">
       <p className="back-word"> click to view </p>
      <p>Drum Machine</p>
    </div>
    </a>
  </div>
</div>     
            
         <div className="work-p flip-box">
  <div className="flip-box-inner">
    <div className="flip-box-front">
       <img className="reSize" src= "https://i.ibb.co/j5bWZ2C/survey-form.png"alt="survey-form" border="0"/>
    </div>
        <a href= "https://codepen.io/sheywungee/full/yLyjELE" target="_blank">
    <div className="flip-box-back">
      <p className="back-word"> click to view </p>
      <p> Survey Form</p>
    </div>
    </a>   
  </div>
</div>      
      
            
   <div className="work-p flip-box">
  <div className="flip-box-inner">
    <div className="flip-box-front">
      <img className="reSize" src="https://i.ibb.co/Qfqvj02/quote-machine.png" alt="quote-machine" border="0"/>
    </div>
      <a href= "https://codepen.io/sheywungee/full/bGVEzrP" target="_blank">
    <div className="flip-box-back">
     <p className="back-word"> click to view </p>
      <p>Quote Machine</p>
    </div>
    </a>
  </div>
</div>     
       
   <div className="work-p flip-box">
  <div className="flip-box-inner">
    <div className="flip-box-front">
      <img className="reSize" src="https://i.ibb.co/87LY6K4/markdown2.png" alt="markdown2" border="0"/>
    </div>
     <a href= "https://codepen.io/sheywungee/full/eYpByxK" target="_blank">
    <div className="flip-box-back">
      <p className="back-word"> click to view </p>
      <p>Markdown Previewer</p>
    </div>
    </a>
  </div>
</div> 

    <div className="work-p flip-box">
  <div className="flip-box-inner">
    <div className="flip-box-front">
      <img className="reSize" src="https://i.ibb.co/Dpg6Lvc/natural-essentials.png" alt="natural-essentials" border="0"/>
    </div>
      <a href= "https://codepen.io/sheywungee/full/zYxLxxw" target="_blank">
    <div className="flip-box-back">
      <p className="back-word"> click to view </p>
      <p>Landing Page</p>
    </div>
    </a>
  </div>
</div> 

          </div>  
          <a id="workLink" style= {green} href="https://codepen.io/sheywungee/" target="_blank" alt="my-pen">Show More<i className="fa fa-arrow-right"/></a>
          
          
        </section>   
        
       <section  id="contact">  
   <p className="subhead">Contact</p>
         <p className="contact-p">Lets work together...</p>
         
         <div id="icons">
           <a className="contact-a" href="https://github.com/Oluwaseun-Gbenle" target="_blank" alt="github"><i className="media fa fa-github"></i></a>
           <a className="contact-a" href="https://www.linkedin.com/in/oluwaseun-gbenle-03742a158" target="_blank" alt="linkedin"><i className="media fa fa-linkedin"></i></a>
            <a className="contact-a" href="https://twitter.com/sheywunG/" target="_blank" alt="twitter"><i className="media fa fa-twitter"></i></a>
            <a className="contact-a" href="https://instagram.com/sheywun.gee_/" target="_blank" alt="instagram"><i className="media fa fa-instagram"></i></a>
            <a className="contact-a" href="https://codepen.io/sheywungee/" target="_blank" alt="codepen"><i className="media fa fa-codepen"></i></a>
            <a className="contact-a" href="mailto:gbenleseun2016@gmail.com" target="_blank" alt="email"><i className="media fa fa-envelope"></i></a>
         </div>
       <p className="contact-p2">Oluwaseun Gbenle &copy; 2020</p>  
        </section>
        
    </div>
    
    
    )}
   else{
     return( <div style={darkModeActive} id="container">
    <div className="links">
    <nav id="nav-bar">
      <a className="navLink" onClick={this.toggleDropDown} href="#about"> About </a>
      <a className="navLink" onClick={this.toggleDropDown} href="#work"> Work </a>
      <a className="navLink" onClick={this.toggleDropDown} href="#contact"> Contact </a>
    </nav>
  </div>
        
      <main id="welcome-section">
    <div id="image">  
      <h2 id="text">Hello, I'm Seun,</h2>
    <p id="text2">a web developer.</p>
    <a id="box"   onClick={this.toggleDropDown} href="#about">Know more</a></div>
  </main>
         </div>
         )
     
   }
    
  }
  
}


export default App;
