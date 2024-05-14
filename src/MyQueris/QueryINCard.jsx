import { Link } from "react-router-dom";
import swal from "sweetalert";

const QueryINCard = ({ data, setDependency, dependency }) => {
  const handleDelete = () => {
    swal({
      title: "Are you sure?",
      text: "If click delete, you will not be able to recover this data again!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://bikolpo.vercel.app/myAddedSpot/${data?._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            const temp = dependency;
            setDependency(!temp);
            swal("Your Data has been deleted!", {
              icon: "success",
            });
          });
      } else {
        swal("Ok, we aren't deleted your Data!");
      }
    });
  };
  const descirption = data?.boycottingReason?.substring(0, 250) + "  .....";
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
  const formattedDate = formatDate(data?.currentDateTime);
  return (
    <div>
      <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure>
          <img src={data.img_url} alt="" className="w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data.queryTitle}</h2>
          <div>{data.ProductBrand}</div>
          <p>{descirption}</p>
          <div className="card-actions justify-between items-center">
            <span>Post Date: {formattedDate}</span>
          </div>
          <div className="flex gap-2 justify-center">
            <Link
              to={`/updateQuery/${data._id}`}
              className="btn btn-outline w-[45%] btn-success"
            >
              Update
            </Link>
            <button
              onClick={handleDelete}
              className="btn btn-outline btn-error w-[45%]"
            >
              Delete
            </button>
          </div>
          <div className="text-center">
            <Link
              to={`../queryDetails/${data._id}`}
              className="btn w-full btn-info"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryINCard;
