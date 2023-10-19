// import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

function App() {
  return (
    <>
      <div>
        <header className="w-full flex items-center justify-center mx-auto ">
          <div className="fixed top-0 z-10 min-w-full px-2 text-blue-500 h-[100px] w-[100%] shadow-xl bg-white">
            <nav className="flex items-center max-w-xl pt-3 justify-between mx-auto ">
              <div>
                <img src="/assets/image/logo.png" alt="" />
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

        <main className="w-full flex items-center justify-center mx-auto min-h-screen max-w-screen-sm font-montserrat relative">
          <section className="w-full mx-auto min-h-screen max-w-screen-sm font-montserrat relative pt-[70px]">
            <div className="my-0 mx-auto min-h-screen w-full max-w-screen-sm  overflow-x-hidden text-white bg-[#FDF9F0] pb-[66px]">
              <div>
                <div className="right-0 absolute">
                  <img src="/assets/image/Union.png" alt="" />{" "}
                  {/* Yellow Circle */}
                </div>

                <div className="right-0 absolute mt-[250px]">
                  <img src="/assets/image/Union2.png" alt="" />{" "}
                  {/* Purple Circle */}
                </div>
              </div>
              <div className="w-full absolute z-[1] active:text-slate-400 text-slate-400 mt-20 flex">
                <form
                  action=""
                  className="w-full px-5 flex items-center justify-center"
                >
                  <input
                    type="text"
                    placeholder="Search Activities"
                    className="w-full border-none  opacity-40 rounded-xl py-[10px] px-10"
                    name="search"
                  />
                  <div className="absolute inset-y-0 left-4 pl-3 font-bold flex items-center pointer-events-none">
                    <AiOutlineSearch />
                  </div>{" "}
                </form>
              </div>
              <div className="mt-40  px-8  font-semibold t">
                <div className="text-slate-900 font-semibold text-4xl w-96 ">
                  <h1>Tagline Hero Section</h1>
                </div>
                <button type="button" className="bg-primary text-white w-fit p-3 rounded-lg mt-10">Download Aplikasi</button>
              </div>
            </div>
          </section>
        </main>
      </div>
      h1
    </>
  );
}

export default App;
