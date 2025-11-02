function Addprice() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1 className="text-center mt-5 font-bold">Add Output</h1>

      <form action="" className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder="Title..."
            className="input input-primary"
            id="title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            placeholder="Description..."
            className="input input-primary"
            id="description"
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            placeholder="Price..."
            className="input input-primary"
            id="price"
          />
        </div>
        <button className="btn btn-soft btn-primary">Primary</button>
      </form>
    </div>
  );
}

export default Addprice;
