import { doctors } from "../../assets/data/doctors";
import DoctorCard from "./DoctorCard";
const DoctorList = () => {
  return (
    <div className="mt-[30px] grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:mt-[55px] lg:grid-cols-3 lg:gap-[30px]">
      {doctors.map((item) => (
        <DoctorCard item={item} key={item} />
      ))}
    </div>
  );
};

export default DoctorList;
