import whiteLogo from "../../assets/logo/SportsPro Academy-logos_white.png";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Fotter = () => {
  return (
    <div>
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div className="">
          <img className="w-44" src={whiteLogo} alt="" />
          <p className="">
          Welcome to SportPro Academy's Summer Camp, where young athletes transform into champions! Our camp offers a dynamic and immersive training experience, focusing on honing individual sports skills, fostering teamwork, and nurturing a winning mentality. Under the guidance of expert coaches, participants will engage in rigorous training sessions, friendly competitions, and skill-enhancing drills tailored to their specific sport of interest.
          </p>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4 text-2xl">
            <a>
              <FaFacebookF />
            </a>
            <a>
              <FaYoutube></FaYoutube>
            </a>
            <a>
              <FaInstagram></FaInstagram>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Fotter;
