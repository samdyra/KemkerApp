import React from "react";
import { useState, useEffect } from "react";
import { query, collection, onSnapshot } from "firebase/firestore";
import { auth, db } from "../../../firebase/firebaseConfig";
import "./index.css";
import { useAuthState } from "react-firebase-hooks/auth";
import DeleteStory from "./DeleteStory";
import AddStory from "./AddStory";
import NavBarDefault from "../../../ComponentsV2/NavbarDefault";

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
      <NavBarDefault></NavBarDefault>
      <div className="admin-navbar">
        <a href="/admin/kelompok">Kamerad</a>
        <a href="/admin/Gallery">Gallery</a>
        <a href="/admin/kesanpesan">Kesan Pesan</a>
        <a href="/admin/story">Cerita</a>
      </div>
      <div className="testContainer">
        <div className="adminContainer">
          {story.length === 0 ? (
            <span className="visually-hidden">Loading...</span>
          ) : (
            story.map(({ id, nama, judul, cerita }) => (
              <div className="kameradContainer">
                <div key={id} className="kamerad-container-id">
                  <div className="kamerad-idx">
                    <div className="kmrdjdl">{`Judul: ${judul}`}</div>
                    <div className="kmrdnm">{`By: ${nama}`}</div>
                    <div className="kmrdcrt">{`${cerita}`}</div>
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
