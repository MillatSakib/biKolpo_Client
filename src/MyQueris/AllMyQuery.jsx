import QueryINCard from "./QueryINCard";

const AllMyQuery = ({ data, dependency, setDependency }) => {
  return (
    <div>
      <h2 className="my-20 font-bold text-3xl md:text-4xl lg:text-5xl text-center">
        All Your Queris
      </h2>
      <div className="flex flex-wrap gap-6 w-[95%] md:w-[80%] lg:w-[65%] mx-auto mb-20 justify-center">
        {data.map((data, index) => (
          <QueryINCard
            data={data}
            key={index}
            dependency={dependency}
            setDependency={setDependency}
          ></QueryINCard>
        ))}
      </div>
    </div>
  );
};

export default AllMyQuery;
