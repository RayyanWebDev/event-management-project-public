import React, { useContext, useState } from "react";
import { AuthContext } from "../Firebase/AuthProvider";

const SignUp = () => {
  const { signUp } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = () => {
    if (
      !/ ^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}|:"<>,.?~[\]\\/]).{6,}$ /.test(
        password
      )
    ) {
      setError(" okay");
    } else {
      setError("");
      if (email) {
        signUp(email, password).then((result) => console.log(result.user));
      }
    }
  };

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/b3HZqGH/wallpaperflare-com-wallpaper-16.jpg)",
        }}
      >
        <div className="card flex-shrink-0 w-full max-w-sm bg-slate-400 backdrop-filter  bg-opacity-20  shadow-xl ">
          <form className="card-body">
            <h3 className="text-3xl font-bold text-white mb-6 mt-6">Sign Up</h3>
            <div className="form-control">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="email"
                className="input input-bordered bg-zinc-700 text-white"
                required
              />
            </div>
            <div
              onChange={(e) => setPassword(e.target.value)}
              className="form-control "
            >
              <input
                type="password"
                placeholder="password"
                className="input input-bordered bg-zinc-700 text-white"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button onClick={handleSignUp} className="btn but btn-primary">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;