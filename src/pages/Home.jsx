import { CiCirclePlus } from "react-icons/ci";
import { FaUserLarge } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData")) || [];

    const finalData = Array.isArray(savedData) ? savedData : [savedData];

    setItems(finalData);
  }, []);
  const MoneyAppLogo = () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="10" y="30" width="80" height="60" rx="10" fill="#38A169" />
      <rect x="10" y="30" width="80" height="10" fill="#2F855A" />
      <circle cx="50" cy="30" r="20" fill="#F6E05E" />
      <text
        x="50%"
        y="35%"
        dominant-baseline="middle"
        text-anchor="middle"
        font-family="Arial, sans-serif"
        font-size="20"
        fill="#B7791F"
        font-weight="bold"
      >
        $
      </text>
      <path
        d="M10 90 L10 90 A10 10 0 0 0 20 100 L80 100 A10 10 0 0 0 90 90 L90 90 Z"
        fill="#276749"
        opacity="0.1"
      />
    </svg>
  );
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

      {items.length === 0 ? (
        <p>Hozircha hech narsa qo'shilmagan...</p>
      ) : (
        items.map((item, index) => (
          <div key={index}>
            <div className="card bg-base-100 image-full w-96 shadow-sm resCard">
              <figure>
                <img className="photo" src={item.url} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title cardTitle">{item.title}</h2>
                <p className="cardDesc">{item.desc}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-outline pricBtn">
                    {item.price} $
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
