"use client";
import React, { useState } from "react";
import { Users } from "lucide-react";

const Mission = () => {
  return (
    <section
      className="relative mx-auto mt-10 w-full py-16 overflow-hidden"
      id="mision"
    >


 

      <div className="relative max-w-4xl mx-auto px-6">
        <div className="opacity-100">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-black to-gray-700 rounded-full mb-6 shadow-lg hover:scale-110 transition-transform duration-300">
              <Users className="text-white" size={24} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-700 mb-4">
              Our Mission
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-black to-gray-700  mx-auto rounded-full"></div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12 hover:shadow-3xl transition-all duration-500">
            <div className="flex flex-col lg:flex-row items-center gap-12">


              {/* Text Content */}
              <div className="flex-1 text-center lg:text-left">
                <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-medium">
Effectively collaborate with manufacturers and shipping companies to offer the very best services on both production and delivery lead time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Mission;
