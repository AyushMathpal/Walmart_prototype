import Image from "next/image";
import React from "react";
const SellerSuggestions = () => {
  return (
    <div className="w-1/2 pl-10 py-4 flex flex-col gap-8">
      <h1
        className="text-2xl font-semibold"
        style={{
          background:
            "var(--Gradient-1, linear-gradient(111deg, #F66A4B 15.87%, #A24AE7 60.65%, #4859F3 89.14%))",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Smart Seller Suggestions
      </h1>
      <div className="flex flex-col text-sm">
        <p className="font-semibold">Price Range</p>
        <div
          className="text-4xl font-bold"
          style={{
            background:
              "linear-gradient(to right, #7953cd 20%, #00affa 30%, #0190cd 70%, #764ada 80%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundSize: "500% auto",
            animation: " textShine 5s ease-in-out infinite alternate",
          }}
        >
          $999-$1100
        </div>
      </div>

      <div className="">
        <p className="font-medium text-xl text-gray-500">Review-Driven Recommendations</p>
        <ul className="p-4">
          <li>
            <div className="text-center h-9 p-1 w-fit min-w-[120px] border-gray-400 flex gap-2 items-center">
              <Image
                width={28}
                height={28}
                alt="icons"
                src="/images/GreenCheckCircle.svg"
              />
              <p className=" font-semibold">
                {" "}
                Reviewers frequently mention the sleek design and premium feel.
              </p>
            </div>
          </li>
          <li>
            {" "}
            <div className="text-center h-9 p-1 w-fit min-w-[120px] border-gray-400 flex gap-2 items-center">
              <Image
                width={28}
                height={28}
                alt="icons"
                src="/images/GreenCheckCircle.svg"
              />
              <p className=" font-semibold"> Users say the camera quality is exceptional </p>
            </div>
          </li>
          <li>
            {" "}
            <div className="text-center h-9 p-1 w-fit min-w-[120px] border-gray-400 flex gap-2 items-center">
              <Image
                width={24}
                height={24}
                alt="icons"
                src="/images/ConCircle.svg"
              />
              <p className="font-semibold"> Users report the phone tends to overheat during extended gaming sessions</p>
            </div>
          </li>
          <li>
            {" "}
            <div className="text-center h-9 p-1 w-fit min-w-[120px] border-gray-400 flex gap-2 items-center">
              <Image
                width={24}
                height={24}
                alt="icons"
                src="/images/ConCircle.svg"
              />
              <p className="font-semibold">Customers express disappointment with the slow charging speed</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SellerSuggestions;
