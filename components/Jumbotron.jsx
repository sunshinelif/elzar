"use client";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const products = [
  {
    id: 0,
    name: "Elzar Commercial Steel",
    image: {
      src:"https://res.cloudinary.com/dypxjkgd8/image/upload/v1759424733/slider1_zxvode.avif",
      alt: "Elzar Commercial Steel",
    },
  },
  {
    id: 1,
    name: "Product Overview",
    image: {
      alt: "Product Overview",
    },
  },
];

const Jumbotron = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (!swiperRef.current) return;
    const swiperInstance = swiperRef.current.swiper;
    animateText();
    swiperInstance.on("slideChangeTransitionStart", animateText);

    return () => {
      swiperInstance.off("slideChangeTransitionStart", animateText);
    };
  }, []);

  const animateText = () => {
    gsap.fromTo(
      ".jumbotron-text",
      { opacity: 0, y: 120 },
      { opacity: 1, y: 0, duration: 0.7 }
    );
    gsap.fromTo(
      ".jumbotron-button",
      { opacity: 0, y: 120 },
      { opacity: 1, y: 0, duration: 1 }
    );
  };

  return (
    <header className="w-full h-full pt-28">
      <Swiper
        ref={swiperRef}
        className="mySwiper w-full h-[60vh]"
        spaceBetween={0}
        speed={700}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {/* ✅ 1. SLIDE - Solda yazı, sağda resim */}
        <SwiperSlide className="flex items-center justify-center bg-white text-black">
          <div className="grid md:grid-cols-2 grid-cols-1 w-full h-full">
            {/* Sol: Yazı */}
            <div className="flex flex-col justify-center items-start px-10 md:px-20 sm:px-5 space-y-6">
              <h1 className="text-4xl md:text-4xl font-bold jumbotron-text">
                {products[0].name}
              </h1>
              <p className=" sm:text-sm text-lg md:text-xl opacity-90 max-w-lg">

          Leading subcontracted-manufacturing trading company with global export records, delivering comprehensive iron-steel solutions from Türkiye, Egypt and Chinese origins
              </p>

  <div className="flex flex-wrap gap-4 mt-4 sm:mt-2">
    <Link
      href="/contact"
      className="jumbotron-button bg-black text-white px-6 py-3 rounded-lg "
    >
      Contact Sales
    </Link>

<Link
  href="/SteelCatalogue.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="jumbotron-button bg-transparent border-2 border-black text-black px-6 py-3 rounded-lg"
>
  View Catalog
</Link>


  </div>
            </div>

            {/* Sağ: Resim */}
            <div className="relative w-full h-full ">
              <Image
                src={products[0].image.src}
                alt={products[0].image.alt}
                fill
                className="object-cover sliderImage"
                priority
              />
            </div>
          </div>
        </SwiperSlide>

{/* ✅ 2. SLIDE - Solda yazı, sağda resim */}
<SwiperSlide className="flex items-center justify-center bg-white text-black">
  <div className="grid md:grid-cols-2 grid-cols-1 w-full h-full">
    {/* SOL: Başlık + içerik */}
    <div className="flex flex-col justify-center items-start px-5 md:px-10 space-y-6 md:space-y-8">
      <h1 className="text-2xl md:text-6xl font-bold jumbotron-text text-center md:text-left">
        {products[1].name}
      </h1>

      {/* Ürün Grupları */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        <Link
          href="/beams"
          className="jumbotron-button bg-transparent border-2 border-black text-black p-4 rounded-2xl hover:bg-gray-200 transition block text-center sm:text-left"
        >
          <h2 className="font-bold text-lg md:text-xl mb-2">Profiles & Beams</h2>
          {/* <ul className="list-disc pl-5 space-y-1 text-sm md:text-lg hidden sm:block">
            <li>Equal angles ... click for more </li>
            <li>UPN ... click for more</li>
            <li>IPN ... click for more</li>
            <li>HEA/HEB ... click for more</li>
          </ul> */}
          <p className="block ">
            Click for more ...
          </p>
        </Link>

        <Link
          href="/merchantbars"
          className="jumbotron-button bg-transparent border-2 border-black text-black p-4 rounded-2xl hover:bg-gray-200 transition block text-center sm:text-left"
        >
          <h2 className="font-bold text-lg md:text-xl mb-2">Merchant Bars</h2>
          {/* <p className="text-sm md:text-lg  hidden sm:block">
            Flat bars, square bars, plain round bars, and cold drawn bars in various specifications and grades.
          </p> */}
                    <p className="block ">
            Click for more ...
          </p>
        </Link>

        <Link
          href="/rebar"
          className="jumbotron-button bg-transparent border-2 border-black text-black p-4 rounded-2xl hover:bg-gray-200 transition block text-center sm:text-left"
        >
          <h2 className="font-bold text-lg md:text-xl mb-2">Rebar & Wire rod</h2>
          {/* <ul className="text-sm md:text-lg space-y-1 hidden sm:block md:block lg:block">
            <li>Wire rod coils (5.5-32mm)</li>
            <li>Rebar (8-50mm)</li>
          </ul> */}
                    <p className="block">
            Click for more ...
          </p>
        </Link>

        <Link
          href="/coilsheets"
          className="jumbotron-button bg-transparent border-2 border-black text-black p-4 rounded-2xl hover:bg-gray-200 transition block text-center sm:text-left"
        >
          <h2 className="font-bold text-lg md:text-xl mb-2">Coils & Sheets</h2>
          {/* <p className="text-sm md:text-lg hidden sm:block">
            Plates/sheets (smooth or checkered), HRC, CRC in various thicknesses and widths.
          </p> */}
                    <p className="block ">
            Click for more ...
          </p>
        </Link>
      </div>
    </div>

    {/* SAĞ: Görsel (📱 Mobilde gizlenir) */}
    <div className="relative w-full h-full ">
      <Image
        src="https://res.cloudinary.com/dypxjkgd8/image/upload/v1758810996/steel_xyo3gd.jpg"
        alt="Product Overview"
        fill
        priority
        className="object-cover sliderImage"
      />
    </div>
  </div>
</SwiperSlide>



      </Swiper>
    </header>
  );
};

export default Jumbotron;
