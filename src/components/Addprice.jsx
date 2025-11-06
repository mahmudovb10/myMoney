import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Addprice() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [url, setUrl] = useState("");
  const [price, setPrice] = useState("");

  const navigate = useNavigate();

  const handleAdd = (e) => {
    e.preventDefault();

    if (!title.trim() || !desc.trim() || !url.trim() || !price.trim()) {
      alert("Please Fill in All Fields !");
      return;
    }

    const newItem = { title, desc, url, price };

    const existingData = JSON.parse(localStorage.getItem("formData")) || [];

    const updatedData = [...existingData, newItem];

    localStorage.setItem("formData", JSON.stringify(updatedData));

    navigate("/");

    setTitle("");
    setDesc("");
    setUrl("");
    setPrice("");
  };

  return (
    <div>
      <h1 className="text-center mt-5 font-bold">Add Output</h1>

      <form className="form" onSubmit={handleAdd}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            placeholder="Title..."
            className="input input-primary"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label>Description</label>
          <input
            type="text"
            placeholder="Description..."
            className="input input-primary"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />

          <label>Photo URL</label>
          <input
            type="url"
            name="photoURL"
            id="photoURL"
            className="input input-primary"
            placeholder="Photo URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />

          <label>Price</label>
          <input
            type="number"
            placeholder="Price..."
            className="input input-primary"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <span className="usdIcon">$</span>

          <button className="btn btn-soft btn-primary" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default Addprice;
