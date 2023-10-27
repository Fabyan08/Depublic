import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import Nav from "../Components/Nav";
import { FiMapPin } from "react-icons/fi";
import { AiOutlineDown, AiOutlineTag } from "react-icons/ai";
import { GrNext } from "react-icons/gr";
import { MdOutlineFilterList, MdDateRange } from "react-icons/md";
const Ticket = () => {
  return (
    <>
      <Nav />
      <div className="max-w-xl min-h-screen bg-white mx-auto pt-40 ">
        <div className="px-4">
          <div className="flex items-center space-x-5">
            <Link to="/" className="text-gray">
              Home
            </Link>
            <GrNext className="text-gray" />
            <Link to="" className="text-primary font-bold">
              Ticket
            </Link>
          </div>
          <div className="mt-4">
            <div className="flex w-full space-x-2 justify-between">
              <form action="" className="md:w-[370px] rounded-xl">
                <input
                  type="text"
                  placeholder="Search Activity"
                  className="w-full h-10 pl-4 border-gray border-2 py-2  rounded-2xl "
                />
              </form>
              <div className="bg-[#FDF9F0] flex items-center w-40 space-x-4 h-10">
                <FiMapPin className="text-[#D49600]" />
                <h1>Location</h1>
                <AiOutlineDown className="text-[#D49600]" />
              </div>
            </div>
            <div className="mt-10 flex items-center text-md justify-between">
              <h1 className="font-bold">All Event</h1>
              <div className="flex space-x-10">
                <div className="flex items-center space-x-2">
                  <MdOutlineFilterList className="text-primary" />
                  <h1>Filter</h1>
                </div>
                <div className="flex items-center space-x-2">
                  <MdDateRange className="text-primary" />
                  <h1>Date</h1>
                </div>
                <div className="flex items-center space-x-2">
                  <AiOutlineTag className="text-primary" />
                  <h1>Price</h1>
                </div>
              </div>
            </div>
            <hr className="mt-4 border-gray" />
            <div className="mt-2">
              <h1>60 Event on result</h1>
            </div>
            <div className="grid grid-cols-2 space-x-2 ">
              <div className="mb-5 p-4 shadow-lg w-64 bg-white rounded-xl ">
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
                      <h2 className="text-primary text-[10px] font-bold">
                        DAY, MON TANGGAL{" "}
                      </h2>
                    </div>
                    <h3 className="font-bold text-xl text-dark">Judul Event</h3>
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
              <div className="mb-5 p-4 shadow-lg w-64 bg-white rounded-xl ">
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
                      <h2 className="text-primary text-[10px] font-bold">
                        DAY, MON TANGGAL{" "}
                      </h2>
                    </div>
                    <h3 className="font-bold text-xl text-dark">Judul Event</h3>
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
              <div className="mb-5 p-4 shadow-lg w-64 bg-white rounded-xl ">
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
                      <h2 className="text-primary text-[10px] font-bold">
                        DAY, MON TANGGAL{" "}
                      </h2>
                    </div>
                    <h3 className="font-bold text-xl text-dark">Judul Event</h3>
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
              <div className="mb-5 p-4 shadow-lg w-64 bg-white rounded-xl ">
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
                      <h2 className="text-primary text-[10px] font-bold">
                        DAY, MON TANGGAL{" "}
                      </h2>
                    </div>
                    <h3 className="font-bold text-xl text-dark">Judul Event</h3>
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
              <div className="mb-5 p-4 shadow-lg w-64 bg-white rounded-xl ">
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
                      <h2 className="text-primary text-[10px] font-bold">
                        DAY, MON TANGGAL{" "}
                      </h2>
                    </div>
                    <h3 className="font-bold text-xl text-dark">Judul Event</h3>
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
              <div className="mb-5 p-4 shadow-lg w-64 bg-white rounded-xl ">
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
                      <h2 className="text-primary text-[10px] font-bold">
                        DAY, MON TANGGAL{" "}
                      </h2>
                    </div>
                    <h3 className="font-bold text-xl text-dark">Judul Event</h3>
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
            </div>
          </div>
        </div>
        <Footer />
      </div>{" "}
    </>
  );
};

export default Ticket;
