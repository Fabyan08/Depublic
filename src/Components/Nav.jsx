import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <header className="w-full flex items-center justify-center mx-auto ">
      <div className="fixed top-0 z-10 min-w-full px-2 text-blue-500 h-[100px] w-[100%] shadow-xl bg-white">
        <nav className="flex items-center max-w-xl pt-3 justify-between mx-auto ">
          <div>
            <Link to="/">
              <img src="/assets/image/logo.png" alt="" />
            </Link>
          </div>
          <div className="space-x-3 font-bold">
            <button className="border-[1px] text-primary border-primary rounded-xl px-[30px] py-[10px]">
              Sign In
            </button>
            <button className="bg-primary text-zinc-100 rounded-xl px-[30px] py-[10px]">
              Sign In
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
