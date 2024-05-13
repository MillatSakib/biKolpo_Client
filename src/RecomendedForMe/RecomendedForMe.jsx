import RecomendationForMeTable from "./RecomendationForMeTable";
const RecomendedForMe = () => {
  const data = [{}];

  return (
    <div>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center my-4">
        Recomendation For Me
      </h2>
      {data.length === 0 ? (
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
                  <RecomendationForMeTable></RecomendationForMeTable>
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
