import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import style from "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import { Navbar } from "../Components";

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
      <Navbar></Navbar>
      <h3 style={{ display: "flex", justifyContent: "center", marginTop: "30px", fontFamily: "poppins" }}>Portal admin khusus kamerad 19</h3>
      <p style={{ display: "flex", justifyContent: "center", fontFamily: "poppins" }}>
        Bagi yang mau kasih kesan pesan, cerita, edit foto, masukin foto di gallery, silahkan masuk
      </p>

      <p style={{ display: "flex", justifyContent: "center", fontFamily: "poppins" }}>*yang emailnya belum terdaftar boleh pc sam</p>
      <div class="login-wrap">
        <div class="login-html">
          <input id="tab-1" type="radio" name="tab" class="sign-in" checked />
          <label for="tab-1" class="tab">
            Sign In
          </label>
          <input id="tab-2" type="radio" name="tab" class="sign-up" />
          <label for="tab-2" class="tab"></label>
          <div class="login-form">
            <div class="sign-in-htm">
              <div class="group">
                <label for="user" class="label">
                  Username
                </label>
                <input
                  id="user"
                  type="text"
                  class="input"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div class="group">
                <label for="pass" class="label">
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  class="input"
                  data-type="password"
                  style={{ marginBottom: 50 }}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div class="group">
                <input id="check" type="checkbox" class="check" checked />
              </div>
              <div class="group">
                <input type="submit" class="button" value="Sign In" onClick={handleLogin} />
              </div>
              <div class="hr"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
