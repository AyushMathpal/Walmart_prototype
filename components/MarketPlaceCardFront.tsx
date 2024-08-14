import React from "react";
import { Organic } from "@/typings/searchTypings";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { TicketIcon } from "lucide-react";
const MarketPlaceCardFront = ({ product }: { product: Organic }) => {
  return (
    <Link
      href={{
        pathname: "/product",
        query: { url: product.url },
      }}
      className="flex flex-col relative rounded-md px-5  h-[39vh]"
    >
      <Image
        src={product.image}
        alt={product.title}
        width={100}
        height={100}
        className="mx-auto"
      />

      {/* <p className="text-xl font-bold">
        {product.price?.currency}
        {product.price.price}
      </p> */}

      {product.badge && (
        <Badge className="w-fit absolute top-2 right-2">
          {product.badge as any}
        </Badge>
      )}

      <p className="font-bold">{product.title}</p>
      <div className="flex flex-col gap-4 ">
        <p className="mt-3 font bold text-gray-400">Review Intelligence</p>
        <div className="grid grid-cols-1 gap-1">
          <div className="grid grid-cols-1 gap-1 ">
            <div className="text-center h-9 p-1 w-fit min-w-[120px] border-gray-400 flex gap-2 items-center">
              <Image
                width={28}
                height={28}
                alt="icons"
                src="/images/GreenCheckCircle.svg"
              />
              <p className="underline font-semibold"> Design</p>
            </div>
          </div>
          <div className=" text-center h-9 p-1 w-fit min-w-[120px] border-gray-400 flex gap-2 items-center">
              <Image
                width={28}
                height={28}
                alt="icons"
                src="/images/GreenCheckCircle.svg"
              />
              <p className="underline font-semibold"> Quality</p>
            </div>

            <div className=" text-center h-9 p-1 w-fit min-w-[120px] border-gray-400 flex gap-2 items-center">
              <Image
                width={26}
                height={26}
                alt="icons"
                src="/images/ConCircle.svg"
              />
              <p className="underline font-semibold"> Performance</p>
            </div>
            <div className="text-left h-9 p-1 w-fit min-w-[120px] border-gray-400 flex gap-2 items-center">
              <Image
                width={26}
                height={26}
                alt="icons"
                src="/images/ConCircle.svg"
              />
              <p className="underline font-semibold"> Battery</p>
            </div>
        </div>
      </div>
      {/* {product.rating && (
        <p className="text-yellow-500 text-sm">
          {product.rating.rating} ★
          <span className="text-gray-400 ml-2">({product.rating.count})</span>
        </p>
      )} */}
    </Link>
  );
};

export default MarketPlaceCardFront;
