import QueirisCard from "./QueirisCard";

const SomeQueries = () => {
  const abc = [{}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div className="my-16">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold my-6 text-center">
        Recent Queries
      </h2>
      <p className="text-center mb-10 text-xl font-semibold">
        Here some Latest Queries for you.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        {abc.map((data, index) => (
          <QueirisCard data={data} key={index}></QueirisCard>
        ))}
      </div>
    </div>
  );
};

export default SomeQueries;
