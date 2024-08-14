import { Organic } from "@/typings/searchTypings";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";

function MarketPlaceCard({ product }: { product: Organic }) {
  // console.log(product)
  return (
    <Link
      href={{
        pathname: "/product",
        query: { url: product.url },
      }}
      className="flex flex-col relative rounded-md px-5 h-[39vh] gap-4"
    >
      <Image
        src={product.image}
        alt={product.title}
        width={150}
        height={150}
        className="mx-auto"
      />

      <p className="text-xl font-bold">
        {product.price?.currency}
        {product.price.price}
      </p>

      {product.badge && (
        <Badge className="w-fit absolute top-2 right-2">{product.badge as any}</Badge>
      )}

      <p className="font-light">{product.title}</p>

      {product.rating && (
        <p className="text-yellow-500 text-sm">
          {product.rating.rating} ★
          <span className="text-gray-400 ml-2">({product.rating.count})</span>
        </p>
      )}
    </Link>
  );
}

export default MarketPlaceCard;
