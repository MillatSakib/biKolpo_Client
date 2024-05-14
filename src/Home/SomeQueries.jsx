import { useEffect, useState } from "react";
import QueirisCard from "./QueirisCard";

const SomeQueries = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://bikolpo.vercel.app/sevenQueries")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        const temp = loading;
        setLoading(!temp);
      });
  }, []);
  return (
    <div className="my-16">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold my-6 text-center">
        Recent Queries
      </h2>
      <p className="text-center mb-10 text-xl font-semibold">
        Here some Latest Queries for you.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        {loading ? (
          <span className="loading loading-spinner loading-lg text-success"></span>
        ) : (
          data.map((item, index) => (
            <QueirisCard data={item} key={index}></QueirisCard>
          ))
        )}
      </div>
    </div>
  );
};

export default SomeQueries;
