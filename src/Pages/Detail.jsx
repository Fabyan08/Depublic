import Nav from "../Components/Nav";

const Detail = () => {
  return (
    <>
      <Nav />
      <section
        id="detail"
        className="max-w-xl px-[10px] md:px-[36px] mx-auto bg-white w-full min-h-screen pt-40"
      >
        <div className="flex items-center justify-center">
          <img
            src="/assets/image/submenu/image 17.png"
            className="rounded-xl w-full"
            alt=""
          />
        </div>{" "}
        <div className="mt-10">
          <ul className="flex justify-between">
            <li className="active active:text-primary">
              <a href="">Summary</a>
            </li>
            <li>
              <a href="">Summary</a>
            </li>
            <li>
              <a href="">Summary</a>
            </li>
            <li>
              <a href="">Summary</a>
            </li>
            <li>
              <a href="">Summary</a>
            </li>
          </ul>
          <hr className="w-full h-2 border-slate-300 mt-3" />
        </div>
      </section>
      <div className="mt-[1000px]"></div>
    </>
  );
};

export default Detail;
