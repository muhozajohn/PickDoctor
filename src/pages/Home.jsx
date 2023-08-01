import React from "react";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import featureImg from "../assets/images/feature-img.png";
import faqImg from "../assets/images/faq-img.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import ServicesList from "../components/Services/ServicesList";
import DoctorList from "../components/Doctors/DoctorList";
import FaqsList from "../components/Faqs/FaqsList";
const Home = () => {
  return (
    <>
      {/* ============== hero Section ============== */}
      <>
        <section className="hero-section pt=[60px] 2xl:h-[800px] ">
          <div className="container">
            <div className="flex flex-col items-center  justify-between gap-[90px] lg:flex-row">
              {/* ====================== content ==================== */}
              <div>
                <div className="lg:w-[570px]">
                  <h1 className="text-[36px] font-[800] leading-[46px] text-headingColor md:text-[60px] md:leading-[70px] ">
                    We help patient live a health, longer life.
                  </h1>
                  <p className="text_para">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                    aut amet tempore culpa reiciendis, numquam nobis cumque?
                    Officiis deleniti recusandae repellat laborum facilis ea
                    nihil. Voluptas culpa distinctio vitae perspiciatis.
                  </p>
                  <button className="btn">Request an Appointment</button>
                </div>
                {/* ================hero Counter ============== */}
                <div className="mt-[30px] flex flex-col gap-5 lg:mt-[70px] lg:flex-row lg:items-center lg:gap-[30px]">
                  <div>
                    <h2 className="text-[30px] font-[700] leading-[56px] text-headingColor lg:text-[44px] lg:leading-[54px]">
                      30+
                    </h2>
                    <span className="mt-[-14px] block h-2  w-[100px] rounded-full bg-yellowColor "></span>
                    <p className="text_para">Years of Experience</p>
                  </div>
                  <div>
                    <h2 className="text-[30px] font-[700] leading-[56px] text-headingColor lg:text-[44px] lg:leading-[54px]">
                      15+
                    </h2>
                    <span className="mt-[-14px] block h-2  w-[100px] rounded-full bg-purpleColor "></span>
                    <p className="text_para">Clinic Location</p>
                  </div>
                  <div>
                    <h2 className="text-[30px] font-[700] leading-[56px] text-headingColor lg:text-[44px] lg:leading-[54px]">
                      100%
                    </h2>
                    <span className="mt-[-14px] block h-2  w-[100px] rounded-full bg-irisBlueColor "></span>
                    <p className="text_para">Patient Stisfaction</p>
                  </div>
                </div>
              </div>
              {/* ================ Hero Content =============== */}

              <div className="flex justify-end gap-[30px] ">
                <div>
                  <img src={heroImg01} alt="" className=" w-full " />
                </div>
                <div className="mt-[30px]">
                  <img src={heroImg02} alt="" className="mb-[30px] w-full" />
                  <img src={heroImg03} alt="" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===================== end ofsection ==================== */}
        <section>
          <div className="container">
            <div className="mx-auto lg:w-[470px] ">
              <h2 className="heading text-center">
                Providing the best medical services
              </h2>
              <p className="text_para text-center">
                World-class care for everyone. Our health System offers
                unmatched, expert health care
              </p>
            </div>
            {/* <div className="mt-[30px] flex flex-col flex-wrap items-center justify-between gap-5 md:flex-row lg:mt-[55px] lg:gap-[30px] "></div> */}
            <div className="mt-[30px] grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-[55px] lg:grid-cols-3 lg:gap-[30px] ">
              <div className="px-5 py-[30px]">
                <div className="flex items-center justify-center">
                  <img src={icon01} alt="" />
                </div>
                <div className="mt-[30px]">
                  <h2 className="text-center text-[26px]  font-[700] leading-9 text-headingColor ">
                    Find Doctor
                  </h2>
                  <p className="mt-4 text-center text-[16px] font-[400] leading-7 text-textColor ">
                    World-class care for everyone. Our health System offers
                    unmatched, expert health care
                  </p>
                  <Link
                    to="/doctors"
                    className="group mx-auto mt-[30px] flex h-[44px] w-[44px] items-center justify-center rounded-full border border-solid border-[#181A1E] hover:border-none hover:bg-primaryColor "
                  >
                    <BsArrowRight className="h-5 w-6 group-hover:text-white" />
                  </Link>
                </div>
              </div>
              <div className="px-5 py-[30px]">
                <div className="flex items-center justify-center">
                  <img src={icon02} alt="" />
                </div>
                <div className="mt-[30px]">
                  <h2 className="text-center text-[26px]  font-[700] leading-9 text-headingColor ">
                    Find Location
                  </h2>
                  <p className="mt-4 text-center text-[16px] font-[400] leading-7 text-textColor ">
                    World-class care for everyone. Our health System offers
                    unmatched, expert health care
                  </p>
                  <Link
                    to="/doctors"
                    className="group mx-auto mt-[30px] flex h-[44px] w-[44px] items-center justify-center rounded-full border border-solid border-[#181A1E] hover:border-none hover:bg-primaryColor "
                  >
                    <BsArrowRight className="h-5 w-6 group-hover:text-white" />
                  </Link>
                </div>
              </div>
              <div className="px-5 py-[30px]">
                <div className="flex items-center justify-center">
                  <img src={icon03} alt="" />
                </div>
                <div className="mt-[30px]">
                  <h2 className="text-center text-[26px]  font-[700] leading-9 text-headingColor ">
                    Book Appointment
                  </h2>
                  <p className="mt-4 text-center text-[16px] font-[400] leading-7 text-textColor ">
                    World-class care for everyone. Our health System offers
                    unmatched, expert health care
                  </p>
                  <Link
                    to="/doctors"
                    className="group mx-auto mt-[30px] flex h-[44px] w-[44px] items-center justify-center rounded-full border border-solid border-[#181A1E] hover:border-none hover:bg-primaryColor "
                  >
                    <BsArrowRight className="h-5 w-6 group-hover:text-white" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <About />

        {/* ======================== Services ===================== */}
        <section>
          <div className="container">
            <div className="mx-auto xl:w-[470px]">
              <h2 className="heading text-center">Our Medical Services</h2>
              <p className="text_para text-center">
                World-class care for everyone. Our health System offers
                unmatched, expert health care
              </p>
            </div>
            <ServicesList />
          </div>
        </section>
        {/* ======================== End Services ===================== */}

        {/* ============================ Features ======================== */}
        <section>
          <div className="container">
            <div className="flex flex-col items-center justify-between lg:flex-row ">
              {/* ============== feature Content  =============== */}
              <div className="xl:w-[670px]">
                <h2 className="heading">
                  Get virtual treatment <br /> anytime.
                </h2>
                <ul className="pl-4">
                  <li className="text_para">
                    1. Schedule the Appointment Directly
                  </li>
                  <li className="text_para">
                    2. Search for your physician here, and contact their offece.
                  </li>
                  <li className="text_para">
                    3. View our physician who are accepting new patients, use
                    the online scheduling tool to select an appointment time
                  </li>
                </ul>
                <Link to="/">
                  <button className="btn">Learn More</button>
                </Link>
              </div>
              {/* ==================== Image ================= */}
              <div className="xl-[770px] relative z-10 mt-[50px] flex items-center justify-end lg:mt-0">
                <img src={featureImg} alt="" className=" w-3/4 " />
                <div className="absolute bottom-[50px] left-0 z-20 w-[150px] rounded-[10px] bg-white p-2 pb-3 md:bottom-[100px] md:left-5  lg:left-0 lg:mb-[-3rem] lg:w-[248px] lg:px-4 lg:pb-[20px] lg:pt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[6px] lg:gap-3  ">
                      <p className="text-[10px] font-[600] leading-[10px] text-headingColor lg:text-[14px] lg:leading-5 ">
                        Tue,24
                      </p>
                      <p className="text-[10px] font-[400] leading-[10px] text-textColor lg:text-[14px] lg:leading-5 ">
                        10:00Am
                      </p>
                    </div>
                    <span className="flex h-5 w-5 items-center justify-center rounded bg-yellowColor px-[6px] py-1 lg:h-[34px] lg:w-[34px] lg:px-[9px] lg:py-3">
                      <img src={videoIcon} alt="" />
                    </span>
                  </div>

                  <div className=" w=[65px] mt-2 rounded-full bg-[#CCF0F3] px-2 py-1 text-[8px] font-[500] leading-[8px] text-irisBlueColor lg:mt-4 lg:w-[96px] lg:px-[10px] lg:py-[6px] lg:text-[12px] lg:leading-4 ">
                    Consultation
                  </div>

                  <div className="mt-2 flex items-center gap-[6px] lg:mt-[18px] lg:gap-[10px]">
                    <img src={avatarIcon} alt="" />
                    <h4 className="text-[10px] font-[700] leading-3 text-headingColor lg:text-[16px] lg:leading-[22px]">
                      Wayne Collins
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ============================ Features End ======================== */}
        {/* ============================== OUR DOCTOR ======================== */}

        <section>
          <div className="container">
            <div className="mx-auto xl:w-[470px]">
              <h2 className="heading text-center">Our Great Doctors </h2>
              <p className="text_para text-center">
                World-class care for everyone. Our health System offers
                unmatched, expert health care
              </p>
            </div>
            <DoctorList />
          </div>
        </section>

        {/* ============================== OUR DOCTOR END ======================== */}

        {/* ======================= faqs ========================= */}
        <section>
          <div className="container">
            <div className="flex justify-between gap-[50px] lg:gap-0">
              <div className="hidden w-1/2 md:block">
                <img src={faqImg} alt="" />
              </div>
              <div className="w-full md:w-1/2">
                <div className="heading">
                  Most questions by our beloved patients
                </div>
                <FaqsList />
              </div>
            </div>
          </div>
        </section>
        {/* ======================= faqs End ========================= */}
      </>
    </>
  );
};

export default Home;
