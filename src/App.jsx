// import { useState } from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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

        <main className="w-full flex items-center justify-center bg-white mx-auto min-h-screen max-w-screen-sm font-montserrat relative">
          <section className="w-full mx-auto min-h-screen max-w-screen-sm font-montserrat relative pt-[70px]">
            <div className="my-0 mx-auto h-[575px] w-full max-w-screen-sm  overflow-x-hidden text-white bg-[#FDF9F0] -z-40 pb-[66px]">
              <div>
                <div className="right-0 absolute ">
                  <img src="/assets/image/Union.png" alt="" />{" "}
                  {/* Yellow Circle */}
                </div>

                <div className="right-0 absolute mt-[250px] ">
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
              <div className="mt-40  px-8 pb-20 space-y-20 md:space-y-10  font-semibold t">
                <div className="text-slate-900 absolute md:relative font-semibold text-4xl w-96 ">
                  <h1>Tagline Hero Section</h1>
                </div>
                <button
                  type="button"
                  className="bg-primary  absolute md:relative text-white w-fit p-3 rounded-lg mt-10"
                >
                  Download Aplikasi
                </button>
              </div>
              <div className="flex text-black text-center items-center justify-center mx-10 space-x-2 md:space-x-10 rounded-xl absolute shadow-lg mt-20  bg-white w-80 md:w-[550px]  h-32 md:h-40">
                {/* <div className=" ">TES</div> */}
                <div>
                  <img
                    className="w-10 md:w-full mx-auto"
                    src="/assets/image/submenu/Frame 9471.png"
                    alt=""
                  />
                  <h1>Ticket</h1>
                </div>
                <div>
                  <img
                    className="w-10 md:w-full mx-auto"
                    src="/assets/image/submenu/Frame 9472.png"
                    alt=""
                  />
                  <h1>Registration</h1>
                </div>
                <div>
                  <img
                    className="w-10 md:w-full mx-auto"
                    src="/assets/image/submenu/Frame 9473.png"
                    alt=""
                  />
                  <h1>Booking</h1>
                </div>
                <div>
                  <img
                    className="w-10 md:w-full mx-auto"
                    src="/assets/image/submenu/Frame 9476.png"
                    alt=""
                  />
                  <h1>Store</h1>
                </div>
              </div>
            </div>

            <hr className="w-full mt-28 absolute h-4 bg-slate-100" />
            <div
              className="flex mt-40 items-center justify-center" style={{color: white}}
            >
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSlideChange={() => console.log("slide change")}
              >
                <SwiperSlide>
                  <div className="abolute mb-20 flex items-center justify-center">
                    <a href="">
                      <img src="/assets/image/submenu/image 17.png" alt="" />
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="abolute mb-20 flex items-center justify-center">
                    <a href="">
                      <img src="/assets/image/submenu/image 17.png" alt="" />
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="abolute mb-20 flex items-center justify-center">
                    <a href="">
                      <img src="/assets/image/submenu/image 17.png" alt="" />
                    </a>
                  </div>
                </SwiperSlide>
                {/* Add more SwiperSlides as needed */}
              </Swiper>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                {/* Add Tailwind CSS classes for the pagination position */}
              </div>
            </div>

            <div className="mt-20 px-10 font-bold">
              <div className="flex justify-between">
                <h1>Upcoming Event</h1>
                <div className="flex space-x-4">
                  <h1>{">"}</h1>
                  <h1>See All</h1>
                </div>
              </div>
            </div>
            <div className="flex gap-2 px-10">
              <div className="mb-5 p-4 shadow-lg w-80 bg-white rounded-lg ">
                <div className="rounded-lg overflow-hidden">
                  <div className="hover:scale-105 transition-transform duration-300 ease-in-out transform origin-center">
                    <div className="absolute bg-dongker text-white rounded-lg px-2 mt-4 ml-4">
                      <h1>Website</h1>
                    </div>
                    <img
                      src="/assets/image/submenu/image 17.png"
                      className="rounded-2xl"
                      alt=""
                    />
                  </div>
                  <h2 className="text-primary font-bold uppercase mt-3 text-dongker">
                    Programming
                  </h2>
                  <h3 className="font-semibold text-xl text-dark mt-2 mb-3">
                    Website Development
                  </h3>
                  <p className="font-medium text-base text-secondary">
                    Discuss the creation of websites and the technology that is
                    currently being used.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <div className="mt-96"></div>
    </>
  );
}

export default App;
