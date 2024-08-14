import React from "react";
import Competitors from "./Competitors";
import SellerSuggestions from "./SellerSuggestions";

const Suggestions = () => {
  return (
    <section id="suggestions-box" className="flex w-full h-[55vh] bg-slate-50">
      <SellerSuggestions />

      <div className="w-1/2 flex p-4 flex-col gap-4 ">
        <Competitors />
      </div>
    </section>
  );
};

export default Suggestions;
