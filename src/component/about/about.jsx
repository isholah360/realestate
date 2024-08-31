import './about.css'

function About() {
  return (
    <div>
    
      <div className="about-complete">
        <div className="img-content">
          <div className="img-buffer">
            <img className='martin' src="asset/img4b.jpeg" alt="" />
          </div>
          <div className="content-buffer">
              <div className="about-title">About</div>
              <div className="about-name">   DYLAN DAWSON REAL ESTATE </div>
              <div className="about-body">I am an experct in properties for sale, long and short lets in London, New York, Tokyo and Paris. I am licensed, experienced professional and can guarantee you the best deal possible. I work with the best properties on the market and know how to find successfully find a buyer for the property. My portfolio has a lot of successful cases and am willing to share with you. If you are looking to sell or buy a property, do not resitate and get in touch.</div>
              <div className="about-town">
                <p className="main-town">Downtown | Miami</p>
                <p className="add-town">785 West Side Road – Miami, FL 33879</p>
              </div>
              <div className="about-watpp-skyp">
                  <div className="watsapp">
                    <img className='media' src="asset/lkn.png" alt="" />
                    <img className='media' src="asset/fbcirc.png" alt="" />
                    <img className='media' src="asset/you1.png" alt="" />
                    <img className='media' src="asset/tw.png" alt="" />
                    <img className='media' src="asset/in.png" alt="" />
                  </div>
              </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default About
