import OurMission from "./OurMission";
import OurPartners from "./OurPartners";
import SomeQueries from "./SomeQueries";
import SwipeBanner from "./SwipeBanner";
import TinyBanner from "./TinyBanner";

const Home = () => {
  return (
    <div>
      <SwipeBanner></SwipeBanner>
      <div className="my-16">
        <></>
        <TinyBanner></TinyBanner>
      </div>
      <SomeQueries></SomeQueries>
      <OurMission></OurMission>
      <OurPartners></OurPartners>
    </div>
  );
};

export default Home;
