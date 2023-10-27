import { useState } from "react";
import Nav from "../Components/Nav";
import { FiMapPin } from "react-icons/fi";

const Detail = () => {
  const [selectedSubmenu, setSelectedSubmenu] = useState("Summary");

  const handleSubmenuSelect = (submenu) => {
    setSelectedSubmenu(submenu);
  };
  return (
    <>
      <Nav />
      <section
        id="detail"
        className="max-w-xl px-[10px] md:px-[36px] mx-auto bg-white w-full h-[1500px] pt-40"
      >
        <div className="flex items-center justify-center">
          <img
            src="/assets/image/submenu/image 17.png"
            className="rounded-xl w-full"
            alt=""
          />
        </div>{" "}
        <div className="mt-10">
          <div className="flex mt-5  justify-between">
            <a
              href="#"
              className={`hover:bg-secondary rounded-full py-2 hover:font-bold hover:text-primary ${
                selectedSubmenu === "Summary"
                  ? "bg-secondary font-bold text-primary"
                  : ""
              }`}
              onClick={() => handleSubmenuSelect("Summary")}
            >
              Summary
            </a>

            {selectedSubmenu === "Summary" && (
              <hr className="absolute mt-[52px]  border-primary w-[70px] border-b-4 rounded-lg " />
            )}

            <a
              href="#"
              className={`hover:bg-secondary rounded-full py-2 hover:font-bold hover:text-primary ${
                selectedSubmenu === "Highlighted"
                  ? "bg-secondary font-bold text-primary"
                  : ""
              }`}
              onClick={() => handleSubmenuSelect("Highlighted")}
            >
              Highlighted
            </a>

            {selectedSubmenu === "Highlighted" && (
              <hr className="absolute mt-[52px]   border-primary w-[90px] border-b-4 rounded-lg left-[90px] md:left-[550px]" />
            )}

            <a
              href="#"
              className={`hover:bg-secondary rounded-full py-2 hover:font-bold hover:text-primary ${
                selectedSubmenu === "Package"
                  ? "bg-secondary font-bold text-primary"
                  : ""
              }`}
              onClick={() => handleSubmenuSelect("Package")}
            >
              Package
            </a>

            {selectedSubmenu === "Package" && (
              <hr
                className="absolute mt-[52px]  border-primary w-[70px] border-b-4 rounded-lg left-[185px] md:left-[680px]"
                // style={{ left: `750px` }} // Set the left position dynamically
              />
            )}

            <a
              href="#"
              className={`hover:bg-secondary rounded-full py-2 hover:font-bold hover:text-primary ${
                selectedSubmenu === "Location"
                  ? "bg-secondary font-bold text-primary"
                  : ""
              }`}
              onClick={() => handleSubmenuSelect("Location")}
            >
              Location
            </a>

            {selectedSubmenu === "Location" && (
              <hr className="absolute mt-[52px]  border-primary w-[70px] border-b-4 rounded-lg left-[255px] md:left-[790px]" />
            )}

            <a
              href="#"
              className={`hover:bg-secondary rounded-full py-2 hover:font-bold hover:text-primary ${
                selectedSubmenu === "Order"
                  ? "bg-secondary font-bold text-primary"
                  : ""
              }`}
              onClick={() => handleSubmenuSelect("Order")}
            >
              Order
            </a>

            {selectedSubmenu === "Order" && (
              <hr className="absolute mt-[52px]  border-primary w-[50px] border-b-4 rounded-lg right-2 md:left-[900px]" />
            )}
          </div>
          <hr className="w-full h-2 mb-4 border-slate-300 mt-3" />

          {selectedSubmenu === "Summary" && (
            <>
              <div className="flex space-x-2 text-base uppercase mt-4">
                <h2 className="flex space-x-2 text-slate-400 items-center justify-center ">
                  <FiMapPin />
                  <h1>Bandung</h1>
                </h2>
                <hr className="border-r h-5" />
                <h2 className="text-primary font-bold">DAY, MON TANGGAL </h2>
              </div>
              <div className="relative p-8 rounded-lg bg-white">
                <div className="absolute inset-0 backdrop-blur-lg bg-opacity-0 rounded-lg pt-40">
                  <div className="bg-white space-x-3 w-full h-40 rounded-xl shadow-lg flex flex-1 flex-col items-center justify-center">
                    <div className="flex space-x-3 items-center">
                      <img src="/assets/icon/search.png" alt="" />
                      <div>
                        <h1 className="font-bold text-md">
                          Want to See More Details?
                        </h1>
                        <h1>Login first to enter this page!</h1>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="space-x-3 font-bold">
                        <button className="border-[1px] text-primary border-primary rounded-xl px-[30px] py-[10px]">
                          Sign In
                        </button>
                        <button className="bg-primary text-zinc-100 rounded-xl px-[30px] py-[10px]">
                          Sign In
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <h1 className=" text-[25px] md:text-4xl font-semibold">
                    Konser Tunggal Maher Zain
                  </h1>
                </div>
                <div className="mt-4 grid grid-cols-2 justify-between">
                  {" "}
                  <h1 className="text-gray">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere officiis quae magni quia praesentium repellendus a
                    incidunt nesciunt nam vitae, quis eius possimus hic
                    corrupti.
                  </h1>
                  <div className="text-right">
                    <h1>Starting From</h1>
                    <h1 className="font-bold text-xl text-primary">
                      IDR 1.999.000
                    </h1>
                  </div>
                </div>
                <div className="mt-8">
                  <h1 className="font-bold text-xl">Highlight</h1>
                  <ul className="list-disc text-gray pl-5">
                    {" "}
                    <li>
                      {" "}
                      Saksikan langsung penampilan memukau dari Maher Zain lewat
                      tur perdana mereka, “2023 LE SSERAFIM TOUR 'FLAME RISES'
                      IN JAKARTA”
                    </li>
                    <li>
                      Konser akan berlangsung pada tanggal 3 Oktober 2023 di
                      JIEXPO Hall B3, Jakarta
                    </li>
                    <li>
                      Untuk cara penggunaan membership code saat periode
                      presale, harap kunjungi laman ini
                    </li>
                  </ul>
                </div>
                <div className="mt-8 bg-[#FFF0CC] w-full px-4 h-fit rounded-xl p-6">
                  <div className="flex justify-between">
                    <h1 className="font-bold">Info Penting</h1>
                    <h1 className="text-[#805A00] font-bold">See More</h1>
                  </div>

                  <ul className="list-disc text-gray pl-5">
                    {" "}
                    <li>
                      {" "}
                      FEARNOT MEMBERSHIP PRESALE dimulai pada hari Kamis, 3
                      Agustus 2023 pukul 12.00 - 22.00 WIB.
                    </li>
                    <li>
                      General Sales dimulai pada hari Jumat, 4 Agustus 2023
                      pukul 12.00 WIB.
                    </li>
                    <li>
                      Untuk Presale, 1 (satu) akun hanya dapat membeli maks. 4
                      (empat) tiket.
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
          {selectedSubmenu === "characters" && (
            <div>
              <h1>Menu2</h1>
            </div>
          )}
          {selectedSubmenu === "review" && (
            <div>
              <h1>menu3</h1>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Detail;
