import React, { useContext, useEffect, useState } from "react";
import TableData from "./TableData";
import { AuthContext } from "../AuthProvider";

const UserRecomendataionTable = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [dependency, setDependency] = useState(true);
  const length = data.length;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://bikolpo.vercel.app/myRecomendetion/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [dependency]);
  return (
    <>
      {loading ? (
        <div className="text-center my-20">
          {" "}
          <span className="loading loading-spinner loading-lg text-success"></span>
        </div>
      ) : length === 0 ? (
        <div className="font-bold text-center text-xl md:text-2xl lg:text-3xl text-error">
          You Have not give any recomendation yet!
        </div>
      ) : (
        <div className="mx-4 md:mx-6 lg:mx-8">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Profile</th>
                  <th>Query Title</th>
                  <th>Product Name or Service</th>
                  <th>Recommendation Reason</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data.map((singleData, index) => (
                  <TableData
                    data={singleData}
                    dependency={dependency}
                    setDependency={setDependency}
                    key={index}
                  ></TableData>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default UserRecomendataionTable;
