import React, { useState } from "react";
import axios from "axios";

const ManagementStaff = ({ managementStaff, setManagementStaff }) => {
  const [newStaff, setNewStaff] = useState({
    name: "",
    department: "",
    image: "",
  });
  const [editItem, setEditItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCreate = async () => {
    setIsLoading(true);
    try {
      const res = await axios.post(
        "https://bt-backend.onrender.com/managementStaff",
        newStaff
      );
      setManagementStaff([...managementStaff, { id: res.data.id, ...newStaff }]);
      alert("Management Staff added successfully!");
      setNewStaff({ name: "", department: "", image: "" });
    } catch (error) {
      alert("Error adding Management Staff. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setIsLoading(true);
    try {
      await axios.delete(`https://bt-backend.onrender.com/managementStaff/${id}`);
      setManagementStaff(managementStaff.filter((s) => s.id !== id));
      alert("Management Staff deleted successfully!");
    } catch (error) {
      alert("Error deleting Management Staff. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (item) => {
    setEditItem(item);
    setNewStaff(item);
  };

  const handleUpdate = async () => {
    setIsLoading(true);
    try {
      const res = await axios.put(
        `https://bt-backend.onrender.com/managementStaff/${editItem.id}`,
        newStaff
      );
      setManagementStaff(
        managementStaff.map((item) => (item.id === res.data.id ? res.data : item))
      );
      alert("Management Staff updated successfully!");
      setEditItem(null);
      setNewStaff({ name: "", department: "", image: "" });
    } catch (error) {
      alert("Error updating Management Staff. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="section">
      <h2>{editItem ? "Edit Management Staff" : "Add Management Staff"}</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Name"
          value={newStaff.name}
          onChange={(e) => setNewStaff({ ...newStaff, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Department"
          value={newStaff.department}
          onChange={(e) =>
            setNewStaff({ ...newStaff, department: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newStaff.image}
          onChange={(e) => setNewStaff({ ...newStaff, image: e.target.value })}
        />
        {editItem ? (
          <button className="button" onClick={handleUpdate} disabled={isLoading}>
            {isLoading ? "Processing..." : "Update Staff"}
          </button>
        ) : (
          <button className="button" onClick={handleCreate} disabled={isLoading}>
            {isLoading ? "Processing..." : "Add Staff"}
          </button>
        )}
      </div>
      <h2>Management Staff List</h2>
      <ul className="list">
        {managementStaff.map((s) => (
          <li className="list-item" key={s.id}>
            
            <img src={s.image} alt={s.name} style={{ width: 50, height: 50, borderRadius: '50%' }} />
            <span>
              {s.name} - {s.department}
            </span>
            <div>
              <button
                className="delete-button"
                onClick={() => handleDelete(s.id)}
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Delete"}
              </button>
              <button className="edit-button" onClick={() => handleEdit(s)}>
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManagementStaff;
