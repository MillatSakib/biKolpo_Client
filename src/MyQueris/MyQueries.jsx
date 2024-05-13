import { Link } from "react-router-dom";
import AddQueryBanner from "./AddQueryBanner";
import AllMyQuery from "./AllMyQuery";
import { useContext, useEffect, useState } from "react";
import AuthProvider, { AuthContext } from "../AuthProvider";

const MyQueries = () => {
  const { user } = useContext(AuthContext);

  const [AllQueries, setData] = useState([]);
  const [dependency, setDependency] = useState(true);
  useEffect(() => {
    fetch(`https://bikolpo.vercel.app/myQueries/${user.email}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [dependency]);

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
        <AllMyQuery
          data={AllQueries}
          dependency={dependency}
          setDependency={setDependency}
        ></AllMyQuery>
      )}
    </div>
  );
};

export default MyQueries;
