import { NavLink } from "react-router-dom";
import bannerImage from "../../public/addQueryBanner.jpg";
const AddQueryBanner = () => {
  return (
    <>
      <div
        className="hero min-h-[50vh]"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Add Your Query</h1>
            <p className="mb-5 font-semibold">
              If you face any problem with any product or any service feel free
              to share with us. You can get better alternative from here and
              others can get clear knowledge about a product or service.
            </p>
            <NavLink to="/addQueries" className="btn btn-primary">
              Add Queries
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddQueryBanner;
