const Footer = () => {
  return (
    <section
      id="footer"
      className="mt-10 h-[600px] md:h-[400px] px-4 md:px-10 w-full bg-darkPurple text-white"
    >
      <div className="md:flex pt-16  justify-between">
        <div className="space-y-4">
          <div>
            <img src="/assets/image/logo2.png" alt="" />
          </div>
          <div>
            <h1>"Tagline Company"</h1>
          </div>
          <div className="flex space-x-4">
            <img src="/assets/image/socmed/Group 213.png" alt="" />
            <img src="/assets/image/socmed/Group 214.png" alt="" />
            <img src="/assets/image/socmed/Group 215.png" alt="" />
          </div>
        </div>

        <div className="flex space-x-8 md:mt-0 mt-4">
          <div className="grid grid-rows-1 space-y-2">
            <a href="" className="mb-4 font-bold">
              Lorem Ipsum
            </a>
            <a href="">Lorem Ipsum</a>
            <a href="">Lorem Ipsum</a>
            <a href="">Lorem Ipsum</a>
            <a href="">Lorem Ipsum</a>
            <a href="">Lorem Ipsum</a>
          </div>
          <div className="grid grid-rows-1 space-y-2">
            <a href="" className="mb-4 font-bold">
              Lorem Ipsum
            </a>
            <a href="">Lorem Ipsum</a>
            <a href="">Lorem Ipsum</a>
            <a href="">Lorem Ipsum</a>
            <a href="">Lorem Ipsum</a>
            <a href="">Lorem Ipsum</a>
          </div>
        </div>
      </div>
      <div>
        <hr className="my-8 w-full border-b-primary" />
      </div>
      <div className="text-center mb-10">
        Copyright 2023 Depublic. All Right Reserved
      </div>
    </section>
  );
};

export default Footer;
