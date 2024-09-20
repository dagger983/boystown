import React, { useState } from "react";
import axios from "axios";

const Sslc = ({ sslc, setSslc }) => {
  const [newSslc, setNewSslc] = useState({
    year: "",
    percentage: "",
    total_marks: "",
    topper: "",
  });
  const [editItem, setEditItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCreate = async () => {
    setIsLoading(true);
    try {
      const res = await axios.post("https://bt-backend.onrender.com/sslc", newSslc);
      setSslc([...sslc, { id: res.data.id, ...newSslc }]);
      alert("SSLC added successfully!");
      setNewSslc({ year: "", percentage: "", total_marks: "", topper: "" });
    } catch (error) {
      alert("Error adding SSLC. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setIsLoading(true);
    try {
      await axios.delete(`https://bt-backend.onrender.com/sslc/${id}`);
      setSslc(sslc.filter((item) => item.id !== id));
      alert("SSLC deleted successfully!");
    } catch (error) {
      alert("Error deleting SSLC. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (item) => {
    setEditItem(item);
    setNewSslc(item);
    setIsModalOpen(true);
  };

  const handleUpdate = async () => {
    setIsLoading(true);
    try {
      const res = await axios.put(`https://bt-backend.onrender.com/sslc/${editItem.id}`, newSslc);
      setSslc(sslc.map((item) => (item.id === res.data.id ? res.data : item)));
      alert("SSLC updated successfully!");
      closeModal();
    } catch (error) {
      alert("Error updating SSLC. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditItem(null);
    setNewSslc({ year: "", percentage: "", total_marks: "", topper: "" });
  };

  return (
    <div className="section">
      <h2>Add SSLC</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Year"
          value={newSslc.year}
          onChange={(e) => setNewSslc({ ...newSslc, year: e.target.value })}
        />
        <input
          type="text"
          placeholder="Percentage"
          value={newSslc.percentage}
          onChange={(e) => setNewSslc({ ...newSslc, percentage: e.target.value })}
        />
        <input
          type="text"
          placeholder="Total Marks"
          value={newSslc.total_marks}
          onChange={(e) => setNewSslc({ ...newSslc, total_marks: e.target.value })}
        />
        <input
          type="text"
          placeholder="Topper"
          value={newSslc.topper}
          onChange={(e) => setNewSslc({ ...newSslc, topper: e.target.value })}
        />
        <button className="button" onClick={handleCreate} disabled={isLoading}>
          {isLoading ? "Processing..." : "Add SSLC"}
        </button>
      </div>

      <h2>SSLC List</h2>
      <ul className="list">
        {sslc.map((item) => (
          <li className="list-item" key={item.id}>
            <span>
              {item.year} - {item.percentage} - Total Marks: {item.total_marks} - Topper: {item.topper}
            </span>
            <div>
              <button className="delete-button" onClick={() => handleDelete(item.id)} disabled={isLoading}>
                {isLoading ? "Processing..." : "Delete"}
              </button>
              <button className="edit-button" onClick={() => handleEdit(item)} disabled={isLoading}>
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit SSLC</h2>
            <input
              type="text"
              placeholder="Year"
              value={newSslc.year}
              onChange={(e) => setNewSslc({ ...newSslc, year: e.target.value })}
            />
            <input
              type="text"
              placeholder="Percentage"
              value={newSslc.percentage}
              onChange={(e) => setNewSslc({ ...newSslc, percentage: e.target.value })}
            />
            <input
              type="text"
              placeholder="Total Marks"
              value={newSslc.total_marks}
              onChange={(e) => setNewSslc({ ...newSslc, total_marks: e.target.value })}
            />
            <input
              type="text"
              placeholder="Topper"
              value={newSslc.topper}
              onChange={(e) => setNewSslc({ ...newSslc, topper: e.target.value })}
            />
            <button className="button" onClick={handleUpdate} disabled={isLoading}>
              {isLoading ? "Processing..." : "Update SSLC"}
            </button>
            <button className="button" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sslc;
