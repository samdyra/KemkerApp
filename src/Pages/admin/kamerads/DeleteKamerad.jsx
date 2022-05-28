import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { db, storage } from "../../../firebase/firebaseConfig";
import { toast } from "react-toastify";
import { deleteObject, ref } from "firebase/storage";

export default function DeleteKamerad({ id, image }) {
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this article?")) {
      try {
        await deleteDoc(doc(db, "kamerad", id));
        toast("Article deleted successfully", { type: "success" });
        const storageRef = ref(storage, image);
        await deleteObject(storageRef);
      } catch (error) {
        toast("Error deleting article", { type: "error" });
      }
    }
  };
  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
