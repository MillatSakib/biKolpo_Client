import UserRecomendataionTable from "./UserRecomendataionTable";

const MyRecomendetion = () => {
  return (
    <div>
      <h2 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl">
        My Recommendations
      </h2>
      <div className="my-16">
        <UserRecomendataionTable></UserRecomendataionTable>
      </div>
    </div>
  );
};

export default MyRecomendetion;
