import starIcon from "../../assets/images/Star.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
const DoctorCard = ({ item }) => {
  const {
    name,
    avgRating,
    totalRating,
    photo,
    specialty,
    totalPatients,
    hospital,
  } = item;
  return (
    <div className="p-3 lg:p-5">
      <div>
        <img src={photo} alt="" className="w-full" />
      </div>
      <h2 className="mt-3 text-[18px] font-[700] leading-[30px] text-headingColor lg:mt-5 lg:text-[26px] lg:leading-9">
        {name}
      </h2>
      <div className="mt-2 flex items-center justify-between lg:mt-2">
        <span className=" cursor-pointer  rounded bg-[#CCF0F3] px-2 py-1 text-[12px] font-semibold leading-4 text-irisBlueColor lg:px-6 lg:py-2 lg:text-[16px] lg:leading-7 ">
          {specialty}
        </span>
        <div className="flex items-center  gap-[6px] ">
          <spnan className="flex items-center gap-[6px] text-[14px] font-semibold leading-6 text-headingColor lg:text-[16px] lg:leading-7 ">
            <img src={starIcon} alt="" /> {avgRating}
          </spnan>
          <span className="text-[14px] font-[400] leading-6 text-textColor lg:text-[16px] lg:leading-7">
            ({totalRating})
          </span>
        </div>
      </div>
      <div className="justify-between mt-[18px] flex items-center lg:mt-5 ">
        <div>
          <h3 className="flex gap-2 text-[16px] font-semibold leading-7 text-headingColor lg:text-[18px] lg:leading-[30px]">
            +{totalPatients} Patients
          </h3>
          <p className="text-[14px] font-[400] leading-6 text-textColor  ">
            At {hospital}
          </p>
        </div>
        <Link
          to="/doctors"
          className="group  flex h-[44px] w-[44px] items-center justify-center rounded-full border border-solid border-[#181A1E] hover:border-none hover:bg-primaryColor "
        >
          <BsArrowRight className="h-5 w-6 group-hover:text-white" />
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
