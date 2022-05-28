import React, { useState } from "react";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db, auth } from "../../../firebase/firebaseConfig";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";

export default function AddKamerad() {
  const [user] = useAuthState(auth);
  const [formData, setFormData] = useState({
    NIM: "",
    Nama: "",
    image: "",
    kelompok: "",
  });

  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handlePublish = () => {
    if (!formData.NIM || !formData.Nama || !formData.image || !formData.kelompok) {
      toast("Please fill all the fields");
      return;
    }

    const storageRef = ref(storage, `/image/${formData.image.name}`);

    const uploadImage = uploadBytesResumable(storageRef, formData.image);

    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgress(progressPercent);
      },
      (err) => {
        console.log(err);
      },
      () => {
        setFormData({
          NIM: "",
          Nama: "",
          image: "",
          kelompok: "",
        });

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const kameradRef = collection(db, "kamerad");
          addDoc(kameradRef, {
            NIM: formData.NIM,
            Nama: formData.Nama,
            image: url,
            kelompok: formData.kelompok,
          })
            .then(() => {
              toast("kamerad pun lahir", { type: "success" });
              setProgress(0);
            })
            .catch((err) => {
              toast("Error adding kamerad", { type: "error" });
            });
        });
      }
    );
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
          <h2>Create kamerad</h2>
          <div className="form-group">
            <label htmlFor="">NIM</label>
            <input type="text" name="NIM" className="form-control" value={formData.NIM} onChange={(e) => handleChange(e)} />
          </div>

          {/* description */}
          <label htmlFor="">Nama</label>
          <textarea name="Nama" className="form-control" value={formData.Nama} onChange={(e) => handleChange(e)} />

          {/* description */}
          <label htmlFor="">kelompok</label>
          <textarea name="kelompok" className="form-control" value={formData.kelompok} onChange={(e) => handleChange(e)} />

          {/* image */}
          <label htmlFor="">Image</label>
          <input type="file" name="image" accept="image/*" className="form-control" onChange={(e) => handleImageChange(e)} />

          {progress === 0 ? null : (
            <div className="progress">
              <div className="progress-bar progress-bar-striped mt-2" style={{ width: `${progress}%` }}>
                {`uploading image ${progress}%`}
              </div>
            </div>
          )}
          <button className="form-control btn-primary mt-2" onClick={handlePublish}>
            Publish
          </button>
        </div>
      )}
    </div>
  );
}
