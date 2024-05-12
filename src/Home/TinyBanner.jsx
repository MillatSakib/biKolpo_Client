import { NavLink } from "react-router-dom";
import allQueriesImg from "../../public/allQuery.png";
const TinyBanner = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${allQueriesImg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">GO TO ALL QUERIES PAGE</h1>
            <p className="mb-5">
              You can get all queries about different product. If you click on
              Go All Query and explore different problem of different type of
              products and find the best product for your.
            </p>
            <NavLink to="/queris" className="btn btn-primary">
              Go All Queries
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default TinyBanner;
