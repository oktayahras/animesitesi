import React from 'react';
import about from './about.jpg';

function About() {
  return (
    <div className='row'>
      <div className="col-sm-5">
          <h2 style={{"fontWeight":"bold","marginTop":"2rem"}}>Reactflix Nedir?</h2>
          <img style={{"float":"left", "width":"550px", "height":"400px", "marginTop":"2rem"}} src = {about} alt = "about-img" /> 
        </div>
    
      <div className="col-sm-7">
        <p style={{"marginTop":"6.5rem", "marginLeft":"2rem","marginRight":"5rem"}}> Reactflix; internet bağlantılı binlerce cihazda ödüllü animeler,anime  filmleri
        ve daha fazlasını içeren geniş bir arşiv sunan bir streaming hizmetidir. Çok fazla bu tarz platformun olduğunun bilincindeyiz ancak bunların hemen hemen
        hiç birisi Reactflix'in çalışma prensiplerine sahip değillerdir. Çünkü sitemiz bünyesinde özel bir teknik ekip sadece sizlerin film izleme kalitesini arttırmak adına
        haftanın yedi gününde ara vermeden çalışmaktadırlar. Bu sebeple de sitemizde yer alan istisnasız her anime  ve anime fillerini üst düzey kalitede sizlerin beğenisine sunulmaktadır.
        Bu durum ise sitemizin ilk ve en önemli olmazsa olmazları arasındadır.</p>
        <p style={{"marginLeft":"2rem"}}>Sevdiginiz anileleri izlerken iyi eglenceler. </p>
      </div>
    </div>
    
  )
}

export default About;

