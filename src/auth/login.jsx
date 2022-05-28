import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin/kelompok");
    } catch (error) {
      toast(error.code, { type: "error" });
    }
  };
  return (
    <>
      <h3 style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>Portal admin khusus kamerad 19</h3>
      <p style={{ display: "flex", justifyContent: "center" }}>Bagi yang mau kasih kesan pesan, edit foto, masukin foto di gallery, silahkan masuk</p>

      <p style={{ display: "flex", justifyContent: "center" }}>*yang emailnya belum terdaftar boleh pc sam</p>
      <div className="border p-3 bg-light mx-auto" style={{ maxWidth: 400, marginTop: 60 }}>
        <h1>Login</h1>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label>NIM</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <br />
        <button className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </div>
    </>
  );
}
