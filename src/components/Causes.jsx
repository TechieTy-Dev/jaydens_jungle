import React from 'react'
import As from '../assets/AutismSpeaks.png'
import troops from '../assets/supportTroops.png'
import fr from '../assets/firstResponder.png'
import k9 from '../assets/k9s.svg'
import paws from '../assets/paws.png'
import lineman from '../assets/lineman.jpg'

const Causes = () => {
  return (
    <section className="causes-section">
  <h2 className="CausesTitle">Causes I Support</h2>

  <div className="marquee">
    <ul className="marquee__content">
      <li><img src={As} alt="Autisum Speaks Logo" className="AustimLogo" /></li>
      <li><img src={troops} alt="Autisum Speaks Logo" className="AustimLogo" /></li>
      <li><img src={fr} alt="Autisum Speaks Logo" className="AustimLogo" /></li>
      <li><img src={k9} alt="Autisum Speaks Logo" className="AustimLogo" /></li>
      <li><img src={paws} alt="Autisum Speaks Logo" className="AustimLogo" /></li>
      <li><img src={lineman} alt="Autisum Speaks Logo" className="AustimLogo" /></li>
    </ul>

    <ul aria-hidden="true" className="marquee__content">
      <li><img src={As} alt="Autisum Speaks Logo" className="AustimLogo" /></li>
      <li><img src={troops} alt="Autisum Speaks Logo" className="AustimLogo" /></li>
      <li><img src={fr} alt="Autisum Speaks Logo" className="AustimLogo" /></li>
      <li><img src={k9} alt="Autisum Speaks Logo" className="AustimLogo" /></li>
      <li><img src={paws} alt="Autisum Speaks Logo" className="AustimLogo" /></li>
      <li><img src={lineman} alt="Autisum Speaks Logo" className="AustimLogo" /></li>
    </ul>
  </div>
</section>
  )
}

export default Causes