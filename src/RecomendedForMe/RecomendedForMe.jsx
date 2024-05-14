import { useContext, useEffect, useState } from "react";
import RecomendationForMeTable from "./RecomendationForMeTable";
import { AuthContext } from "../AuthProvider";
const RecomendedForMe = () => {
  const [data, setData] = useState([]);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://bikolpo.vercel.app/recomendationForMe/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center my-4">
        Recomendation For Me
      </h2>
      {loading ? (
        <div className="text-center my-20">
          <span className="loading loading-spinner loading-lg text-success"></span>
        </div>
      ) : data.length === 0 ? (
        <div className="text-error font-semibold text-xl md:text-2xl lg:text-3xl text-center my-10">
          You have not get any recomendation yet!!!
        </div>
      ) : (
        <div className="mx-4 md:mx-6 lg:mx-8">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Profile</th>
                  <th>Query Title</th>
                  <th>Recomendation Title</th>
                  <th>Product</th>
                  <th>Recommendation Reason</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data.map((singleData, index) => (
                  <RecomendationForMeTable
                    data={singleData}
                    key={index}
                  ></RecomendationForMeTable>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecomendedForMe;
