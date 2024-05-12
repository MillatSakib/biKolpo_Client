import { useContext } from "react";
import { AuthContext } from "../AuthProvider";

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
  };
  const { user } = useContext(AuthContext);
  return (
    <div className="text-center">
      <h2>This is add queris</h2>
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

          <div className="mx-4 my-2 justify-center">
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
          <div className="mx-4 my-4">
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
