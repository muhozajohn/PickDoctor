import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const FaqsCard = ({ item }) => {
  const { question, content } = item;
  const [isOpen, setisOpen] = useState(false);
  const toggleAccordation = () => {
    setisOpen(!isOpen);
  };
  return (
    <div className="mb-5 cursor-pointer rounded-[12px] border border-solid border-[#D9DCE2] p-3 lg:p-5 ">
      <div
        className="flex items-center justify-between gap-5"
        onClick={toggleAccordation}
      >
        <h4 className=" text-[16px] leading-7 text-headingColor lg:text-[22px] lg:leading-8 ">
          {question}
        </h4>
        <div
          className={` ${
            isOpen && "border-none bg-primaryColor text-white text-textColor"
          } flex h-7 w-7 items-center justify-center rounded border border-solid border-[#141F21] lg:h-7 lg:w-8`}
        >
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
      {
        isOpen && <div className="mt-4">
            <p className="text-[14px] leading-6 text-headingColor lg:text-[16px] lg:leading-7 font-[400] ">
              {content}
            </p>
        </div>
      }
    </div>
  );
};

export default FaqsCard;
