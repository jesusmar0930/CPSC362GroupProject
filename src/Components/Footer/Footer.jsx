import './Footer.css';



const Footer = () => {
  return (
    <div className='footer'>
      <a href='example.com'>
        <img
           src= {require("../../assets/titan_radio_logo.png")}
          alt="titan radio"
          className='my-image-titan-radio'
        />
        </a>
      <a href="google.com">
        <img
          src= {require("../../assets/linkedin_logo.png")}
          alt="linkedin"
          className='my-image-linkedin'
        />
      </a>

      <a href="bing.com">
        <img
          src= {require("../../assets/instagram_logo.png")}
          alt="instagram"
          className='my-image-instagram'
        />
      </a>

      <a href="apple.com">
        <img
         src= {require("../../assets/facebook_logo2.png")}
          alt="facebook"
          className='my-image-facebook'
        />
      </a>
      <hr className="my-line" />
      <form className='foot-text'>
      <h4>non copyrighted </h4>
      </form>
      <a href="https://www.example.com" className='home-footer'>
        <h4>home</h4>
      </a>
      <a href="facebook.com" className='about-footer'>
        <h4>about</h4>
      </a>
      <a href="twitter.com" className='terms-footer'>
        <h4>term</h4>
      </a>
      <a href="youtube.com" className='contact-footer'>
        <h4>contact</h4>
      </a>
      <a href="twitch.tv" className='faq-footer'>
        <h4>faq</h4>
      </a>
    </div>

  );
};

export default Footer;
