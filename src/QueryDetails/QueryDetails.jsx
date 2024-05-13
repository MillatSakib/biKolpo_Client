import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { toast } from "react-toastify";
import axios from "axios";

const QueryDetails = () => {
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    let currentDateTime = Date.now();
    const form = e.target;
    const data = {
      title: form.title.value,
      productName: form.productName.value,
      productImage: form.productImage.value,
      reason: form.reason.value,
      userName: user.displayName,
      profileImage: user.photoURL,
      recommernderEmail: user.email,
      currentDateTime,
    };
    // console.log("objectobject");
    axios
      .post("https://bikolpo.vercel.app/addRecomendation", data)
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
      <img
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
        className="w-full"
      ></img>
      <div className="w-[95%] md:w-[80%] lg:w-[65%] mx-auto my-16">
        <div className="text-xl md:text-2xl lg:text-3xl font-semibold">
          This is Query Title
        </div>
        <div className="flex justify-between mt-4">
          <div className="text-xl font-semibold">Product Name</div>
          <div className="text-xl font-semibold text-orange-500">
            Brand Name
          </div>
        </div>
        <p>Here write Alternation Reason</p>
        <div className="flex justify-between mt-4">
          <div>Posted Date: </div>
          <div>Total Recomendation: </div>
        </div>
        <div className="my-6">
          <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            className="rounded-full w-16"
          ></img>
          <div>Md. Sohan Millat Sakib</div>
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
