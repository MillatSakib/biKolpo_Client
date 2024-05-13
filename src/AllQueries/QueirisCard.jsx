import { Link } from "react-router-dom";

const QueirisCard = ({ data }) => {
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
    <>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={data?.img_url} alt="Shoes" className="w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data?.queryTitle}</h2>
          <div>Brand: {data?.ProductBrand}</div>
          <p>{descirption}</p>
          <div className="card-actions justify-between items-center">
            <div className="flex flex-col gap-1">
              <span>{formattedDate}</span>
              <span>{data?.recomendationCount}</span>
            </div>

            <div className="flex items-end flex-col gap-2">
              <div className="avatar">
                <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={data?.profilePhoto} />
                </div>
              </div>
              <div>{data?.name}</div>
            </div>
          </div>
          <Link to={`/queryDetails/${data._id}`} className="btn btn-info">
            Give a Recomendation
          </Link>
        </div>
      </div>
    </>
  );
};

export default QueirisCard;
