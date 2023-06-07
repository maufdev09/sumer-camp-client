import whiteLogo from "../../assets/logo/SportsPro Academy-logos_white.png";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Fotter = () => {
  return (
    <div>
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div className="">
          <img className="w-44" src={whiteLogo} alt="" />
          <p className="">
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
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
