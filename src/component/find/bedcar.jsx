import { homes } from "./findata"
import './find.css'

function Bedcar() {
  return (
    <div>
      {homes.map((home)=>(
        <div className="all-homes" key={home.id}>
              <div className="all-symbols">
                <div className="symbol-value">
                    <img className='main-bed' src={home.bed} alt="" />
                    {/* <div className="val">{home.val}</div> */}
                </div>
                <div className="symbol-value">
                    <img className='main-bed' src={home.shawa} alt="" />
                    {/* <div className="val">{home.val}</div> */}
                </div>
                <div className="symbol-value">
                    <img className='main-bed' src={home.car} alt="" />
                    {/* <div className="val">{home.val}</div> */}
                </div>
                <div className="symbol-value">
                    <img className='main-bed' src={home.shawa} alt="" />
                    <div className="val">{home.shawn}</div>
                </div>  
            </div>
        </div>
      ))}
    </div>
  )
}

export default Bedcar
