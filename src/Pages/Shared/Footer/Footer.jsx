import React from "react";
import { FcVoicePresentation } from "react-icons/fc";
import { PiArrowSquareRightFill } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="pt-20" style={{
      backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 1, 1), rgba(17, 24, 39, 0.9)), url('https://images.unsplash.com/photo-1583409276676-85f9987a9a86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1vdG9yY3ljbGUlMjBnbG92ZXN8ZW58MHx8MHx8fDA%3D')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
      <footer
        className="footer flex justify-evenly h-96 px-10 text-gray-400"

      >
        <div className=" w-1/3">
          <aside className="">
            <span className="text-primary bg-gray-700 lg:text-5xl plain tracking-wider font-extrabold">
              <span className="text-black">MO</span>BIKE
            </span>
          </aside>
          <div className="  poppins mt-2">
            Join us on our journey to deliver cutting-edge technology solutions. Thank you for trusting ACME Industries Ltd.
          </div>
          <div className="my-4 p-4  bg-gray-900 hover:bg-primary hover:text-gray-800">
            <h3 className="flex items-center gap-2 poppins uppercase"> <FcVoicePresentation className="text-2xl" /> talk with out support</h3>
            <h2 className="text-2xl text-white tracking-wider font-bold heading ml-8">(+88) 01750-110778</h2>
          </div>
          <div className="flex  gap-2"><a href="#!" role="button">
            {/* <!-- Facebook --> */}
            <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#1877f2]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --> */}
                <path
                  d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
              </svg>
            </span>
          </a>

            <a href="#!" role="button">
              {/* <!-- Instagram --> */}
              <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#c13584]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --> */}
                  <path
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </span>
            </a>

            <a href="#!" role="button">
              {/* <!-- Google --> */}
              <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#ea4335]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                  {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --> */}
                  <path
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                </svg>
              </span>
            </a>

            <a href="#!" role="button">
              {/* <!-- X --> */}
              <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 512 512">
                  {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --> */}
                  <path
                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </span>
            </a></div>
        </div>
        <nav className="">
          <div><h6 className="footer-title uppercase text-lg text-white">Userfull Links</h6></div>
          <div className="flex items-center gap-1"><PiArrowSquareRightFill className="text-primary text-lg" /> <a className="link link-hover">Our Comapany</a></div>
          <div className="flex items-center gap-1"><PiArrowSquareRightFill className="text-primary text-lg" /> <a className="link link-hover">Renting Facility</a></div>
          <div className="flex items-center gap-1"><PiArrowSquareRightFill className="text-primary text-lg" /> <a className="link link-hover">Services</a></div>
          <div className="flex items-center gap-1"><PiArrowSquareRightFill className="text-primary text-lg" /> <a className="link link-hover">Contact Us</a></div>
          <div className="flex items-center gap-1"><PiArrowSquareRightFill className="text-primary text-lg" /> <a className="link link-hover">Testimonials</a></div>
        </nav>
        <nav className="">
          <div><h6 className="footer-title uppercase text-lg text-white">Recent news</h6></div>
          <div className="flex items-center gap-1"> <a className="link link-hover">Our Comapany</a></div>
          <div className="flex items-center gap-1"> <a className="link link-hover">Renting Facility</a></div>
          <div className="flex items-center gap-1"> <a className="link link-hover">Services</a></div>
          <div className="flex items-center gap-1"> <a className="link link-hover">Contact Us</a></div>
          <div className="flex items-center gap-1"> <a className="link link-hover">Testimonials</a></div>
        </nav>
        <nav className="">
          <h3 className="text-lg uppercase plain tracking-wide">SALES HOURS</h3>
          <p className="poppins ">Monday - Friday: 09:00 am to 06:00 pm</p>

          <h3 className="text-lg uppercase plain tracking-wide">SERVICE HOURS</h3>
          <p className="poppins ">Monday - Friday: 09:00 am to 06:00 pm</p>

          <h3 className="text-lg uppercase plain tracking-wide">PARTS SHOP HOURS</h3>
          <p className="poppins ">Monday - Friday: 09:00 am to 06:00 pm</p>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
