import React, { useState } from "react";
import axios from "axios";

const MainEvent = ({ mainEvent, setMainEvent }) => {
  const [newEvent, setNewEvent] = useState({
    event_name: "",
    category: "",
    year: "",
    description: "",
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    img5: "",
    img6: "",
    img7: "",
    img8: "",
    img9: "",
    img10: "",
    img11: "",
    img12: "",
  });
  const [editItem, setEditItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [deletingId, setDeletingId] = useState(null); // Track specific event being deleted

  const validateForm = () => {
    if (!newEvent.event_name || !newEvent.category || !newEvent.year) {
      alert("Please fill in all required fields");
      return false;
    }
    return true;
  };

  const resetForm = () => {
    setNewEvent({
      event_name: "",
      category: "",
      year: "",
      description: "",
      img1: "",
      img2: "",
      img3: "",
      img4: "",
      img5: "",
      img6: "",
      img7: "",
      img8: "",
      img9: "",
      img10: "",
      img11: "",
      img12: "",
    });
    setEditItem(null);
  };

  const handleCreateOrUpdate = async () => {
    if (!validateForm()) return;

    setLoading(true);

    try {
      const res = editItem
        ? await axios.put(
            `https://bt-backend-1.onrender.com/mainEvent/${editItem.id}`,
            newEvent
          )
        : await axios.post(
            "https://bt-backend-1.onrender.com/mainEvent",
            newEvent,
            { timeout: 10000 } // Set a 10-second timeout
          );

      if (editItem) {
        setMainEvent(
          mainEvent.map((event) =>
            event.id === res.data.id ? { ...res.data } : event
          )
        );
        alert("Event updated successfully!");
      } else {
        setMainEvent([...mainEvent, { id: res.data.id, ...newEvent }]);
        alert("Event created successfully!");
      }

      resetForm();
    } catch (error) {
      console.error(`Error ${editItem ? "updating" : "creating"} event`, error);
      alert(`Failed to ${editItem ? "update" : "create"} event. Please try again.`);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setDeletingId(id);
    try {
      await axios.delete(`https://bt-backend-1.onrender.com/mainEvent/${id}`);
      setMainEvent(mainEvent.filter((event) => event.id !== id));
      alert("Event deleted successfully!");
    } catch (error) {
      console.error("Error deleting event", error);
      alert("Failed to delete event. Please try again.");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="section">
      <h2>{editItem ? "Edit Main Event" : "Add Main Event"}</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Event Name"
          value={newEvent.event_name}
          onChange={(e) => setNewEvent((prev) => ({ ...prev, event_name: e.target.value }))}
        />
        <select
          value={newEvent.category}
          onChange={(e) => setNewEvent((prev) => ({ ...prev, category: e.target.value }))}
        >
          <option value="">Select Category</option>
          <option value="annual-day">Annual Day</option>
          <option value="antofesta">AntoFesta</option>
          <option value="sportsday">Sports Day</option>
        </select>
        <input
          type="number"
          placeholder="Year"
          value={newEvent.year}
          onChange={(e) => setNewEvent((prev) => ({ ...prev, year: e.target.value }))}
        />
        <textarea
          placeholder="Description"
          value={newEvent.description}
          onChange={(e) => setNewEvent((prev) => ({ ...prev, description: e.target.value }))}
        />

        {/* Separate inputs for each image */}
        {[...Array(12)].map((_, i) => (
          <input
            key={i}
            type="text"
            placeholder={`Image URL ${i + 1}`}
            value={newEvent[`img${i + 1}`]}
            onChange={(e) =>
              setNewEvent((prev) => ({ ...prev, [`img${i + 1}`]: e.target.value }))
            }
          />
        ))}

        <button
          className="button"
          onClick={handleCreateOrUpdate}
          disabled={loading}
        >
          {loading ? "Processing..." : editItem ? "Update Event" : "Add Event"}
        </button>
      </div>

      <h2>Main Event List</h2>
      <ul className="list">
        {mainEvent.map((event) => (
          <li className="list-item" key={event.id}>
            <span>{event.event_name} - {event.category}</span>
            <span>{event.description}</span>

            {[
              event.img1,
              event.img2,
              event.img3,
              event.img4,
              event.img5,
              event.img6,
              event.img7,
              event.img8,
              event.img9,
              event.img10,
              event.img11,
              event.img12,
            ]
              .filter((img) => img)
              .map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Image ${index + 1}`}
                  style={{ width: "50px", height: "50px", margin: "5px" }}
                />
              ))}

            <button
              className="delete-button"
              onClick={() => handleDelete(event.id)}
              disabled={deletingId === event.id}
            >
              {deletingId === event.id ? "Processing..." : "Delete"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainEvent;
