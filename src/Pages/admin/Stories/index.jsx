import React from "react";
import { useState, useEffect } from "react";
import { query, collection, onSnapshot } from "firebase/firestore";
import { auth, db } from "../../../firebase/firebaseConfig";
import { Spinner } from "react-bootstrap";
import "./index.css";
import { useAuthState } from "react-firebase-hooks/auth";
import DeleteStory from "./DeleteStory";
import AddStory from "./AddStory";

const Stories = () => {
  const [story, setStory] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    const storyRef = collection(db, "story");
    const q = query(storyRef);
    onSnapshot(q, (snapshot) => {
      const story = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setStory(story);
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
      <div className="testContainer">
        <div className="adminContainer">
          {story.length === 0 ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            story.map(({ id, nama, judul, cerita }) => (
              <div className="kameradContainer">
                <div key={id} className="kamerad-container-id">
                  <div className="kamerad-id">
                    <h4>{`Judul: ${judul}`}</h4>
                    <h6>{`By: ${nama}`}</h6>
                    <p>{`${cerita}`}</p>
                    {user && <DeleteStory id={id} />}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div>
          <AddStory></AddStory>
        </div>
      </div>
    </div>
  );
};

export default Stories;
