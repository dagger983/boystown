import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RegularStaff = ({ regularStaff, setRegularStaff }) => {
  const [newStaff, setNewStaff] = useState({ name: '', department: '', image: '' });
  const [editItem, setEditItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchRegularStaff = async () => {
      const res = await axios.get('https://appsail-50022339494.development.catalystappsail.in/regularStaff');
      setRegularStaff(res.data);
    };
    
    fetchRegularStaff();
  }, [setRegularStaff]);

  const handleCreate = async () => {
    setIsLoading(true);
    try {
      const res = await axios.post('https://bt-backend.onrender.com/regularStaff', newStaff);
      setRegularStaff([...regularStaff, { id: res.data.id, ...newStaff }]);
      alert("Regular Staff added successfully!");
      setNewStaff({ name: '', department: '', image: '' });
    } catch (error) {
      alert("Error adding Regular Staff. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setIsLoading(true);
    try {
      await axios.delete(`https://bt-backend.onrender.com/regularStaff/${id}`);
      setRegularStaff(regularStaff.filter(s => s.id !== id));
      alert("Regular Staff deleted successfully!");
    } catch (error) {
      alert("Error deleting Regular Staff. Please try again.");
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
      const res = await axios.put(`https://bt-backend.onrender.com/regularStaff/${editItem.id}`, newStaff);
      setRegularStaff(regularStaff.map(item => (item.id === res.data.id ? res.data : item)));
      alert("Regular Staff updated successfully!");
      setEditItem(null);
      setNewStaff({ name: '', department: '', image: '' });
    } catch (error) {
      alert("Error updating Regular Staff. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="section">
      <h2>{editItem ? 'Edit Regular Staff' : 'Add Regular Staff'}</h2>
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
          onChange={(e) => setNewStaff({ ...newStaff, department: e.target.value })}
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
      <h2>Regular Staff List</h2>
      <ul className="list">
        {regularStaff.map(s => (
          <li className="list-item" key={s.id}>
            <span>{s.name} - {s.department}</span>
            <div>
              <button className="delete-button" onClick={() => handleDelete(s.id)} disabled={isLoading}>
                {isLoading ? "Processing..." : "Delete"}
              </button>
              <button className="edit-button" onClick={() => handleEdit(s)} disabled={isLoading}>
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RegularStaff;
