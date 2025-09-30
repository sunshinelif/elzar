"use client"
import React from 'react'
import Title from './ui/Title'
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto pt-16 pb-6 px-4">
        <div className="flex flex-wrap gap-x-24 gap-y-12 pb-24">
          <div className="flex-1 min-w-72">
            <h2 className='text-2xl font-bold mb-4 text-nowrap'> Elzar Commercial Steel</h2>
            <p className='max-w-[300px]'>EG Office : 3 Mansour Diab st, El Sabteya, Cairo, Egypt.</p>
            <p className='max-w-[300px]'>
                TR Office: Sinan Cd. 94A, Ankara/Turkey
            </p>
          </div>
          <div className="">
            <h5 className='text-lg font-bold mb-4'>Contact Us</h5>
            <ul className='space-y-1'>
              <li><Link href="tel:+903125441112">Phone: +90 312 544 11 12 | WhatsApp: +90 505 849 12 03</Link></li>
              <li><Link href="mailto:sales@elzar.com.tr">sales@elzar.com.tr</Link></li>
            </ul>
          </div>
          {/* <div className="">
            <h5 className='text-lg font-bold mb-4'>Find Us</h5>
            <ul className='flex gap-x-4'>
              <li>
                <Link  href="https://www.linkedin.com/company/82978392/admin/feed/posts/" className="text-2xl">
                <FaLinkedin/>
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="text-2xl"
                >
                  <FaWhatsapp />
                </Link>
              </li>
            </ul>
          </div> */}
        </div>

      </div>

  </footer>

  )
}

export default Footer