import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";

const SignIn = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const hangleGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
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
          <form onSubmit={handleSignIn} className="card-body">
            <h3 className="text-3xl font-bold text-white mb-6 mt-6">Sign In</h3>
            <div className="form-control">
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered bg-zinc-700 text-white"
                required
              />
            </div>
            <div className="form-control ">
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered bg-zinc-700 text-white"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn but btn-primary">Sign In</button>
            </div>
            <button onClick={hangleGoogle} className="btn but btn-primary">
              Sign In with Google
            </button>
            <p className="mt-14 mb-14">
              <span className="text-zinc-400"> New to CineHub?</span>{" "}
              <Link to="/SignUp">
                {" "}
                <button className="text-white">Sign Up Now</button>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

// import { AuthContext } from "../Firebase/AuthProvider";

// const SignIn = () => {
//   const { googleSignIn, signIn } = useContext(AuthContext);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleGoogleSignIn = () => {
//     googleSignIn().then((result) => {
//       console.log(result.user);
//     });
//   };

//   const handleSignIn = () => {
//     if ((email, password)) {
//       signIn(email, password)
//         .then((result) => {
//           console.log(result.user);
//         })
//         .catch((error) => {
//           setError(error.message);
//         });
//     }
//   };

//   return (
//     <div>
//       <div
//         className="hero min-h-screen"
//         style={{
//           backgroundImage:
//             "url(https://i.ibb.co/b3HZqGH/wallpaperflare-com-wallpaper-16.jpg)",
//         }}
//       >
//         <div className="card flex-shrink-0 w-full max-w-sm bg-slate-400 backdrop-filter  bg-opacity-20  shadow-xl ">
//           <form className="card-body">
//             <h3 className="text-3xl font-bold text-white mb-6 mt-6">Sign In</h3>
//             <div className="form-control">
//               <p>{error}</p>
//               <input
//                 onChange={(e) => setEmail(e.target.value)}
//                 name="email"
//                 type="email"
//                 placeholder="email"
//                 className="input input-bordered bg-zinc-700 text-white"
//                 required
//               />
//             </div>
//             <div className="form-control ">
//               <input
//                 onChange={(e) => setPassword(e.target.value)}
//                 name="password"
//                 type="password"
//                 placeholder="password"
//                 className="input input-bordered bg-zinc-700 text-white"
//                 required
//               />
//             </div>
//             <div className="form-control mt-6">
//               <button onClick={handleSignIn} className="btn but btn-primary">
//                 Sign In
//               </button>
//             </div>
//             <button
//               className="btn but btn-primary"
//               onClick={handleGoogleSignIn}
//             >
//               Sign In with Google
//             </button>
//             <p className="mt-14 mb-14">
//               <span className="text-zinc-400"> New to CineHub?</span>{" "}
//               <button className="text-white">Sign Up Now</button>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignIn;
