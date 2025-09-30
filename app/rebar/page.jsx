import React from "react";
import QuotationBot from "@/components/QuotationBot";
import Image from "next/image";

const page = () => {
  return (
    <div className="mt-28 flex flex-col items-center justify-center  px-6 bg-gray-50 ">
      {/* Başlık */}
      <h1 className="text-3xl font-bold mb-10 text-center">
        Reinforced Steel Bars - Rebar
      </h1>

      {/* İçerik kutusu */}
      <div className="container max-w-5xl flex flex-col md:flex-row items-center justify-center gap-10 bg-white p-10 rounded-2xl text-center md:text-left">
        {/* Sol taraf - Yazı */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">
            Product Specifications
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg mb-4">
            <li>Size range: 8-50mm diameter</li>
            <li>Available as weldable or non-weldable</li>
            <li>Forms: bars, coils, de-coiled bars</li>
            <li>Designed for tensile and shear stress resistance</li>
          </ul>
          <p className="text-gray-700 text-base leading-relaxed">
            Reinforcing steel placed in concrete to offset tensile and shear
            stresses in reinforced concrete structures, manufactured and
            delivered as finished products.
          </p>
        </div>

        {/* Sağ taraf - Görsel */}
        <div className="flex-1 flex justify-center">
          <Image
            src="https://res.cloudinary.com/dypxjkgd8/image/upload/v1758810486/rebar_xmykno.png"
            alt="rebar"
            width={400}
            height={250}
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Teklif botu */}
      <div className="mt-16 w-full flex justify-center">
        <QuotationBot />
      </div>
    </div>
  );
};

export default page;
