import { useEffect, useState } from "react";
import QueirisCard from "./QueirisCard";

const AllQueries = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://bikolpo.vercel.app/allQeuries")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold">
        All Queries
      </h2>
      <div className="flex flex-wrap gap-6 w-[95%] md:w-[80%] lg:w-[65%] mx-auto mb-20 justify-center my-10">
        {data.map((data, index) => (
          <QueirisCard data={data} key={index}></QueirisCard>
        ))}
      </div>
    </div>
  );
};

export default AllQueries;
