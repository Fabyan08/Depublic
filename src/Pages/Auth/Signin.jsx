import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
const Signin = () => {
  return (
    <>
      <header className="w-full z-20 absolute flex items-center justify-center mx-auto ">
        <div className="fixed top-0 z-10 min-w-full px-2 text-blue-500 h-[100px] w-[100%] shadow-xl bg-white">
          <nav className="flex items-center max-w-xl pt-3 justify-between mx-auto ">
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
          <div id="notif" className="bg-[#FEF6E5] absolute z-10 w-full h-20">
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
            <form action="" className="space-y-8">
              <input
                type="text"
                placeholder="Username"
                className="border-b-slate-200 w-full border-b-2 focus:outline-none py-3 text-slate-400 bg-transparent"
              />

              <input
                type="text"
                placeholder="Password"
                className="border-b-slate-200 w-full border-b-2 focus:outline-none py-3 text-slate-400 bg-transparent"
              />
              <button className="bg-primary text-center w-full px-2 py-5 rounded-xl font-bold text-white">
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
                <img src="/assets/icon/image 40.png" alt="" className="w-10" />
                <img src="/assets/icon/image 39.png" alt="" className="w-10" />
                <img src="/assets/icon/image 41.png" alt="" className="w-10" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Signin;
