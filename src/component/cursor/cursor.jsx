import { useState, useRef} from 'react'

import './cur.css'

function Cursor() {

    const ref = useRef(null)
    // const theStyle = {color:'red', fontSize:'2rem'}
        const enter = ()=>{
         ref.current.style.transform = "scale(2)"
         ref.current.style.background = "#B19777"
         ref.current.style.transition = ".3s;"
         ref.current.style.opacity = ".4"
       }
      const leave = ()=>{
         ref.current.style.transform = "scale(1)"
         ref.current.style.background = "none"
         ref.current.style.transition = ".3s;"
       }
    
     // const mystyle = useSelector((state) => state.cursor.theStyle)
    // const count = useSelector((state) => state.counter.count)
    //  const dispatch = useDispatch()
    
    const [cursorX, setCursorX] = useState()
    const [cursorY, setCursorY] = useState()
    
    window.addEventListener('mousemove', (e) => {
      setCursorX(e.pageX)
      setCursorY(e.pageY)
    })
  return (
    <div>
         {/* <div className='hello' onMouseEnter={enter} onMouseLeave={leave}>hello world</div> */}
      <div>
         <div ref={ref} className="cursor" style={
           {
             left: cursorX + 'px',
             top: cursorY + 'px'
           }
         }>
           <div className="cursor2"></div>
         </div>
      </div>
       <button className='hello' onMouseEnter={enter} onMouseLeave={leave}>blue</button>
      
    </div>
  )
}

export default Cursor
