import React from "react";
import { useState, useEffect } from "react";
import { query, collection, onSnapshot, orderBy } from "firebase/firestore";
import { auth, db } from "../../../firebase/firebaseConfig";
import { Spinner } from "react-bootstrap";
import "./index.css";
import { useAuthState } from "react-firebase-hooks/auth";
import AddMessage from "./addMessage";
import DeleteMessage from "./DeleteMessage";

const Messages = () => {
  const [message, setMessage] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    const messageRef = collection(db, "message");
    const q = query(messageRef);
    onSnapshot(q, (snapshot) => {
      const message = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessage(message);
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
          {message.length === 0 ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            message.map(({ id, nama, message }) => (
              <div className="kameradContainer">
                <div key={id} className="kamerad-container-id">
                  <div className="kamerad-id">
                    <h4>{message}</h4>
                    <h6>{`by ${nama}`}</h6>
                    {user && <DeleteMessage id={id} />}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div>
          <AddMessage></AddMessage>
        </div>
      </div>
    </div>
  );
};

export default Messages;
