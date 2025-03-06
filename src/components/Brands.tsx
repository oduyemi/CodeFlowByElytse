import React from 'react';

export const Brands: React.FC = () => {
  return (
    <div className="unslate_co--section">
      <div className="container">
        <div className="owl-carousel logo-slider">
          <div className="logo-v1 gsap-reveal">
            <img src="images/logo-google.png" alt="Google" className="img-fluid" />
          </div>
          <div className="logo-v1 gsap-reveal">
            <img src="images/logo-puma.png" alt="Puma" className="img-fluid" />
          </div>
          <div className="logo-v1 gsap-reveal">
            <img src="images/logo-paypal.png" alt="Paypal" className="img-fluid" />
          </div>
          <div className="logo-v1 gsap-reveal">
            <img src="images/logo-adobe.png" alt="Adobe" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

