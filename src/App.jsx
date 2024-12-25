import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [hello, setHello] = useState({hello: "bolo"}) // Double quotes (Prettier should fix this)

  return (
    <>
      <div>fsdfk;ldsjf; sdkfjdslkf ;sdkfjdslkf</div> {/* Extra spaces (Prettier will fix) */}
      
      ksdf;dls ddjf {/* Random unformatted text */}
      
      <p>jflksadfjdsf;<data value="sdfkdsjf">dfdsfdf</data></p> 
      
      sdfjsdlkfj {/* Random unformatted text */}
      lsdkfjdskl p {/* Random unformatted text */}
    </>
  )
}

export default App
