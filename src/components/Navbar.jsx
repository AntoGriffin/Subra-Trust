import { useState, useRef, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa6';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const menuRef = useRef(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleItemClick = (index) => {
    setActiveItem(index);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      menuRef.current.querySelector('span').focus();
    }
  }, [mobileMenuOpen]);

  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 font-montserrat">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#top" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://static.vecteezy.com/system/resources/previews/009/337/385/original/donate-and-charity-flat-color-icon-helping-hand-love-free-png.png" className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">Subra Trust</span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a href="https://wa.me/+917338958400" className="pt-1" target="_blank" rel="noreferrer">
            <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center h-10"><FaWhatsapp className='h-5 w-7' /></button>
          </a>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={mobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">{mobileMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            )}
          </button>
        </div>
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${mobileMenuOpen ? 'block' : 'hidden'}`} id="navbar-sticky" ref={menuRef}>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <a
                href="#"
                className={`block py-2 px-3 rounded md:p-0 ${activeItem === 0 ? 'text-red-700' : 'text-gray-900 hover:text-red-700'}`}
                onClick={() => handleItemClick(0)}
                tabIndex={mobileMenuOpen ? '0' : '-1'}
                aria-current={activeItem === 0 ? 'page' : undefined}
              >
                <span className='text-lg'>Home</span>
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`block py-2 px-3 rounded md:p-0 ${activeItem === 1 ? 'text-red-700' : 'text-gray-900 hover:text-red-700'}`}
                onClick={() => handleItemClick(1)}
                tabIndex={mobileMenuOpen ? '0' : '-1'}
                aria-current={activeItem === 1 ? 'page' : undefined}
              >
                <span className='text-lg'>About</span>
              </a>
            </li>
            <li>
              <a
                href="#services"
                className={`block py-2 px-3 rounded md:p-0 ${activeItem === 2 ? 'text-red-700' : 'text-gray-900 hover:text-red-700'}`}
                onClick={() => handleItemClick(2)}
                tabIndex={mobileMenuOpen ? '0' : '-1'}
                aria-current={activeItem === 2 ? 'page' : undefined}
              >
                <span className='text-lg'>Services</span>
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className={`block py-2 px-3 rounded md:p-0 ${activeItem === 3 ? 'text-red-700' : 'text-gray-900 hover:text-red-700'}`}
                onClick={() => handleItemClick(3)}
                tabIndex={mobileMenuOpen ? '0' : '-1'}
                aria-current={activeItem === 3 ? 'page' : undefined}
              >
                <span className='text-lg'>Testimonials</span>
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className={`block py-2 px-3 rounded md:p-0 ${activeItem === 4 ? 'text-red-700' : 'text-gray-900 hover:text-red-700'}`}
                onClick={() => handleItemClick(4)}
                tabIndex={mobileMenuOpen ? '0' : '-1'}
                aria-current={activeItem === 4 ? 'page' : undefined}
              >
                <span className='text-lg'>Gallery</span>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`block py-2 px-3 rounded md:p-0 ${activeItem === 5 ? 'text-red-700' : 'text-gray-900 hover:text-red-700'}`}
                onClick={() => handleItemClick(5)}
                tabIndex={mobileMenuOpen ? '0' : '-1'}
                aria-current={activeItem === 5 ? 'page' : undefined}
              >
                <span className='text-lg'>Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
