import React, { useContext, useState } from "react";
import { AuthContext } from "../Firebase/AuthProvider";

const SignIn = () => {
  const { googleSignIn, signIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
    });
  };

  const handleSignIn = () => {
    if ((email, password)) {
      signIn(email, password)
        .then((result) => {
          console.log(result.user);
        })
        .catch((error) => {
          setError(error.message);
        });
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
            <h3 className="text-3xl font-bold text-white mb-6 mt-6">Sign In</h3>
            <div className="form-control">
              <p>{error}</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="email"
                className="input input-bordered bg-zinc-700 text-white"
                required
              />
            </div>
            <div className="form-control ">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="password"
                className="input input-bordered bg-zinc-700 text-white"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button onClick={handleSignIn} className="btn but btn-primary">
                Sign In
              </button>
            </div>
            <button
              className="btn but btn-primary"
              onClick={handleGoogleSignIn}
            >
              Sign In with Google
            </button>
            <p className="mt-14 mb-14">
              <span className="text-zinc-400"> New to CineHub?</span>{" "}
              <button className="text-white">Sign Up Now</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
