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

  return (
    <div>
      <h2 className="mainTitle">My Money App</h2>

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
