import React, { useState } from "react";
import axios from "axios";

const OfficeStaff = ({ officeStaff, setOfficeStaff }) => {
  const [newStaff, setNewStaff] = useState({ name: "", image: "" });
  const [editItem, setEditItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCreate = async () => {
    setIsLoading(true);
    try {
      const res = await axios.post("https://bt-backend.onrender.com/officeStaff", newStaff);
      setOfficeStaff([...officeStaff, { id: res.data.id, ...newStaff }]);
      alert("Office Staff added successfully!");
      setNewStaff({ name: "", image: "" });
    } catch (error) {
      alert("Error adding Office Staff. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setIsLoading(true);
    try {
      await axios.delete(`https://bt-backend.onrender.com/officeStaff/${id}`);
      setOfficeStaff(officeStaff.filter((s) => s.id !== id));
      alert("Office Staff deleted successfully!");
    } catch (error) {
      alert("Error deleting Office Staff. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (item) => {
    setEditItem(item);
    setNewStaff(item);
    setIsModalOpen(true);
  };

  const handleUpdate = async () => {
    setIsLoading(true);
    try {
      const res = await axios.put(`https://bt-backend.onrender.com/officeStaff/${editItem.id}`, newStaff);
      setOfficeStaff(officeStaff.map((item) => (item.id === res.data.id ? res.data : item)));
      alert("Office Staff updated successfully!");
      closeModal();
    } catch (error) {
      alert("Error updating Office Staff. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditItem(null);
    setNewStaff({ name: "", image: "" });
  };

  return (
    <div className="section">
      <h2>Add Office Staff</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Name"
          value={newStaff.name}
          onChange={(e) => setNewStaff({ ...newStaff, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newStaff.image}
          onChange={(e) => setNewStaff({ ...newStaff, image: e.target.value })}
        />
        <button className="button" onClick={handleCreate} disabled={isLoading}>
          {isLoading ? "Processing..." : "Add Staff"}
        </button>
      </div>

      <h2>Office Staff List</h2>
      <ul className="list">
        {officeStaff.map((s) => (
          <li className="list-item" key={s.id}>
            
            <img src={s.image} alt={s.name} style={{ width: 50, height: 50, borderRadius: '50%' }} />
            <span>{s.name}</span>
            <div>
              <button className="delete-button" onClick={() => handleDelete(s.id)} disabled={isLoading}>
                {isLoading ? "Processing..." : "Delete"}
              </button>
              <button className="edit-button" onClick={() => handleEdit(s)}>
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit Office Staff</h2>
            <input
              type="text"
              placeholder="Name"
              value={newStaff.name}
              onChange={(e) => setNewStaff({ ...newStaff, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Image URL"
              value={newStaff.image}
              onChange={(e) => setNewStaff({ ...newStaff, image: e.target.value })}
            />
            <button className="button" onClick={handleUpdate} disabled={isLoading}>
              {isLoading ? "Processing..." : "Update Staff"}
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

export default OfficeStaff;
