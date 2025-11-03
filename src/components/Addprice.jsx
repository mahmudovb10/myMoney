import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Addprice() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");

  const navigate = useNavigate();
  const handleAdd = (e) => {
    e.preventDefault();

    if (!title.trim() || !desc.trim() || !price.trim()) {
      alert("Please Fill in All Fields !");
      return;
    }
    navigate("/", { state: { title, desc, price } });
    setTitle("");
    setDesc("");
    setPrice("");
  };

  return (
    <div>
      <h1 className="text-center mt-5 font-bold">Add Output</h1>

      <form action="" className="form" onSubmit={handleAdd}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder="Title..."
            className="input input-primary"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            placeholder="Description..."
            className="input input-primary"
            id="description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            placeholder="Price..."
            className="input input-primary"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <span className="usdIcon">$</span>
        </div>
        <button className="btn btn-soft btn-primary" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default Addprice;
