// import { useState } from "react";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <main className="w-full flex items-center justify-center mx-auto min-h-full max-w-screen-sm font-montserrat relative ">
          <header className="fixed top-0 z-10 min-w-full text-blue-500 h-[100px] w-[1440px] shadow-xl bg-white">
            <div className="flex items-center max-w-xl pt-3 justify-between mx-auto ">
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
            </div>
          </header>
        </main>
        <div className="w-full mx-auto min-h-full max-w-screen-sm font-montserrat relative mt-[68px]">
          <div className="my-0 mx-auto min-h-screen w-full  max-w-screen-sm max-w-480 overflow-x-hidden text-white bg-blue-500 pb-[66px]">
            <div>
              <h1>ANJAYYYY</h1>
            </div>
          </div>
        </div>
      </div>
      h1
    </>
  );
}

export default App;
