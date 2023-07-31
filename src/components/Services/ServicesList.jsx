import React from "react";
import { services } from "../../assets/data/services";
import ServiceCard from "./ServiceCard";
const ServicesList = () => {
  return (
    <div className="mt-[30px] grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-[55px] lg:grid-cols-3 lg:gap-[30px]">
      {services.map((item, index) => (
        <ServiceCard item={item} index={index} key={index} />
      ))}
    </div>
  );
};

export default ServicesList;
