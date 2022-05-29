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
    if (!formData.judul || !formData.nama || !formData.cerita) {
      toast("Please fill all the fields");
      return;
    }

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
        <div className="formadmincontainer">
          <div className="formtitle">Form Cerita</div>
          <div className="formadmin">
            <label htmlFor="">Nama</label>
            <input type="text" name="nama" className="formik" value={formData.nama} onChange={(e) => handleChange(e)} />
          </div>

          <div className="formadmin">
            <label htmlFor="">Judul</label>
            <input name="judul" className="formik" value={formData.judul} onChange={(e) => handleChange(e)} />
          </div>

          <div className="formadmin">
            <label htmlFor="">Cerita</label>
            <textarea name="cerita" className="formik" value={formData.cerita} onChange={(e) => handleChange(e)} rows="7" />
          </div>
          <button className="formbutton" onClick={handlePublish}>
            Publish
          </button>
        </div>
      )}
    </div>
  );
};

export default AddStory;
