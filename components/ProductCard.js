import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <div>
      <Link href={`/products/${product.id}`}>
        <div className="w-80 inline-block rounded overflow-hidden hover:shadow-lg shadow-md">
          <Image
            className="w-full"
            src={product.imageUrl}
            alt="Sunset in the mountains"
            width={320}
            height={240}
          />
          <div className="px-6 py-4">
            <div className="flex justify-between">
              <div className="font-bold text-xl mb-2">{product.title}</div>
              <span>${product.price}</span>
            </div>
            <p className="text-gray-700 text-base">
              {product.description.substring(0, 100)}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
