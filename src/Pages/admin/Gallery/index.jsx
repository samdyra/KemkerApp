import React from "react";
import { useState, useEffect } from "react";
import { query, collection, onSnapshot, orderBy } from "firebase/firestore";
import { auth, db } from "../../../firebase/firebaseConfig";
import { Spinner } from "react-bootstrap";
import "./index.css";
import { useAuthState } from "react-firebase-hooks/auth";
import AddImage from "./AddImage";
import DeleteImage from "./DeleteImage";

const Gallery = () => {
  const [image, setImage] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    const imageRef = collection(db, "gallery");
    const q = query(imageRef);
    onSnapshot(q, (snapshot) => {
      const images = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setImage(images);
    });
  }, []);

  return (
    <div>
      <div className="admin-navbar">
        <a href="/admin/kelompok">Kamerad</a>
        <a href="/admin/Gallery">Gallery</a>
        <a href="/admin/kesanpesan">Kesan Pesan</a>
        <a href="/admin/story">Cerita</a>
      </div>
      <div className="testContainerIMG">
        <div className="adminContainerIMG">
          {image.length === 0 ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            image.map(({ id, image, name }) => (
              <div className="kameradContainerIMG">
                <div key={id} className="kamerad-container-idIMG">
                  <img src={image} style={{ width: 200, height: 200 }}></img>
                  <div className="kamerad-idIMG">
                    <h6>{name}</h6>
                    {user && <DeleteImage id={id} image={image} />}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div>
          <AddImage></AddImage>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
