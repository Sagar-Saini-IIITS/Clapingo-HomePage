import React from 'react'
import './offer.css';
import img1 from '../images/offer1.png';
import img2 from '../images/offer2.png';
import img3 from '../images/offer3.png';
function offer() {
  return (
    <div className="offer">
    <h3>What we offer?</h3>
    <div id="offercards">
        <div className="offercard">
            <img src={img1}/>
            <div className='offerrect'>
                <span>
                Customised Curriculum
                </span>
                <p>
                Customised sessions and module for Basic, Intermediate and Advanced learners.
                </p>
            </div>
        </div>
        <div className="offercard">
            <img src={img2}/>
            <div className='offerrect'>
            <span>
            Experimental Learning 
                </span>
                <p>
                Do not study English, rather consume and use it.
                </p>
            </div>
        </div>
        <div className="offercard">
            <img src={img3}/>
            <div className='offerrect'>
            <span>
            Shadowing Method
                </span>
                <p>
                Think and speak in English rather than translating it from mother tongue.
                </p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default offer