import { Link } from "react-router-dom";
import AddQueryBanner from "./AddQueryBanner";
import AllMyQuery from "./AllMyQuery";
let AllQueries = [{}, {}, {}, {}];
const MyQueries = () => {
  return (
    <div>
      <AddQueryBanner></AddQueryBanner>
      {AllQueries.length === 0 ? (
        <div className="text-center my-28 text-2xl md:text-3xl lg:text-4xl font-bold text-error">
          You have not added any query in previous. For add a Query
          <br />
          <Link to="/addQueries" className="btn my-6">
            Click Here
          </Link>
        </div>
      ) : (
        <AllMyQuery data={AllQueries}></AllMyQuery>
      )}
    </div>
  );
};

export default MyQueries;
