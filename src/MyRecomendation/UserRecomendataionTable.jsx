import React from "react";
import TableData from "./TableData";

const UserRecomendataionTable = () => {
  const data = [{}, {}];
  const length = data.length;
  return (
    <>
      {length === 0 ? (
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
                  <th>Product & Brand Name</th>
                  <th>Recommendation Reason</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data.map((singleData, index) => (
                  <TableData data={singleData} key={index}></TableData>
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
