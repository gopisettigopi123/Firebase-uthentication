// src/components/AddData.js

import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function AddData() {
  const [data, setData] = useState("");

  const handleAddData = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "your-collection-name"), {
        dataField: data,
        timestamp: new Date(),
      });
      alert("Data added successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to add data: " + error.message);
    }
  };

  return (
    <form onSubmit={handleAddData}>
      <h2>Add Data</h2>
      <input
        type="text"
        placeholder="Enter some data"
        value={data}
        onChange={(e) => setData(e.target.value)}
      /><br></br>
      <button type="submit">Add Data</button>
    </form>
  );
}

export default AddData;
