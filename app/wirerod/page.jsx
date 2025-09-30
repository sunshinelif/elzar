import React from "react";
import QuotationBot from "@/components/QuotationBot";
import Image from "next/image";

const page = () => {
  return (
    <div className="mt-28 bg-gray-50  flex flex-col items-center justify-center p-6">
      {/* Başlık */}
      <h1 className="text-3xl font-bold mb-10 text-center">
       Wire Rod in Coil
      </h1>

      {/* İçerik kutusu */}
      <div className="container max-w-5xl flex flex-col md:flex-row items-center justify-center gap-10 bg-white p-10 rounded-2xl text-center md:text-left">
        {/* Sol taraf - Yazı */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">
            Specifications
          </h2>

          <p className="text-gray-700 text-base leading-relaxed">
Semi-finished metallic products in coil form, manufactured through hot rolling process. Size range: 5.5-32mm diameter. Used for cold drawing of round sections in various industrial applications.
          </p>
        </div>

        {/* Sağ taraf - Görsel */}
        <div className="flex-1 flex justify-center">
          <Image
            src="https://res.cloudinary.com/dypxjkgd8/image/upload/v1758810547/wirerod_b84qdm.png"
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
