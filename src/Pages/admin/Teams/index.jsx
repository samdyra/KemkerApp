import React from "react";
import { useState, useEffect } from "react";
import { query, collection, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";

const Teams = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const groupsRef = collection(db, "Groups");
    const q = query(groupsRef, orderBy("kelompok_num"));
    onSnapshot(q, (snapshot) => {
      const groups = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setGroups(groups);
      console.log(groups);
    });
  }, []);

  return (
    <div>
      {groups.length === 0 ? (
        <p>add datas</p>
      ) : (
        groups.map(
          ({
            id,
            anggota_1,
            anggota_2,
            anggota_3,
            anggota_4,
            anggota_5,
            anggota_6,
            img_anggota_1,
            img_anggota_2,
            img_anggota_3,
            img_anggota_4,
            img_anggota_5,
            img_anggota_6,
          }) => (
            <div className="border mt-3 bg-light" key={id}>
              <p>{`${id} ${anggota_1} ${anggota_2} ${anggota_3}`}</p>
              <img src={img_anggota_1} style={{ width: 100 }}></img>
            </div>
          )
        )
      )}
    </div>
  );
};

export default Teams;
