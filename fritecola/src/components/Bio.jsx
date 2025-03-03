import React from 'react'
import pOne from '../assets/bioImg/filtreDavRan.png';
import pTwo from '../assets/bioImg/christonymae.png';
import spaceh from "../img/headerspace.jpg";
import chris from "../assets/bioImg/chris.jpg";
import mae from "../assets/bioImg/mae.jpg";
import dav from "../assets/bioImg/david.jpg";
import tony from '../assets/bioImg/tony.jpg';
import randy from '../assets/bioImg/randy.jpg';
function Bio() {
  return (
    <div className='bio-container' style={{ backgroundImage: `url(${spaceh})` }}>
      <div className='title-bio'>
      <div className='img-gr'>
        <img src={pOne} alt="group"/>
        <img src={pTwo} alt="group"/>
      </div>
      <h1>BIOGRAPHIE DU GROUPE</h1>
      </div>
      
      <p>blablablablablablablablablabla
      blablablablablablablablablabla
      blablablablablablablablablabla
      blablablablablablablablablabla
      blablablablablablablablablabla
      blablablablablablablablablabla
      blablablablablablablablablabla
      blablablablablablablablablabla
      blablablablablablablablablabla
      </p>

   <div className='bio-member-container'>
    <h1>Présentation des membres</h1>
    <p className='bychris'>par Christophe lui même</p>

   </div>

<div className='member'>
<div className='chris'>
<img className='membre' src={chris} alt="group"/>
<div className='description-chris'>
  <h3>Chris</h3>
  <p >bkabkabkabababababababababababbaab</p>
</div>
</div>
<div className='chris'>
<img className='membre' src={mae} alt="group"/>
<div className='description-chris'>
  <h3>Mae</h3>
  <p>bkabkabkabababababababababababbaab</p>
</div>
</div>
<div className='chris'>
<img className='membre' src={dav} alt="group"/>
<div className='description-chris'>
  <h3>David</h3>
  <p>bkabkabkabababababababababababbaab</p>
</div>
</div>
<div className='chris'>
<img className='membre' src={tony} alt="group"/>
<div className='description-chris'>
  <h3>Tony</h3>
  <p>bkabkabkabababababababababababbaab</p>
</div>
</div>
<div className='chris'>
<img className='membre' src={randy} alt="group"/>
<div className='description-chris'>
  <h3>Randy</h3>
  <p>bkabkabkabababababababababababbaab</p>
</div>
</div>


</div>


    </div>
  )
}

export default Bio