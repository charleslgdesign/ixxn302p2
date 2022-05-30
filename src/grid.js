import e from './data/e.js'
import j from './data/j.js'
import $ from 'jquery'
import {useState} from 'react'


function Grid() {

const [buttonState, setButtonState] = useState(true)


function Reveal(i) {

    const key = i.id
    const translation = document.getElementById(key)
    const sentance = document.getElementById('sentance')



    setButtonState(!buttonState)

    if (buttonState == true) {
    
        $(translation).show();

        $(sentance).css('transform', "translateX(-200%)")
    
    }

   
    if (buttonState == false) {
        $(translation).hide();
        $(sentance).css('transform', "translateX(0%)")
    } 

    
}
    
    return (

<div id='grid' className='grid'>
    <div className='sidebar'></div>
        <div id='sentance' className='list'>
            {e.map(i=>( <div className='sentance'
                key={i.id} onClick={()=>Reveal(i)}>
                <p1 className='p1-white'>
                    <b>{i.id+1}</b>. {i.text}</p1><br/><br/></div>))}</div>
        <div className='list'>
            {j.map(i=>( <div className='sentance-translation' id={i.id}>
                <p1><b>{i.id+1}.</b> {i.text}</p1><br/><br/></div>))}</div>
    <div className='sidebar-2'></div>
</div>

    )}

    export default Grid