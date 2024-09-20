import React, { useState } from "react";
import axios from "axios";

const Hsc = ({ hsc, setHsc }) => {
  const [newHsc, setNewHsc] = useState({
    year: "",
    percentage: "",
    total_marks: "",
    topper: "",
  });
  const [editItem, setEditItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCreate = async () => {
    setIsLoading(true);
    try {
      const res = await axios.post("https://bt-backend.onrender.com/hsc", newHsc);
      setHsc([...hsc, { id: res.data.id, ...newHsc }]);
      alert("HSC added successfully!");
      setNewHsc({ year: "", percentage: "", total_marks: "", topper: "" });
    } catch (error) {
      alert("Error adding HSC. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setIsLoading(true);
    try {
      await axios.delete(`https://bt-backend.onrender.com/hsc/${id}`);
      setHsc(hsc.filter((item) => item.id !== id));
      alert("HSC deleted successfully!");
    } catch (error) {
      alert("Error deleting HSC. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (item) => {
    setEditItem(item);
    setNewHsc(item);
  };

  const handleUpdate = async () => {
    setIsLoading(true);
    try {
      const res = await axios.put(`https://bt-backend.onrender.com/hsc/${editItem.id}`, newHsc);
      setHsc(hsc.map((item) => (item.id === res.data.id ? res.data : item)));
      alert("HSC updated successfully!");
      setEditItem(null);
      setNewHsc({ year: "", percentage: "", total_marks: "", topper: "" });
    } catch (error) {
      alert("Error updating HSC. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="section">
      <h2>{editItem ? "Edit HSC" : "Add HSC"}</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Year"
          value={newHsc.year}
          onChange={(e) => setNewHsc({ ...newHsc, year: e.target.value })}
        />
        <input
          type="text"
          placeholder="Percentage"
          value={newHsc.percentage}
          onChange={(e) => setNewHsc({ ...newHsc, percentage: e.target.value })}
        />
        <input
          type="text"
          placeholder="Total Marks"
          value={newHsc.total_marks}
          onChange={(e) =>
            setNewHsc({ ...newHsc, total_marks: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Topper"
          value={newHsc.topper}
          onChange={(e) => setNewHsc({ ...newHsc, topper: e.target.value })}
        />
        {editItem ? (
          <button className="button" onClick={handleUpdate} disabled={isLoading}>
            {isLoading ? "Processing..." : "Update HSC"}
          </button>
        ) : (
          <button className="button" onClick={handleCreate} disabled={isLoading}>
            {isLoading ? "Processing..." : "Add HSC"}
          </button>
        )}
      </div>
      <h2>HSC List</h2>
      <ul className="list">
        {hsc.map((item) => (
          <li className="list-item" key={item.id}>
            <span>
              {item.year} - {item.percentage} - Total Marks: {item.total_marks} - Topper: {item.topper}
            </span>
            <div>
              <button
                className="delete-button"
                onClick={() => handleDelete(item.id)}
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Delete"}
              </button>
              <button
                className="edit-button"
                onClick={() => handleEdit(item)}
                disabled={isLoading}
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hsc;
