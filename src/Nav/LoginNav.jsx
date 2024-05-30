import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider";
import { IoIosNotifications } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Notification from "./Notification";

const LoginNav = () => {
  const { user, logOut } = useContext(AuthContext);
  const email = user?.email;
  const [notification, setNotification] = useState([]);

  useEffect(() => {
    if (email) {
      fetch(`https://bikolpo.vercel.app/noRecomendation?email=${email}`)
        .then((res) => res.json())
        .then((data) => setNotification(data));
    }
  }, [email]);

  return (
    <div className={user ? "flex items-center gap-2" : "hidden"}>
      <details className="dropdown outline-none dropdown-end">
        <summary className="m-1 btn bg-transparent hover:bg-transparent">
          <span className="text-4xl relative pr-4 py-2 cursor-pointer">
            <span className="text-xl absolute top-0 right-1 text-red-400 text-rigth">
              {notification.length}
            </span>
            <IoIosNotifications />
          </span>
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[50] flex-row bg-base-100 rounded-box w-80 max-h-[500px] flex-wrap overflow-y-auto">
          {notification.map((notification, index) => (
            <Notification data={notification} key={index}></Notification>
          ))}
        </ul>
      </details>

      <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
        <div tabIndex={0} role="button">
          <div className="avatar">
            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src={
                  user?.photoURL
                    ? user.photoURL
                    : "https://millatsakib.github.io/Project-Resource/%E2%80%94Pngtree%E2%80%94cartoon%20color%20simple%20male%20avatar_5230557.png"
                }
              />
            </div>
          </div>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[99] menu p-2 shadow bg-base-100 rounded-box w-max"
        >
          <li className="px-4 py-2 text-base-content">
            {user?.displayName ? user.displayName : "No data found."}
          </li>
        </ul>
      </div>

      <button className="btn btn-error text-white" onClick={logOut}>
        Logout
      </button>
    </div>
  );
};

export default LoginNav;
