import { useRef } from 'react'
import './memeber.css'
import { gsap } from 'gsap'
 function Member({meName, rank, myImg, }) {
    const ref = useRef(null)
    const mref = useRef(null)
    const sref = useRef(null)
    const name = useRef(null)

   
    const show = ()=>{
        gsap.fromTo([mref.current,], {height:"10vh",}, {height:"45.5vh", top:"25%"}, )
        gsap.fromTo([name.current], {display:"none", y:".5rem"}, {display:"block", y:"-4rem", }, )
        gsap.fromTo([ref.current, sref.current], { y:"10rem"}, {y:".5rem", delay: 1, stagger: .2}, )
    }
    const blank = ()=>{
        gsap.fromTo([mref.current,], {height:"45.5vh"}, {height:"10vh", top:"86%"}, )
        gsap.fromTo([name.current], {display:"none", y:"-4rem",}, {display:"block", y:".5rem",}, )
        gsap.fromTo([ref.current, sref.current], { y:".5rem"}, {y:"10rem", delay: 1 }, )
        
    }
  return (
    <div>
      <div className="member-complete" >
         <div className="mem-pic-details"  onMouseEnter={show} onMouseLeave={blank}>
            <div className="mem-img">
                <img className='mem-main-img' src={myImg} alt="" />
            </div>
            <div className="mem-detail-socials" ref={mref}>
               <div className="mem-ani" ref={name}>
                <div className="member-name" >
                        {meName}
                        <div className="rank">{rank}</div>
                    </div>
                    <div className="mem-details" ref={ref}>
                        intelligence, ambitious and 
                        perfectionist, work with {meName} is 
                        a signature of success</div>
                    <div className="mem-socials" ref={sref}>
                        <img className='mem-soc' src="asset/facebook.png" alt="" />
                        <img className='mem-soc'src="asset/tw.png" alt="" />
                        <img className='mem-soc'src="asset/in.png" alt="" />
                        <img className='mem-soc'src="asset/lkn.png" alt="" />
                    </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}
export default Member;
