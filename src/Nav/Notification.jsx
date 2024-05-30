import { NavLink } from "react-router-dom";

const Notification = ({ data }) => {
  return (
    <li className="max-w-[100%]">
      <div>
        <NavLink to={`/queryDetails/${data?._id}`}>
          <div className="flex gap-4 md:gap-6 items-center">
            <div>
              <div className="avatar">
                <div className="w-14 rounded-full">
                  <img src={data?.profilePhoto} />
                </div>
              </div>
            </div>

            <p>
              New Query added <strong>"{data?.name}".</strong> If you have any
              idea about alternative product or services, you can give
              recomendation
              <strong> "{data?.name}"</strong>
            </p>
          </div>
        </NavLink>
      </div>
    </li>
  );
};

export default Notification;
