import pran from "../../public/pran.png";
import bosundhora from "../../public/bosundhora.png";
import usbangla from "../../public/usbangla.png";
const OurPartners = () => {
  return (
    <div className="mx-auto w-[95%] md:w-[80%] lg:w-[65%] my-10">
      <h3 className="text-2xl md:text-3xl font-bold text-center my-10">
        Our Partners
      </h3>
      <p className="text-center w-[99%] md:w-[95%] lg:w-[65%] mx-auto">
        At biKolpo, we believe in the strength of partnerships and
        collaborations to amplify our impact and advance our mission of
        empowering consumers for change. We are proud to work with a diverse
        range of organizations, businesses, and groups that share our commitment
        to ethical consumerism, transparency, and social responsibility.
      </p>
      <div className="flex flex-wrap justify-center">
        <img src={pran} className="max-w-[500px]"></img>
        <img src={usbangla} className="max-w-[500px]"></img>
        <img src={bosundhora} className="max-w-[500px]"></img>
      </div>
    </div>
  );
};

export default OurPartners;
