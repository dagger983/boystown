import React, { useState } from "react";
import axios from "axios";

const SubEvent = ({ subEvent, setSubEvent }) => {
  const [newEvent, setNewEvent] = useState({
    event_name: "",
    category: "",
    year: "",
    month: "",
    description: "",
    image_urls: Array(10).fill(""),
  });
  const [editItem, setEditItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCreate = async () => {
    setIsLoading(true);
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
      const res = await axios.post(
        "https://bt-backend.onrender.com/subEvent",
        formattedData
      );
      setSubEvent([...subEvent, { id: res.data.id, ...formattedData }]);
      alert("Sub Event added successfully!");
      setNewEvent({
        event_name: "",
        category: "",
        year: "",
        month: "",
        description: "",
        image_urls: Array(10).fill(""),
      });
    } catch (error) {
      alert("Error adding Sub Event. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setIsLoading(true);
    try {
      await axios.delete(`https://bt-backend.onrender.com/subEvent/${id}`);
      setSubEvent(subEvent.filter((event) => event.id !== id));
      alert("Sub Event deleted successfully!");
    } catch (error) {
      alert("Error deleting Sub Event. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (item) => {
    setEditItem(item);
    setNewEvent(item);
  };

  const handleUpdate = async () => {
    setIsLoading(true);
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
      const res = await axios.put(
        `https://bt-backend.onrender.com/subEvent/${editItem.id}`,
        formattedData
      );
      setSubEvent(
        subEvent.map((event) => (event.id === res.data.id ? res.data : event))
      );
      alert("Sub Event updated successfully!");
      setEditItem(null);
      setNewEvent({
        event_name: "",
        category: "",
        year: "",
        month: "",
        description: "",
        image_urls: Array(10).fill(""),
      });
    } catch (error) {
      alert("Error updating Sub Event. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="section">
      <h2>{editItem ? "Edit Sub Event" : "Add Sub Event"}</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Event Name"
          value={newEvent.event_name}
          onChange={(e) =>
            setNewEvent({ ...newEvent, event_name: e.target.value })
          }
        />
        <select
          value={newEvent.category}
          onChange={(e) =>
            setNewEvent({ ...newEvent, category: e.target.value })
          }
        >
          <option value="">Select Category</option>
          <option value="academic-activities">Academic Activities</option>
          <option value="extra-curricular">Extra-Curricular</option>
          <option value="club-activities">Club Activities</option>
        </select>
        <input
          type="text"
          placeholder="Year"
          value={newEvent.year}
          onChange={(e) => setNewEvent({ ...newEvent, year: e.target.value })}
        />
        <input
          type="text"
          placeholder="Month"
          value={newEvent.month}
          onChange={(e) => setNewEvent({ ...newEvent, month: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newEvent.description}
          onChange={(e) =>
            setNewEvent({ ...newEvent, description: e.target.value })
          }
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
        {editItem ? (
          <button className="button" onClick={handleUpdate} disabled={isLoading}>
            {isLoading ? "Processing..." : "Update Event"}
          </button>
        ) : (
          <button className="button" onClick={handleCreate} disabled={isLoading}>
            {isLoading ? "Processing..." : "Add Event"}
          </button>
        )}
      </div>
      <h2>Sub Event List</h2>
      <ul className="list">
        {subEvent.map((event) => (
          <li className="list-item" key={event.id}>
            <span>
              {event.event_name} - {event.category} - {event.month} {event.year}
            </span>
            {Array.from({ length: 10 }, (_, index) => (
              <img
                key={index}
                src={event[`img${index + 1}`]}
                alt="Sub Event"
                style={{ width: "50px", height: "50px" }}
              />
            ))}
            <div>
              <button
                className="delete-button"
                onClick={() => handleDelete(event.id)}
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Delete"}
              </button>
            
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubEvent;
