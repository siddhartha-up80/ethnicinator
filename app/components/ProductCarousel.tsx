//@ts-nocheck
"use client";

import Image from "next/image";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e: any) => e.preventDefault();

export default function ProductCarousel({ data }: any) {
  //   console.log(data);

  const items = data.map((product: any, index: any) => (
    <Image
      height={200}
      width={200}
      key={index} // Make sure each item has a unique key
      src={product.imageUrl}
      alt="product image"
      onDragStart={handleDragStart}
      role="presentation"
      className="px-1 md:min-h-[35vh] max-h-[40vh] min-w-full md:max-h-[50vh] object-top object-cover"
    />
  ));

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={{
        0: { items: 1 },
        1024: { items: 8 },
      }}
      autoPlayInterval={2000}
      autoPlayDirection="ltr"
      autoPlay={true}
      fadeOutAnimation={true}
      mouseTrackingEnabled={true}
      disableAutoPlayOnAction={true}
      disableDotsControls
      disableButtonsControls
      infinite={true}
    />
  );
}
