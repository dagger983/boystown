import React, { useState } from "react";
import axios from "axios";

const MainEvent = ({ mainEvent, setMainEvent }) => {
  const [newEvent, setNewEvent] = useState({
    event_name: "",
    category: "",
    year: "",
    description: "",
    image_urls: Array(10).fill(""),
  });
  const [editItem, setEditItem] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    setLoading(true);
    const formattedData = {
      ...newEvent,
      img1: newEvent.image_urls[0],
      img2: newEvent.image_urls[1],
      img3: newEvent.image_urls[2],
      img4: newEvent.image_urls[3],
      img5: newEvent.image_urls[4],
      img6: newEvent.image_urls[5],
      img7: newEvent.image_urls[6],
      img8: newEvent.image_urls[7],
      img9: newEvent.image_urls[8],
      img10: newEvent.image_urls[9],
    };
    try {
      const res = await axios.post("https://bt-backend.onrender.com/mainEvent", formattedData);
      setMainEvent([...mainEvent, { id: res.data.id, ...formattedData }]);
      resetForm();
      alert("Event created successfully!");
    } catch (error) {
      console.error("Error creating event", error);
      alert("Failed to create event. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async () => {
    setLoading(true);
    const formattedData = {
      ...newEvent,
      img1: newEvent.image_urls[0],
      img2: newEvent.image_urls[1],
      img3: newEvent.image_urls[2],
      img4: newEvent.image_urls[3],
      img5: newEvent.image_urls[4],
      img6: newEvent.image_urls[5],
      img7: newEvent.image_urls[6],
      img8: newEvent.image_urls[7],
      img9: newEvent.image_urls[8],
      img10: newEvent.image_urls[9],
    };
    try {
      const res = await axios.put(`https://bt-backend.onrender.com/mainEvent/${editItem.id}`, formattedData);
      setMainEvent(mainEvent.map((event) => (event.id === res.data.id ? { ...res.data } : event)));
      resetForm();
      alert("Event updated successfully!");
    } catch (error) {
      console.error("Error updating event", error);
      alert("Failed to update event. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`https://bt-backend.onrender.com/mainEvent/${id}`);
      setMainEvent(mainEvent.filter((event) => event.id !== id));
      alert("Event deleted successfully!");
    } catch (error) {
      console.error("Error deleting event", error);
      alert("Failed to delete event. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setNewEvent({
      event_name: "",
      category: "",
      year: "",
      description: "",
      image_urls: Array(10).fill(""),
    });
    setEditItem(null);
  };

  return (
    <div className="section">
      <h2>{editItem ? "Edit Main Event" : "Add Main Event"}</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Event Name"
          value={newEvent.event_name}
          onChange={(e) => setNewEvent({ ...newEvent, event_name: e.target.value })}
        />
        <select
          value={newEvent.category}
          onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}
        >
          <option value="">Select Category</option>
          <option value="annual-day">Annual Day</option>
          <option value="antofesta">AntoFesta</option>
          <option value="sportsday">Sports Day</option>
        </select>
        <input
          type="text"
          placeholder="Year"
          value={newEvent.year}
          onChange={(e) => setNewEvent({ ...newEvent, year: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newEvent.description}
          onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
        />
        {newEvent.image_urls.map((url, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Image URL ${index + 1}`}
            value={url}
            onChange={(e) => {
              const updatedUrls = [...newEvent.image_urls];
              updatedUrls[index] = e.target.value;
              setNewEvent({ ...newEvent, image_urls: updatedUrls });
            }}
          />
        ))}
        <button className="button" onClick={editItem ? handleUpdate : handleCreate} disabled={loading}>
          {loading ? "Processing..." : editItem ? "Update Event" : "Add Event"}
        </button>
      </div>

      <h2>Main Event List</h2>
      <ul className="list">
        {mainEvent.map((event) => (
          <li className="list-item" key={event.id}>
            <span>
              {event.event_name} - {event.category}
            </span>
            <span>{event.description}</span>
            {Array.from({ length: 10 }, (_, index) => (
              <img
                key={index}
                src={event[`img${index + 1}`]}
                alt={`Image ${index + 1}`}
                style={{ width: "50px", height: "50px" }}
              />
            ))}
            <button className="delete-button" onClick={() => handleDelete(event.id)} disabled={loading}>
              {loading ? "Processing..." : "Delete"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainEvent;
