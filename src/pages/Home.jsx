import { useLocation } from "react-router-dom";

import { CiCirclePlus } from "react-icons/ci";
import { FaUserLarge } from "react-icons/fa6";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
  const location = useLocation();
  const newItem = location.state;
  const [item, setItem] = useState([]);

  useEffect(() => {
    if (newItem) {
      setItem((prev) => [...prev, newItem]);
    }
  }, [newItem]);

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
      {item.length === 0 ? (
        <p>Hozircha hech narsa qo'shilmagan...</p>
      ) : (
        item.map((item, index) => (
          <div key={index}>
            <h1>{item.title}</h1>
            <h1>{item.desc}</h1>
            <h1>{item.price}</h1>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
