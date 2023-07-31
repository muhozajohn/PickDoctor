import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col justify-between gap-[50px] lg:flex-row lg:gap-[130px] xl:gap-0">
          <div className="relative z-10 order-2 w-3/4 lg:order-1 lg:w-1/2 xl:w-[770px]">
            <img src={aboutImg} alt="" />
            <div className="absolute bottom-4 right-[-30%] z-20 w-[200px] md:right-[-7%] md:w-[300px] lg:right-[2%]  ">
              <img src={aboutCardImg} alt="" />
            </div>
          </div>
          {/* =============== About Content ======= ==== */}
          <div className=" order-1 w-full lg:order-2 lg:w-1/2 xl:w-[670px]">
            <h2 className="heading">Proud to be one of the nation best</h2>
            <p className="text_para capitalize ">
              for 30 years in row , u.s news & world report has recognised us as
              one of the best public hospitals in the nation and #1 in the
              world. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Sunt, doloribus!
            </p>
            <p className="text_para mt-[20px] capitalize">
              Our best for 30 years in row , u.s news & world report has
              recognised us as one of the best public hospitals in the nation
              and #1 in the world. 
            </p>
            <Link to="/">
              <button className="btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
