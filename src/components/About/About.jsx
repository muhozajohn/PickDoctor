import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col justify-between gap-[50px] lg:flex-row lg:gap-[130px] xl:gap-0">
          <div className="relative z-10 order-2 w-3/4 lg:order-1 lg:w-1/2 xl:w-[770px]">
            <img src={aboutImg} alt="" />
            <div className="absolute bottom-4 right-[-30%] z-20 w-[200px] md:right-[-7%] md:w-[300px] lg:right-[22%]  ">
              <img src={aboutCardImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
