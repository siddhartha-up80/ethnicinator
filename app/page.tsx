import Image from "next/image";
import Hero from "./components/Hero";
import Newest from "./components/Newest";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProductCarousel from "./components/ProductCarousel";
import { client } from "./lib/sanity";
import { images } from "./interface";

async function getData() {
  const query = `*[_type == "product"] | order(_createdAt desc){
    "categoryName": category->name,
    "imageUrl": images[0].asset->url
}`;

  const data = await client.fetch(query);

  return data;
}

export const dynamic = "force-dynamic";

export default async function Home() {
  const data: images = await getData();

  return (
    <main className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero />
      <>
        <section className="text-gray-600 body-font lg:max-w-7xl mx-auto max-w-2xl">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <Image
                height={500}
                width={500}
                className="object-cover object-center rounded"
                alt="ethnic wear"
                src="/images/section.jpg"
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Discover Timeless Elegance
                in Authentic Indian Ethnic Wear
              </h1>
              <p className="mb-8 leading-relaxed">
                Immerse yourself in the rich tapestry of Indian traditions with
                our exquisite collection of ethnic wear. From vibrant sarees and
                regal Anarkali suits to intricately embroidered lehengas, our
                handpicked selection showcases the artistry and cultural
                heritage of India. Each garment tells a story of craftsmanship
                and elegance, perfect for special occasions or adding a touch of
                tradition to your everyday style.
              </p>
              <div className="flex justify-center">
                <Link href="/Women">
                  <Button className="text-lg">Explore Collection</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>

      {/* <div>
        <ProductCarousel data={data} />
      </div> */}
      <Newest />
    </main>
  );
}
