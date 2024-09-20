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

  const handleCreate = async () => {
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
    const res = await axios.post(
      "https://bt-backend.onrender.com/mainEvent",
      formattedData
    );
    setMainEvent([...mainEvent, { id: res.data.id, ...formattedData }]);
    setNewEvent({
      event_name: "",
      category: "",
      year: "",
      description: "",
      image_urls: Array(10).fill(""),
    });
  };

  const handleDelete = async (id) => {
    await axios.delete(`https://bt-backend.onrender.com/mainEvent/${id}`);
    setMainEvent(mainEvent.filter((event) => event.id !== id));
  };

  const handleEdit = (item) => {
    setEditItem(item);
    setNewEvent(item);
  };

  const handleUpdate = async () => {
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
    const res = await axios.put(
      `https://bt-backend.onrender.com/mainEvent/${editItem.id}`,
      formattedData
    );
    setMainEvent(
      mainEvent.map((event) => (event.id === res.data.id ? res.data : event))
    );
    setEditItem(null);
    setNewEvent({
      event_name: "",
      category: "",
      year: "",
      description: "",
      image_urls: Array(10).fill(""),
    });
  };

  return (
    <div className="section">
      <h2>{editItem ? "Edit Main Event" : "Add Main Event"}</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Event Name"
          value={newEvent.event_name}
          onChange={(e) =>
            setNewEvent({ ...newEvent, event_name: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Category"
          value={newEvent.category}
          onChange={(e) =>
            setNewEvent({ ...newEvent, category: e.target.value })
          }
        />
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
          <button className="button" onClick={handleUpdate}>
            Update Event
          </button>
        ) : (
          <button className="button" onClick={handleCreate}>
            Add Event
          </button>
        )}
      </div>
      <h2>Main Event List</h2>
      <ul className="list">
        {mainEvent.map((event) => (
          <li className="list-item" key={event.id}>
            <span>
              {event.event_name} - {event.category}
            </span>
            <span>
              {event.description}
            </span>
            <img
              src={event.img1}
              alt="Main Event"
              style={{ width: "50px", height: "50px" }}
            />
            <img  src={event.img2}   style={{ width: "50px", height: "50px" }}  alt="" />
            <img  src={event.img3}   style={{ width: "50px", height: "50px" }} alt="" />
            <img  src={event.img4}   style={{ width: "50px", height: "50px" }} alt="" />
            <img  src={event.img5}   style={{ width: "50px", height: "50px" }} alt="" />
            <img  src={event.img6}   style={{ width: "50px", height: "50px" }} alt="" />
            <img  src={event.img7}   style={{ width: "50px", height: "50px" }} alt="" />
            <img  src={event.img8}   style={{ width: "50px", height: "50px" }} alt="" />
            <img  src={event.img9}   style={{ width: "50px", height: "50px" }} alt="" />
            <img  src={event.img10}  style={{ width: "50px", height: "50px" }}  alt="" />
            <button
              className="delete-button"
              onClick={() => handleDelete(event.id)}
            >
              Delete
            </button>
           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainEvent;
