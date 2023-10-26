import Nav from "../Components/Nav";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Footer from "../Components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { AiOutlineSearch } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import { GrNext } from "react-icons/gr";
const Home = () => {
  return (
    <>
      <div>
        <Nav />

        <main className="w-full flex items-center justify-center bg-white mx-auto min-h-screen max-w-xl font-montserrat relative">
          <section className="w-full mx-auto min-h-screen max-w-xl font-montserrat relative pt-[70px]">
            <div className="my-0 mx-auto h-[575px] w-full max-w-xl  overflow-x-hidden text-white bg-[#FDF9F0] -z-40 pb-[66px]">
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
              <div className="flex text-black text-center items-center justify-center mx-10 space-x-2 md:space-x-10 rounded-xl absolute shadow-lg mt-40 md:mt-20  bg-white w-80 md:w-fit px-5  h-32 md:h-40">
                {/* <div className=" ">TES</div> */}
                <div>
                  <img
                    className="w-40 mx-auto"
                    src="/assets/image/submenu/Frame 9471.png"
                    alt=""
                  />
                  <h1>Ticket</h1>
                </div>
                <div>
                  <img
                    className="w-20 mx-auto"
                    src="/assets/image/submenu/Frame 9472.png"
                    alt=""
                  />
                  <h1>Registration</h1>
                </div>
                <div>
                  <img
                    className="w-40 mx-auto"
                    src="/assets/image/submenu/Frame 9473.png"
                    alt=""
                  />
                  <h1>Booking</h1>
                </div>
                <div>
                  <img
                    className="w-40 mx-auto"
                    src="/assets/image/submenu/Frame 9476.png"
                    alt=""
                  />
                  <h1>Store</h1>
                </div>
              </div>
            </div>

            <hr className="w-full mt-28 absolute h-4 bg-slate-100" />
            <div className="flex mt-40 items-center justify-center">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={1}
                initialSlide={1}
                pagination={{ clickable: true }}
                onSlideChange={() => console.log("slide change")}
              >
                <SwiperSlide>
                  <div className=" mb-10 flex items-center justify-center">
                    <a href="/detail">
                      <img
                        className="rounded-2xl"
                        src="/assets/image/submenu/image 17.png"
                        alt=""
                      />
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" mb-10 flex items-center justify-center">
                    <a href="">
                      <img
                        className="rounded-2xl"
                        src="/assets/image/submenu/image 17.png"
                        alt=""
                      />
                    </a>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" mb-10 flex items-center justify-center">
                    <a href="">
                      <img
                        className="rounded-2xl"
                        src="/assets/image/submenu/image 17.png"
                        alt=""
                      />
                    </a>
                  </div>
                </SwiperSlide>
                {/* Add more SwiperSlides as needed */}
              </Swiper>
              <style>
                {`
              .swiper-pagination-bullet-active {
                background: #000000; 
                border-radius: 40px;
                width: 30px;
              }
            `}
              </style>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                {/* Add Tailwind CSS classes for the pagination position */}
              </div>
            </div>

            <div className="mt-20 px-10 font-bold">
              <div className="flex justify-between">
                <h1>Upcoming Event</h1>
                <div className="flex items-center space-x-4">
                  <h1>
                    <GrNext />
                  </h1>
                  <h1>
                    <a href="">See All</a>
                  </h1>
                </div>
              </div>
            </div>

            <div className="flex px-2 md:px-10">
              <Swiper
                modules={[Navigation, Scrollbar, A11y]}
                spaceBetween={400}
                slidesPerView={2}
                onSlideChange={() => console.log("slide change")}
              >
                <SwiperSlide>
                  <div className="mb-5 p-4 shadow-lg w-96 bg-white rounded-xl ">
                    <div className="rounded-lg overflow-hidden">
                      <div className="hover:scale-105 transition-transform duration-300 ease-in-out transform origin-center">
                        <img
                          src="/assets/image/submenu/image 17.png"
                          className="rounded-2xl"
                          alt=""
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex space-x-2 text-base uppercase mt-4">
                          <h2 className="flex space-x-2 text-slate-400 items-center justify-center ">
                            <FiMapPin />
                            <h1>Bandung</h1>
                          </h2>
                          <hr className="border-r h-5" />
                          <h2 className="text-primary font-bold">
                            DAY, MON TANGGAL{" "}
                          </h2>
                        </div>
                        <h3 className="font-bold text-xl text-dark">
                          Judul Event
                        </h3>
                        <p className="font-medium text-base text-third">
                          Lorem ipsum dolor sit amet consectetur.
                        </p>
                        <div className="flex">
                          <h1 className="font-bold text-primary text-medium">
                            Rp 1.999.000
                          </h1>
                          <h1>/</h1>
                          <h1 className="text-medium">1 Person</h1>
                        </div>
                        <div className="mt-4">
                          <button className="w-full px-4 rounded-xl text-green-600 bg-green-500/30 text-center py-2">
                            {" "}
                            Tersedia
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="mb-5 p-4 shadow-lg w-96 bg-white rounded-xl ">
                    <div className="rounded-lg overflow-hidden">
                      <div className="hover:scale-105 transition-transform duration-300 ease-in-out transform origin-center">
                        <img
                          src="/assets/image/submenu/image 17.png"
                          className="rounded-2xl"
                          alt=""
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex space-x-2 text-base uppercase mt-4">
                          <h2 className="flex space-x-2 text-slate-400 items-center justify-center ">
                            <FiMapPin />
                            <h1>Bandung</h1>
                          </h2>
                          <hr className="border-r h-5" />
                          <h2 className="text-primary font-bold">
                            DAY, MON TANGGAL{" "}
                          </h2>
                        </div>
                        <h3 className="font-bold text-xl text-dark">
                          Judul Event
                        </h3>
                        <p className="font-medium text-base text-third">
                          Lorem ipsum dolor sit amet consectetur.
                        </p>
                        <div className="flex">
                          <h1 className="font-bold text-primary text-medium">
                            Rp 1.999.000
                          </h1>
                          <h1>/</h1>
                          <h1 className="text-medium">1 Person</h1>
                        </div>
                        <div className="mt-4">
                          <button className="w-full px-4 rounded-xl text-green-600 bg-green-500/30 text-center py-2">
                            {" "}
                            Tersedia
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="mb-5 p-4 shadow-lg w-96 bg-white rounded-xl ">
                    <div className="rounded-lg overflow-hidden">
                      <div className="hover:scale-105 transition-transform duration-300 ease-in-out transform origin-center">
                        <img
                          src="/assets/image/submenu/image 17.png"
                          className="rounded-2xl"
                          alt=""
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex space-x-2 text-base uppercase mt-4">
                          <h2 className="flex space-x-2 text-slate-400 items-center justify-center ">
                            <FiMapPin />
                            <h1>Bandung</h1>
                          </h2>
                          <hr className="border-r h-5" />
                          <h2 className="text-primary font-bold">
                            DAY, MON TANGGAL{" "}
                          </h2>
                        </div>
                        <h3 className="font-bold text-xl text-dark">
                          Judul Event
                        </h3>
                        <p className="font-medium text-base text-third">
                          Lorem ipsum dolor sit amet consectetur.
                        </p>
                        <div className="flex">
                          <h1 className="font-bold text-primary text-medium">
                            Rp 1.999.000
                          </h1>
                          <h1>/</h1>
                          <h1 className="text-medium">1 Person</h1>
                        </div>
                        <div className="mt-4">
                          <button className="w-full px-4 rounded-xl text-green-600 bg-green-500/30 text-center py-2">
                            {" "}
                            Tersedia
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="mb-5 p-4 shadow-lg w-96 bg-white rounded-xl ">
                    <div className="rounded-lg overflow-hidden">
                      <div className="hover:scale-105 transition-transform duration-300 ease-in-out transform origin-center">
                        <img
                          src="/assets/image/submenu/image 17.png"
                          className="rounded-2xl"
                          alt=""
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex space-x-2 text-base uppercase mt-4">
                          <h2 className="flex space-x-2 text-slate-400 items-center justify-center ">
                            <FiMapPin />
                            <h1>Bandung</h1>
                          </h2>
                          <hr className="border-r h-5" />
                          <h2 className="text-primary font-bold">
                            DAY, MON TANGGAL{" "}
                          </h2>
                        </div>
                        <h3 className="font-bold text-xl text-dark">
                          Judul Event
                        </h3>
                        <p className="font-medium text-base text-third">
                          Lorem ipsum dolor sit amet consectetur.
                        </p>
                        <div className="flex">
                          <h1 className="font-bold text-primary text-medium">
                            Rp 1.999.000
                          </h1>
                          <h1>/</h1>
                          <h1 className="text-medium">1 Person</h1>
                        </div>
                        <div className="mt-4">
                          <button className="w-full px-4 rounded-xl text-green-600 bg-green-500/30 text-center py-2">
                            {" "}
                            Tersedia
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <hr className="w-full my-6 h-4 bg-slate-100" />

            <div className="mt-20 px-10 font-bold">
              <div className="flex justify-between">
                <h1>Popular Blog</h1>
                <div className="flex items-center space-x-4">
                  <h1>
                    <GrNext />
                  </h1>
                  <h1>
                    <a href="">See All</a>
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex px-2 md:px-10">
              <Swiper
                modules={[Navigation, Scrollbar, A11y]}
                spaceBetween={400}
                slidesPerView={2}
                onSlideChange={() => console.log("slide change")}
              >
                <SwiperSlide>
                  <div className="mb-5 p-4 shadow-lg w-96 bg-white rounded-xl ">
                    <div className="rounded-lg overflow-hidden">
                      <a href="">
                        <div className="hover:scale-105 transition-transform duration-300 ease-in-out transform origin-center">
                          <img
                            src="/assets/image/submenu/image 17.png"
                            className="rounded-2xl"
                            alt=""
                          />
                        </div>
                        <div className="space-y-2">
                          <h2 className="text-primary text-base mt-2 font-semibold">
                            DAY, MON TANGGAL{" "}
                          </h2>
                          <h3 className="font-bold text-xl text-dark">
                            Judul Blog
                          </h3>
                          <p className="font-medium text-base text-third">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Alias magnam eum odio doloribus consequatur
                            adipisci!{" "}
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="mb-5 p-4 shadow-lg w-96 bg-white rounded-xl ">
                    <div className="rounded-lg overflow-hidden">
                      <a href="">
                        <div className="hover:scale-105 transition-transform duration-300 ease-in-out transform origin-center">
                          <img
                            src="/assets/image/submenu/image 17.png"
                            className="rounded-2xl"
                            alt=""
                          />
                        </div>
                        <div className="space-y-2">
                          <h2 className="text-primary text-base mt-2 font-semibold">
                            DAY, MON TANGGAL{" "}
                          </h2>
                          <h3 className="font-bold text-xl text-dark">
                            Judul Blog
                          </h3>
                          <p className="font-medium text-base text-third">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Alias magnam eum odio doloribus consequatur
                            adipisci!{" "}
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="mb-5 p-4 shadow-lg w-96 bg-white rounded-xl ">
                    <div className="rounded-lg overflow-hidden">
                      <a href="">
                        <div className="hover:scale-105 transition-transform duration-300 ease-in-out transform origin-center">
                          <img
                            src="/assets/image/submenu/image 17.png"
                            className="rounded-2xl"
                            alt=""
                          />
                        </div>
                        <div className="space-y-2">
                          <h2 className="text-primary text-base mt-2 font-semibold">
                            DAY, MON TANGGAL{" "}
                          </h2>
                          <h3 className="font-bold text-xl text-dark">
                            Judul Blog
                          </h3>
                          <p className="font-medium text-base text-third">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Alias magnam eum odio doloribus consequatur
                            adipisci!{" "}
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="mb-5 p-4 shadow-lg w-96 bg-white rounded-xl ">
                    <div className="rounded-lg overflow-hidden">
                      <a href="">
                        <div className="hover:scale-105 transition-transform duration-300 ease-in-out transform origin-center">
                          <img
                            src="/assets/image/submenu/image 17.png"
                            className="rounded-2xl"
                            alt=""
                          />
                        </div>
                        <div className="space-y-2">
                          <h2 className="text-primary text-base mt-2 font-semibold">
                            DAY, MON TANGGAL{" "}
                          </h2>
                          <h3 className="font-bold text-xl text-dark">
                            Judul Blog
                          </h3>
                          <p className="font-medium text-base text-third">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Alias magnam eum odio doloribus consequatur
                            adipisci!{" "}
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="mb-5 p-4 shadow-lg w-96 bg-white rounded-xl ">
                    <div className="rounded-lg overflow-hidden">
                      <a href="">
                        <div className="hover:scale-105 transition-transform duration-300 ease-in-out transform origin-center">
                          <img
                            src="/assets/image/submenu/image 17.png"
                            className="rounded-2xl"
                            alt=""
                          />
                        </div>
                        <div className="space-y-2">
                          <h2 className="text-primary text-base mt-2 font-semibold">
                            DAY, MON TANGGAL{" "}
                          </h2>
                          <h3 className="font-bold text-xl text-dark">
                            Judul Blog
                          </h3>
                          <p className="font-medium text-base text-third">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Alias magnam eum odio doloribus consequatur
                            adipisci!{" "}
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <Footer />
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
