import React, { useState } from "react";

const SubEvent = ({ subEvent, setSubEvent }) => {
  const [newEvent, setNewEvent] = useState({
    event_name: "",
    category: "",
    year: "",
    month: "",
    description: "",
    image_urls: Array(12).fill(""), // Updated array length to 12
  });
  const [editItem, setEditItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const apiUrl = "https://bt-backend.onrender.com/subEvent";

  const handleCreate = async () => {
    setIsLoading(true);
    setError("");

    const formattedData = {
      event_name: newEvent.event_name,
      category: newEvent.category,
      year: newEvent.year,
      month: newEvent.month,
      description: newEvent.description,
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
      img11: newEvent.image_urls[10],
      img12: newEvent.image_urls[11],
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const resData = await response.json();
      setSubEvent([...subEvent, { id: resData.id, ...formattedData }]);
      alert("Sub Event added successfully!");
      resetForm();
    } catch (error) {
      setError("Error adding Sub Event. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(`${apiUrl}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setSubEvent(subEvent.filter((event) => event.id !== id));
      alert("Sub Event deleted successfully!");
    } catch (error) {
      setError("Error deleting Sub Event. Please try again.");
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
    setError("");

    const formattedData = {
      event_name: newEvent.event_name,
      category: newEvent.category,
      year: newEvent.year,
      month: newEvent.month,
      description: newEvent.description,
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
      img11: newEvent.image_urls[10],
      img12: newEvent.image_urls[11],
    };

    try {
      const response = await fetch(`${apiUrl}/${editItem.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setSubEvent(
        subEvent.map((event) =>
          event.id === editItem.id ? { id: editItem.id, ...formattedData } : event
        )
      );
      alert("Sub Event updated successfully!");
      resetForm();
    } catch (error) {
      setError("Error updating Sub Event. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setNewEvent({
      event_name: "",
      category: "",
      year: "",
      month: "",
      description: "",
      image_urls: Array(12).fill(""),
    });
    setEditItem(null);
  };

  return (
    <div className="section">
      <h2>{editItem ? "Edit Sub Event" : "Add Sub Event"}</h2>
      {error && <p className="error">{error}</p>}
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
        <button className="button" onClick={editItem ? handleUpdate : handleCreate} disabled={isLoading}>
          {isLoading ? "Processing..." : editItem ? "Update Event" : "Add Event"}
        </button>
      </div>
      <h2>Sub Event List</h2>
      <ul className="list">
        {subEvent.map((event) => (
          <li className="list-item" key={event.id}>
            <span>
              {event.event_name} - {event.category} - {event.month} {event.year}
            </span>
            <div className="image-gallery">
              {/* Only display images that exist */}
              {Object.keys(event)
                .filter((key) => key.startsWith("img") && event[key])
                .map((key, index) => (
                  <img
                    key={index}
                    src={event[key]}
                    alt={`Sub Event ${index + 1}`}
                    style={{ width: "50px", height: "50px", margin: "0 5px" }}
                  />
                ))}
            </div>
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
