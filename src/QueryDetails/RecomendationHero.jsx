import React from "react";

const RecomendationHero = ({ data }) => {
  console.log(data);
  return (
    <div className="hero bg-base-200">
      <div className="flex justify-start items-start gap-4 p-4 flex-col lg:flex-row">
        <img
          src={data.productImage}
          className="w-full md:max-w-[300px] rounded-lg shadow-2xl"
        />
        <div className="w-full">
          <div className="my-6">
            <img
              src={data.recomender_profileImage}
              className="rounded-full w-16"
            ></img>
            <div>{data.recomenderName}</div>
          </div>
          <h1 className="text-2xl font-bold my-2">Title: {data.title}</h1>
          <div>Product/service Name: {data.productName}</div>
          <p className="py-6">
            <span className="font-bold">Recomendation Reason: </span>
            <br />
            {data.reason}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecomendationHero;
