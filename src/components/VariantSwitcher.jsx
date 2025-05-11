import React from "react";

const VariantSwitcher = ({ variant }) => {
  return (
    <div className="text-sm text-white ml-4 sm:w-[250px] italic text-center mt-2 hidden lg:block">
      Current style: <span className="font-bold">{variant}</span> (press Alt + Q to switch)
    </div>
  );
};

export default VariantSwitcher;
