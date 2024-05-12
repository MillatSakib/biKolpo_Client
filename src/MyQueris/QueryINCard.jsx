import { Link } from "react-router-dom";

const QueryINCard = () => {
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">This is Query Title</h2>
          <div>This is brand Name</div>
          <p>This is alternation Reason</p>
          <div className="card-actions justify-between items-center">
            <span>This is Date Posted</span>
          </div>
          <div className="flex gap-2 justify-center">
            <Link
              to="/updateQuery/id"
              className="btn btn-outline w-[45%] btn-success"
            >
              Update
            </Link>
            <button className="btn btn-outline btn-error w-[45%]">
              Delete
            </button>
          </div>
          <div className="text-center">
            <button className="btn w-full btn-info">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryINCard;
