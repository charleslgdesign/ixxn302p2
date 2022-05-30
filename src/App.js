import index from './index.js'
import Translation from './translation.js'
import engooSite from './engoo.png'
import { useState } from 'react'

import { Link } from 'react-scroll'


  function App() {

    const [show,setShow] = useState()

    return (
        <>
        <div className='engoo-site'>
            <img src={engooSite} className='engoo-img' />
            <div id='translation'>{show?<Translation/>:null}</div>

            <Link activeClass='active' to='translation' 
            smooth={true} spy={true}><button className='translation-flashcards' 
            onClick={()=>setShow(true)}>Article Flashcards</button></Link>
             
        </div>

  

</>



    )
}

export default App

