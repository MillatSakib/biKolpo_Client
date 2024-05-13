import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { toast } from "react-toastify";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

const QueryDetails = () => {
  const apiData = useLoaderData();
  const queryData = apiData.data[0];
  // console.log(queryData);
  function formatDate(dateStringInMilliseconds) {
    const milliseconds = parseInt(dateStringInMilliseconds);
    const date = new Date(milliseconds);
    const options = {
      weekday: "short",
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return date.toLocaleDateString("en-US", options);
  }
  const formattedDate = formatDate(queryData?.currentDateTime);
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    let currentDateTime = Date.now();
    const form = e.target;
    const data = {
      title: form.title.value,
      recomendedProductName: form.productName.value,
      productImage: form.productImage.value,
      reason: form.reason.value,
      recomenderName: user.displayName,
      profileImage: user.photoURL,
      recommernderEmail: user.email,
      currentDateTime,
      postId: queryData._id,
      queryTitle: queryData.queryTitle,
      productName: queryData.ProductName,
      queryUserName: queryData.name,
      quryUserEmail: queryData.email,
    };
    // console.log("objectobject");
    axios
      .post(
        `https://bikolpo.vercel.app/addRecomendation/${queryData._id}`,
        data
      )
      .then((res) => {
        form.title.value = "";
        form.productName.value = "";
        form.productImage.value = "";
        form.reason.value = "";
        toast.success(res.data, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
        });
      })
      .catch((error) => {
        toast.error(error?.response?.statusText, {
          position: "bottom-right",
        });
      });
  };
  return (
    <div>
      <img src={queryData.img_url} className="h-[70vh] mx-auto"></img>
      <div className="w-[95%] md:w-[80%] lg:w-[65%] mx-auto my-16">
        <div className="text-xl md:text-2xl lg:text-3xl font-semibold">
          {queryData.queryTitle}
        </div>
        <div className="flex justify-between mt-4 flex-col md:flex-row gap-2">
          <div className="text-xl font-semibold">
            Product/service Name: {queryData.ProductName}
          </div>
          <div className="text-xl font-semibold text-orange-500">
            Brand Name: {queryData.ProductBrand}
          </div>
        </div>
        <h3 className="text-xl md:text-2xl lg:text-3xl my-6 font-bold text-error">
          Reason of Boycott
        </h3>
        <p className="my-2">{queryData.boycottingReason}</p>
        <div className="flex justify-between mt-4">
          <div>Posted Date: {formattedDate}</div>
          <div>Total Recomendation: {queryData.recomendationCount}</div>
        </div>
        <div className="my-6">
          <img src={queryData.profilePhoto} className="rounded-full w-16"></img>
          <div>{queryData.name}</div>
        </div>

        <div>
          <form onSubmit={handleSubmit}>
            <h3 className="text-center font-bold text-xl md:text-2xl lg:text-3xl my-4">
              Give A Recomendation
            </h3>
            <div className="flex gap-4 justify-center">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Title</span>
                </div>
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  className="input input-bordered w-full max-w-xs"
                  required
                />
              </label>

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Product Name</span>
                </div>
                <input
                  type="text"
                  name="productName"
                  placeholder="Product Name"
                  className="input input-bordered w-full max-w-xs"
                  required
                />
              </label>
            </div>
            <div className="flex gap-4 justify-center">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Product Image</span>
                </div>
                <input
                  type="text"
                  name="productImage"
                  placeholder="Product Image"
                  className="input input-bordered w-full max-w-xs"
                  required
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Recommendation Reason</span>
                </div>
                <textarea
                  placeholder="Recommendation Reason"
                  name="reason"
                  className="textarea textarea-bordered textarea-lg w-full max-w-xs"
                  required
                ></textarea>
              </label>
            </div>
            <div className=" text-center my-4">
              <input
                type="submit"
                value="Sent Recomendataion"
                className="btn btn-outline btn-success"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QueryDetails;
