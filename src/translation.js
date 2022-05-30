import logo from './conversation-engoo.png'
import './App.css';
import Grid from './grid.js'
import a from './data/a.js'
import {useState, useEffect} from 'react'
import articlewords from './data/articlewords.js'
import articledefinitions from './data/articledefinitions.js'
import $ from 'jquery'

function randomArrayShuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}






function Translation() {

  
  function reveal(clickedId) {

 
    var target = document.getElementById(clickedId)
    console.log(target)
    $(target).css({'color': '#000'})
  
  }


  const randomwords = randomArrayShuffle(articlewords)
  const randomdef = randomArrayShuffle(articledefinitions)
    const [showP,setShowP] = useState()
    const [clickCount, setClickCount] = useState(0)
    const [time, setTime] = useState(0)
    const [running, setRunning] = useState(false);  

   
        

        useEffect(() => {
            let interval;
            if (running) {
              interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
              }, 10);
            } else if (!running) {
              clearInterval(interval);
            }
            return () => clearInterval(interval);
          }, [running]);


    

    return (

<div className='body'>

    <div className='header'>
      
        {/* <div className='click-count'><p2>click count: <b>{clickCount}</b></p2></div>
        <div className='time-count'><p2>time count: <b>{time}</b></p2></div> */}
        <div onClick={()=>setShowP(!showP)}><img src={logo} className='logo'/></div>
        {showP?<div className='onboard-prompt'>
            <p2><b>click</b> or <b>tap</b> on a <b>sentance</b> to provide a <b>coresponding translation.</b></p2></div>:null}
        </div>
        {/* <div className='white-paper'>
          <p3 className='white-paper-text'><b>Problem:</b><br/><br/>
            Currently, users of the Engoo platform are experiencing
            an unoptimised experience within the interlinear text translation, 
            which is hidering their learning abililty. 
            This leads to paid lessons inhibiting wasted potential.
            <br/><br/>
            <b>Objective:</b><br/><br/>
            
            <br/><br/>
            <b>Attributes:</b><br/><br/>
            - Intuitive (familar) interface. Must be familiar to students and teachers who currently
use the platform<br/><br/>
- Breaks down articles into more digestable chunks (mnuemonic strategy)<br/><br/>

- Is more affffective than the current text translation (A-B testing)<br/><br/>

- Aesthetically engaging (although not distracting from learning content)<br/><br/>
</p3>
        </div> */}

        
    <div onClick={()=>{setClickCount(clickCount+1);setRunning(!running)}}>
<Grid/>
</div>
<div className='article'>
  <div className='element1'>
            {randomwords.map(i=>{
            return (
            <p3 onClick={()=>{reveal(i.id);setClickCount(clickCount+1)}}>{i.word}<br/>{i.translation}</p3>
            )})}
        </div>
      <div className='element2'>
            {randomdef.map(i=>{
            return (
            <p3 id={i.id} >{i.text}</p3>
            )})}
        </div>
      </div>

  


<div className='footer'></div>
</div>

        )
}

export default Translation
