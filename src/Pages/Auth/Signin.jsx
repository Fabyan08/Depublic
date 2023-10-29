import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import { auth } from "../../Services/Firebase.auth";
import { signInWithEmailAndPassword } from "firebase/auth";

const Signin = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Get the navigate function

  useEffect(() => {
    // When the component mounts, check for user data in localStorage
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      // Automatically log the user in with the stored user data
      setUser(userData);
    }
  }, []);

  function handleCallbackResponse(response) {
    console.log("Encoded JWT: " + response.credential);
  }

  function handleSuccessfulLogin(credentialResponse) {
    const decoded = jwtDecode(credentialResponse.credential);
    console.log(decoded);
    setUser(decoded);

    // Store user data in localStorage for persistence
    localStorage.setItem("userData", JSON.stringify(decoded));

    // Redirect to the home page after successful login
    navigate("/home"); // Use the navigate function
  }

  function handleLogout() {
    // Clear user data from localStorage when the user logs out
    localStorage.removeItem("userData");
    setUser(null);
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {user ? (
        <div>
          <p>Welcome, {user.name}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <>
          <header className="w-full z-20 absolute flex items-center justify-center mx-auto">
            <div className="fixed top-0 z-10 min-w-full px-2 text-blue-500 h-[100px] w-[100%] shadow-xl bg-white">
              <nav className="flex items-center max-w-xl pt-3 justify-between mx-auto">
                <div>
                  <Link to="/">
                    <img src="/assets/image/logo.png" alt="" />
                  </Link>
                </div>
              </nav>
            </div>
          </header>{" "}
          <main className="w-full bg-white mx-auto min-h-screen h-[1200px] max-w-xl font-montserrat relative">
            <div className="pt-20">
              <div
                id="notif"
                className="bg-[#FEF6E5] absolute z-10 w-full h-20"
              >
                <div className="flex  pt-10 px-4 font-bold items-center justify-between">
                  <h1>Sign In</h1>
                  <ImCross className="text-gray" />
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute right-4 mt-14 z-0">
                <img src="/assets/icon/rounded1.png" alt="" />
              </div>
              <div className="absolute -right-10 mt-36 z-0">
                <img src="/assets/icon/rounded2.png" alt="" />
              </div>
              <div className="px-4 pt-28">
                <h1>Welcome Back!</h1>
              </div>
              <div className="pt-10 px-4 relative">
                <form action="" onSubmit={signIn} className="space-y-8">
                  <input
                    type="email"
                    placeholder="Username"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="border-b-slate-200 w-full border-b-2 focus:outline-none py-3 text-slate-400 bg-transparent"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className="border-b-slate-200 w-full border-b-2 focus:outline-none py-3 text-slate-400 bg-transparent"
                  />
                  <button type="submit" className="bg-primary text-center w-full px-2 py-5 rounded-xl font-bold text-white">
                    Create Account
                  </button>
                  <h1 className="text-center text-slate-400">
                    Dont Have An Account?{" "}
                    <Link to={"/signup"} className="text-primary font-bold">
                      Register
                    </Link>
                  </h1>
                </form>
                <div className="mt-40 text-center">
                  <h1>Atau Daftar Dengan</h1>
                  <div className="flex items-center justify-center space-x-20 mt-10">
                    <img
                      src="/assets/icon/image 40.png"
                      alt=""
                      className="w-10"
                    />
                    <div className="signin">
                      <GoogleOAuthProvider clientId="14668241331-a057vl814i38tvjt2d31vcbmsgbibea6.apps.googleusercontent.com">
                        <GoogleLogin
                          onSuccess={handleSuccessfulLogin}
                          onError={() => {
                            console.log("Login Failed");
                          }}
                        />
                      </GoogleOAuthProvider>
                    </div>
                    {/* <img src="/assets/icon/image 39.png" alt="" className="w-10" /> */}
                    <img
                      src="/assets/icon/image 41.png"
                      alt=""
                      className="w-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default Signin;
