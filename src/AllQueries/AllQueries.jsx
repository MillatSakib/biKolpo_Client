import { useEffect, useState } from "react";
import QueirisCard from "./QueirisCard";
import { IoSearch } from "react-icons/io5";

const AllQueries = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetch("https://bikolpo.vercel.app/allQeuries/")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setData(data);
      });
  }, []);
  const handleSearchClick = () => {
    setLoading(true);
    if (searchText.length) {
      fetch(`https://bikolpo.vercel.app/allQueries/${searchText}`)
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          setData(data);
        });
    } else {
      fetch("https://bikolpo.vercel.app/allQeuries/")
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          setData(data);
        });
    }
  };

  return (
    <div>
      <label className="relative flex justify-end my-6 mx-10">
        <input
          type="text"
          className="input input-bordered input-info w-full max-w-xs focus:outline-none"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearchClick();
            }
          }}
        />
        <span
          className="badge badge-info absolute right-0 h-full rounded hover:cursor-pointer"
          onClick={handleSearchClick}
        >
          <IoSearch />
        </span>
      </label>
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold">
        All Queries
      </h2>
      <div className="flex flex-wrap gap-6 w-[95%] md:w-[80%] lg:w-[65%] mx-auto mb-20 justify-center my-10">
        {loading ? (
          <span className="loading loading-spinner loading-lg text-success"></span>
        ) : data.length === 0 ? (
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-error">
            No Data Found!!!
          </h3>
        ) : (
          data.map((item, index) => (
            <QueirisCard data={item} key={index}></QueirisCard>
          ))
        )}
      </div>
    </div>
  );
};

export default AllQueries;
