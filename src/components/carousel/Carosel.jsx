import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/banner/pexels-art-guzman-13741887.jpg";
import img3 from "../../assets/banner/pexels-thirdman-5247203.jpg";
import img4 from "../../assets/banner/pexels-tim-mossholder-1080882.jpg";

const Carosel = () => {
  return (
    <Carousel>
      <div className="h-[95vh]">
        <img src={img1} className="w-full h-full" />
        <p className="legend">Try Marathon</p>
      </div>
      <div className="h-[95vh]">
        <img src={img3} className=" h-full" />
        <p className="legend">Try FootBall</p>
      </div>
      <div className="h-[95vh]">
        <img src={img4} className="w-full h-full" />
        <p className="legend">Try Basket Ball</p>
      </div>
    </Carousel>
  );
};

export default Carosel;
