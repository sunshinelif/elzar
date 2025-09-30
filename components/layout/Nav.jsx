'use client';
import React, { useState } from 'react';
import Logo from './ui/Logo';
import Link from 'next/link';

const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isCorporateOpen, setCorporateOpen] = useState(false);
  const [isSoftwareOpen, setSoftwareOpen] = useState(false);

  const toggleCorporate = () => {
    const mediaQuery = window.matchMedia('(max-width: 1024px)');
    if (mediaQuery.matches) {
      setCorporateOpen(!isCorporateOpen);
      setSoftwareOpen(false);
    }
  };

  const toggleSoftware = () => {
    const mediaQuery = window.matchMedia('(max-width: 1024px)');
    if (mediaQuery.matches) {
      setSoftwareOpen(!isSoftwareOpen);
      setCorporateOpen(false);
    }
  };

  const dropdownItemClick = () => {
    setMenuOpen(false);
    setCorporateOpen(false);
    setSoftwareOpen(false);
  };



  const aboutSections = [
    { link: "/rebarwirerod", name: "REBAR & WIRE ROD" },
    { link: "/beams", name: "PROFILES & BEAMS" },
    { link: "/merchantbars", name: "MERCHANT BARS" },
    { link: "/coilsheets", name: "COILS & SHEETS" },
  ];

  return (
    <nav className="fixed w-full z-50 mt-0 bg-white flex items-center justify-between h-28 border sm:px-8 px-4">
      <Link href='/' className="h-full py-2">
        <Logo />
      </Link>

      <button
        className="lg:hidden text-gray-900 flex items-center justify-center text-4xl w-10"
        onClick={() => setMenuOpen(!isMenuOpen)}
        title="menu"
        type="button"
      >
        <svg className={isMenuOpen ? "hidden" : "block"} xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path fill="currentColor" d="M3 4h18v2H3zm0 7h12v2H3zm0 7h18v2H3z" />
        </svg>
        <svg className={isMenuOpen ? "block" : "hidden"} xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path fill="currentColor" d="m12 10.587l4.95-4.95l1.414 1.414l-4.95 4.95l4.95 4.95l-1.415 1.414l-4.95-4.95l-4.949 4.95l-1.414-1.415l4.95-4.95l-4.95-4.95L7.05 5.638z" />
        </svg>
      </button>

      <div className={`absolute w-full bg-white top-28 left-0 right-0 ${isMenuOpen ? 'opacity-100 visible overflow-auto min-h-[calc(100vh-7rem)] h-full' : 'invisible h-0 opacity-0'} flex flex-col pb-8 lg:pb-0 transition lg:items-center lg:flex-row lg:overflow-visible lg:opacity-100 lg:static lg:bg-transparent lg:left-0 lg:top-0 lg:h-full lg:visible`}>
        <ul className="flex w-full h-full px-4 pt-4 lg:p-0 lg:items-center gap-x-6 lg:flex-row flex-col lg:justify-end text-black">
          <li className="nav-list-item">
            <Link href="/" onClick={() => setMenuOpen(false)} className='font-bold'>
              Home
            </Link>
          </li>

          <li className="nav-list-item">
            <Link href="/scrap" onClick={() => setMenuOpen(false)} className='font-bold'>
              Scrap
            </Link>
          </li>
          {/* CORPORATE DROPDOWN */}
          <li className="relative group nav-list-item"
            onMouseEnter={() => { setCorporateOpen(true); setSoftwareOpen(false); }}
            onMouseLeave={() => setCorporateOpen(false)}
          >
            <button className='flex gap-x-2 pb-4 lg:py-4 uppercase w-full justify-between' onClick={toggleCorporate}>
              <span className='font-bold'>Products</span>
              <svg className={`${isCorporateOpen ? "rotate-180" : ""} text-2xl`} xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path fill="currentColor" d="m12 13.171l4.95-4.95l1.414 1.415L12 16L5.636 9.636L7.05 8.222z" />
              </svg>
            </button>
            <ul className={`${isCorporateOpen ? "flex visible" : "hidden invisible"} lg:absolute lg:w-[200px] bg-white text-black text-[14px] flex-col text-nowrap lg:drop-shadow-md`}>
              {aboutSections.map((item, index) => (
                <li className="drop-down-item" key={index}>
                  <Link href={item.link} onClick={dropdownItemClick} className='font-bold'>{item.name}</Link>
                </li>
              ))}
            </ul>
          </li>

        </ul>

        <div className='px-8 lg:p-0'>
          <Link href="/#contactForm" className="font-bold btn h-12 rounded-full text-white text-nowrap bg-secondary-150 w-full mt-12 lg:mt-0 lg:ml-6 lg:w-auto uppercase" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
