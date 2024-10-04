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
        setMainEvent(mainEvent.map((event) =>
          event.id === res.data.id ? { ...res.data } : event
        ));
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
        <input
          type="text"
          placeholder="Image URL 1"
          value={newEvent.img1}
          onChange={(e) => setNewEvent((prev) => ({ ...prev, img1: e.target.value }))}
        />
        <input
          type="text"
          placeholder="Image URL 2"
          value={newEvent.img2}
          onChange={(e) => setNewEvent((prev) => ({ ...prev, img2: e.target.value }))}
        />
        <input
          type="text"
          placeholder="Image URL 3"
          value={newEvent.img3}
          onChange={(e) => setNewEvent((prev) => ({ ...prev, img3: e.target.value }))}
        />
        <input
          type="text"
          placeholder="Image URL 4"
          value={newEvent.img4}
          onChange={(e) => setNewEvent((prev) => ({ ...prev, img4: e.target.value }))}
        />
        <input
          type="text"
          placeholder="Image URL 5"
          value={newEvent.img5}
          onChange={(e) => setNewEvent((prev) => ({ ...prev, img5: e.target.value }))}
        />
        <input
          type="text"
          placeholder="Image URL 6"
          value={newEvent.img6}
          onChange={(e) => setNewEvent((prev) => ({ ...prev, img6: e.target.value }))}
        />
        <input
          type="text"
          placeholder="Image URL 7"
          value={newEvent.img7}
          onChange={(e) => setNewEvent((prev) => ({ ...prev, img7: e.target.value }))}
        />
        <input
          type="text"
          placeholder="Image URL 8"
          value={newEvent.img8}
          onChange={(e) => setNewEvent((prev) => ({ ...prev, img8: e.target.value }))}
        />
        <input
          type="text"
          placeholder="Image URL 9"
          value={newEvent.img9}
          onChange={(e) => setNewEvent((prev) => ({ ...prev, img9: e.target.value }))}
        />

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
            {/* Display each image if available */}
            {event.img1 && <img src={event.img1} alt="Image 1" style={{ width: "50px", height: "50px" }} />}
            {event.img2 && <img src={event.img2} alt="Image 2" style={{ width: "50px", height: "50px" }} />}
            {event.img3 && <img src={event.img3} alt="Image 3" style={{ width: "50px", height: "50px" }} />}
            {event.img4 && <img src={event.img4} alt="Image 4" style={{ width: "50px", height: "50px" }} />}
            {event.img5 && <img src={event.img5} alt="Image 5" style={{ width: "50px", height: "50px" }} />}
            {event.img6 && <img src={event.img6} alt="Image 6" style={{ width: "50px", height: "50px" }} />}
            {event.img7 && <img src={event.img7} alt="Image 7" style={{ width: "50px", height: "50px" }} />}
            {event.img8 && <img src={event.img8} alt="Image 8" style={{ width: "50px", height: "50px" }} />}
            {event.img9 && <img src={event.img9} alt="Image 9" style={{ width: "50px", height: "50px" }} />}
            
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
