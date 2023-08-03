import DoctorList from "../../components/Doctors/DoctorList";
import Testimonial from "../../components/Testimonial/Testimonial";

const Doctors = () => {
  return (
    <div className="container">
      <div className="mx-auto md:w-full lg:w-[470px]">
        <h1 className="mt-3 text-center text-[30px] font-[800]">Find Doctor</h1>
        <div className="mt-4 flex  items-center justify-between  rounded border border-solid border-primaryColor md:mx-auto md:w-[80%] lg:w-full w-[80%] mx-auto ">
          <form action="">
            <input
              type="text"
              className="h-10 w-full border border-none bg-white px-4 py-2 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-primaryColor focus:outline-none focus:ring-0 focus:ring-primaryColor"
              placeholder="Search Doctor"
            />
          </form>
          <div>
            <button className="borber-none h-10 w-[100px] rounded bg-primaryColor outline-0">
              Search
            </button>
          </div>
        </div>
      </div>
      <DoctorList />

      <Testimonial />
    </div>
  );
};

export default Doctors;
