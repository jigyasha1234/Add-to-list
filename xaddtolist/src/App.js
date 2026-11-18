import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = item.trim();
    if (!value) return;
    setItems((prev) => [...prev, value]);
    setItem("");
  };

  const handleRemove = (index) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="page">
      <div className="card">
        <h1 className="title">Add Items to List</h1>

        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="item"
            className="input"
            placeholder="Type something and press Enter"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button type="submit" className="add-btn">
            Add
          </button>
        </form>

        {items.length === 0 ? (
          <p className="empty">No items yet. Add your first one!</p>
        ) : (
          <ul className="list">
            {items.map((text, index) => (
              <li key={index} className="list-item">
                <span>{text}</span>
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => handleRemove(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}