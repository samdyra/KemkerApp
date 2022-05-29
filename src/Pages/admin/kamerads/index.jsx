import React from "react";
import { useState, useEffect } from "react";
import { query, collection, onSnapshot, orderBy } from "firebase/firestore";
import { auth, db } from "../../../firebase/firebaseConfig";
import AddKamerad from "./AddKamerad";
import "./index.css";
import DeleteKamerad from "./DeleteKamerad";
import { useAuthState } from "react-firebase-hooks/auth";
import NavBarDefault from "../../../ComponentsV2/NavbarDefault";

const Kamerads = () => {
  const [kamerad, setKamerad] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    const kameradRef = collection(db, "kamerad");
    const q = query(kameradRef, orderBy("NIM"));
    onSnapshot(q, (snapshot) => {
      const kamerads = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setKamerad(kamerads);
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
          {kamerad.length === 0 ? (
            <span className="visually-hidden">Loading...</span>
          ) : (
            kamerad.map(({ id, NIM, Nama, image, kelompok }) => (
              <div className="kameradContainerz">
                <div key={id} className="kamerad-container-id">
                  <img src={image} style={{ width: 135, height: 135 }}></img>
                  <div className="kamerad-idz">
                    <div>{NIM}</div>
                    <div>{Nama}</div>
                    <div>{`Kelompok: ${kelompok}`}</div>
                    {user && <DeleteKamerad id={id} image={image} />}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div>
          <AddKamerad></AddKamerad>
        </div>
      </div>
    </div>
  );
};

export default Kamerads;
