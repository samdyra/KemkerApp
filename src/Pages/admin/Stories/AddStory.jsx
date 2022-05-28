import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../../firebase/firebaseConfig";
import { toast } from "react-toastify";
import { collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const AddStory = () => {
  const [formData, setFormData] = useState({
    judul: "",
    nama: "",
    cerita: "",
  });
  const [user] = useAuthState(auth);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePublish = (e) => {
    const storyRef = collection(db, "story");
    addDoc(storyRef, {
      judul: formData.judul,
      nama: formData.nama,
      cerita: formData.cerita,
    })
      .then(() => {
        toast("story added successfully", { type: "success" });
      })
      .catch((err) => {
        toast("Error adding story", { type: "error" });
      });
  };

  return (
    <div className="border p-3 mt-3 bg-light" style={{ width: "300px" }}>
      {!user ? (
        <>
          <h2>
            <Link to="/login">Login to create article</Link>
          </h2>
        </>
      ) : (
        <div>
          <h2>Nama</h2>
          <div className="form-group">
            <label htmlFor="">Nama</label>
            <input type="text" name="nama" className="form-control" value={formData.nama} onChange={(e) => handleChange(e)} />
          </div>

          {/* description */}
          <label htmlFor="">Judul</label>
          <textarea name="judul" className="form-control" value={formData.judul} onChange={(e) => handleChange(e)} />

          <label htmlFor="">Cerita</label>
          <textarea name="cerita" className="form-control" value={formData.cerita} onChange={(e) => handleChange(e)} />

          <button className="form-control btn-primary mt-2" onClick={handlePublish}>
            Publish
          </button>
        </div>
      )}
    </div>
  );
};

export default AddStory;
