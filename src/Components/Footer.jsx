import facebook from '../assets/footerImage/facebook.jpeg'
import instagram from '../assets/footerImage/instagram.jpeg'
import linkedin from '../assets/footerImage/linkdin.jpeg'
import twitter from '../assets/footerImage/twitter.jpeg'
import Logo from '../assets/footerImage/Logo.png'

const Footer = () => {
    return (
      <div className="bg-[#7f77f0] p-5 text-center font-sans">
        <div className="mb-5">
          <span className="block mb-2 font-bold">Connect with us</span>
          <div className="flex justify-center space-x-4">
            <a href="#">
              <img src={facebook} alt="Facebook" className="w-8 h-8" />
            </a>
            <a href="#">
              <img src={twitter} alt="Twitter" className="w-8 h-8" />
            </a>
            <a href="#">
              <img src={instagram} alt="Instagram" className="w-8 h-8" />
            </a>
            <a href="#">
              <img src={linkedin} alt="Linkedin" className="w-8 h-8" />
            </a>
          </div>
        </div>
  
        <div className="mb-5 space-y-2">
          <a href="/feedback" className="block md:inline-block mx-2 text-gray-800">Feedback</a>
          <a href="/weather-api" className="block md:inline-block mx-2 text-gray-800">Weather API</a>
          <a href="/news-room" className="block md:inline-block mx-2 text-gray-800">News Room</a>
        </div>
  
        <div className="mb-5 space-y-2">
          <a href="/terms-of-use" className="block md:inline-block mx-2 text-gray-800">Terms of Use |</a>
          <a href="/privacy-policy" className="block md:inline-block mx-2 text-gray-800">Privacy Policy |</a>
          <a href="/accessibility-statement" className="block md:inline-block mx-2 text-gray-800">Accessibility Statement |</a>
          <a href="/data-vendors" className="block md:inline-block mx-2 text-gray-800">Data Vendors</a>
        </div>
  
        <div className="mt-5">
          <img src={Logo} alt="Logo" className="w-24 mx-auto mb-3" />
          <p className="text-sm text-black">
            We recognise our responsibility to use data and technology for good. We may use or share
            your data with our data vendors. Take control of your data. Whiting, also known as whiting, 
            is a common marine fish found in the eastern North Atlantic Ocean. It is often recognized for its elongated body and silver-grey appearance.
            This species is popular in the culinary world, appreciated for its delicate, mild-flavored flesh.
          </p>
        </div>
      </div>
    );
  };
  
  export default Footer;
  
  