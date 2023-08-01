import React from "react";
import { faqs } from "../../assets/data/faqs";
import FaqsCard from "./FaqsCard";
const FaqsList = () => {
  return (
    <ul className="mt-[30px]">
      {faqs.map((item, index) => (
        <FaqsCard item={item} key={index} />
      ))}
    </ul>
  );
};

export default FaqsList;
