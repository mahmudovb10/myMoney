import { CiCirclePlus } from "react-icons/ci";
import { FaUserLarge } from "react-icons/fa6";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>My Money App</h2>
      <Link to={"/profile"}>
        <button className="profileIcon">
          <FaUserLarge size={45} />
        </button>
      </Link>
      <Link to={"/addprice"}>
        <button className="addPrice">
          <CiCirclePlus size={50} />
        </button>
      </Link>
    </div>
  );
}

export default Home;
