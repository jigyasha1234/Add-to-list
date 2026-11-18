import React, { useState } from "react";
import "./App.css";
const emptyForm = { place: "", name: "", age: "" };

export default function App() {
  // const [item, setItem] = useState("");
  // const [items, setItems] = useState([]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const value = item.trim();
  //   if (!value) return;
  //   setItems((prev) => [...prev, value]);
  //   setItem("");
  // };

  // const handleRemove = (index) => {
  //   setItems((prev) => prev.filter((_, i) => i !== index));
  // };

  // return (
    // <div className="page">
    //   <div className="card">
    //     <h1 className="title">Add Items to List</h1>

    //     <form className="form" onSubmit={handleSubmit}>
    //       <input
    //         type="text"
    //         name="item"
    //         className="input"
    //         placeholder="Type something and press Enter"
    //         value={item}
    //         onChange={(e) => setItem(e.target.value)}
    //       />
    //       <button type="submit" className="add-btn">
    //         Add
    //       </button>
    //     </form>

    //     {items.length === 0 ? (
    //       <p className="empty">No items yet. Add your first one!</p>
    //     ) : (
    //       <ul className="list">
    //         {items.map((text, index) => (
    //           <li key={index} className="list-item">
    //             <span>{text}</span>
    //             <button
    //               type="button"
    //               className="remove-btn"
    //               onClick={() => handleRemove(index)}
    //             >
    //               Remove
    //             </button>
    //           </li>
    //         ))}
    //       </ul>
    //     )}
    //   </div>
    // </div>
    //square and circle project
    // <div className="page">
    //   <h1 className="title">Square & Circle</h1>
    //   <div className="square">
    //     <div className="circle"></div>
    //   </div>
    // </div>
  // );
  const [form, setForm] = useState(emptyForm);
  const [rows, setRows] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const place = form.place.trim();
    const name = form.name.trim();
    const age = form.age.trim();
    if (!place || !name || !age) return;
    setRows((prev) => [...prev, { id: Date.now() + Math.random(), place, name, age }]);
    setForm(emptyForm);
  };

  const handleClear = () => {
    setForm(emptyForm);
    setRows([]);
  };

  const handleRemove = (id) => {
    setRows((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <div className="page">
      <div className="card">
        <h1 className="title">Add People to Table</h1>
        <p className="subtitle">Enter Place, Name, and Age, then click Add.</p>

        <form onSubmit={handleSubmit}>
          <div className="fields">
            <label className="field">
              <span>Place</span>
              <input
                type="text"
                name="place"
                placeholder="e.g. Mumbai"
                value={form.place}
                onChange={handleChange}
              />
            </label>
            <label className="field">
              <span>Name</span>
              <input
                type="text"
                name="name"
                placeholder="e.g. Akash"
                value={form.name}
                onChange={handleChange}
              />
            </label>
            <label className="field">
              <span>Age</span>
              <input
                type="number"
                name="age"
                min="0"
                placeholder="e.g. 24"
                value={form.age}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="actions">
            <button type="submit" className="add-btn">Add</button>
            <button type="button" className="clear-btn" onClick={handleClear}>
              Clear
            </button>
          </div>
        </form>

        {rows.length === 0 ? (
          <div className="empty">No entries yet. Add your first now!</div>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Place</th>
                <th>Name</th>
                <th>Age</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id}>
                  <td>{row.place}</td>
                  <td>{row.name}</td>
                  <td>{row.age}</td>
                  <td>
                    <button
                      type="button"
                      className="remove-btn"
                      onClick={() => handleRemove(row.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}