import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";

const AddQueries = () => {
  const handlesubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    let currentDateTime = Date.now();
    const formData = {
      ProductName: form.ProductName.value,
      ProductBrand: form.ProductBrand.value,
      queryTitle: form.queryTitle.value,
      img_url: form.img_url.value,
      email: form.email.value,
      name: form.name.value,
      boycottingReason: form.boycottingReason.value,
      profilePhoto: user.photoURL,
      recomendationCount: 0,
      currentDateTime,
    };

    axios
      .post("https://bikolpo.vercel.app/addQueries", formData)
      .then((res) => {
        form.ProductName.value = "";
        form.ProductBrand.value = "";
        form.queryTitle.value = "";
        form.img_url.value = "";
        form.boycottingReason.value = "";
        // console.log(res.data);
        toast.success(res.data, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
        });
      })
      .catch((error) => {
        toast.error(error?.response?.data?.error, {
          position: "bottom-right",
        });
      });
  };

  const { user } = useContext(AuthContext);
  return (
    <div className="text-center mb-28">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold my-10">
        Add Query
      </h2>
      <div className="w-[95%] md:w-[80%] lg:w-[65%] mx-auto">
        <form onSubmit={handlesubmit}>
          <div className="flex gap-2 justify-center">
            <label className="form-control w-full max-w-xs mx-4 my-2">
              <div className="label">
                <span className="label-text">Product Name</span>
              </div>
              <input
                required
                name="ProductName"
                type="text"
                placeholder="Product Name"
                className="input input-bordered w-full max-w-xs text-base-content bg-base-100"
              />
            </label>
            <label className="form-control w-full max-w-xs mx-4 my-2">
              <div className="label">
                <span className="label-text">Product Brand</span>
              </div>
              <input
                required
                name="ProductBrand"
                type="text"
                placeholder="Product Brand"
                className="input input-bordered w-full max-w-xs text-base-content bg-base-100"
              />
            </label>
          </div>

          <div className="flex gap-2 justify-center">
            <label className="form-control w-full max-w-xs mx-4 my-2">
              <div className="label">
                <span className="label-text">Query Title</span>
              </div>
              <input
                type="text"
                required
                name="queryTitle"
                placeholder=" Ex: Is there any Better product that gives me the same quality?"
                className="input input-bordered w-full max-w-xs text-base-content bg-base-100"
              />
            </label>

            <label className="form-control w-full max-w-xs mx-4 my-2">
              <div className="label">
                <span className="label-text">Product Image Link</span>
              </div>
              <input
                required
                name="img_url"
                type="text"
                placeholder="Product Image URL"
                className="input input-bordered w-full max-w-xs text-base-content bg-base-100"
              />
            </label>
          </div>

          <div className="flex gap-2 justify-center">
            <label className="form-control w-full max-w-xs mx-4 my-2">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                name="email"
                type="email"
                placeholder=""
                className="input input-bordered w-full max-w-xs text-base-content bg-base-100"
                defaultValue={user?.email}
                disabled
              />
            </label>

            <label className="form-control w-full max-w-xs mx-4 my-2">
              <div className="label">
                <span className="label-text">User Name</span>
              </div>
              <input
                name="name"
                type="text"
                defaultValue={user?.displayName}
                className="input input-bordered w-full max-w-xs text-base-content bg-base-100"
                disabled
              />
            </label>
          </div>

          <div className="my-2 justify-center max-w-[700px] mx-auto">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Boycotting Reason Details</span>
              </div>
              <textarea
                required
                name="boycottingReason"
                placeholder="Write here  Boycotting Reason Details..."
                className="textarea textarea-bordered textarea-lg w-full text-base-content bg-base-100"
              ></textarea>
            </label>
          </div>
          <div className="my-4  max-w-[700px] mx-auto">
            <input
              type="submit"
              className="btn btn-success text-white w-full"
              value="Add"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddQueries;
