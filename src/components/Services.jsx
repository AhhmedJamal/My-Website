import Titles from "./Titles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileScreenButton,
  faPenRuler,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";
import ServicesItem from "./ServicesItem";
function Services() {
  const design = <FontAwesomeIcon icon={faPenRuler} />;
  const web = <FontAwesomeIcon icon={faDesktop} />;
  const mobile = <FontAwesomeIcon icon={faMobileScreenButton} />;
  return (
    <>
      <Titles text="services" />
      <div className="mt-[100px]">
        <ServicesItem
          icon={design}
          title="web design"
          description="Create illustrations, infographics, motion graphics,
           and more to achieve your brand's vision."
        />
        <ServicesItem
          icon={web}
          title="web dev"
          description="Always stay up to date with the latest developments in
          deployment, customization and  design an optimal and
          seamless approach to how you use your software. I have experience in 
          javascript and typescript and react js and tailwind for styling "
        />
        <ServicesItem
          icon={mobile}
          title="mobile dev"
          description="With my experience within my 
          own limited mobile app development packages, 
          I can help you create a smooth and seamless
           experience across various vehicles."
        />
      </div>
    </>
  );
}

export default Services;
