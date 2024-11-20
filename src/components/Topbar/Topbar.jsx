import React, { useState, useEffect, useRef } from "react";
import { MenuOutlined } from "@ant-design/icons";
import classNames from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";

const navigationLinks = [
  { name: "Giới thiệu", href: "#description" },
  { name: "Dịch vụ", href: "#services" },
  { name: "Tài Liệu", href: "#document" },
  { name: "Liên hệ", href: "#contact" },
];

const Topbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const menuRef = useRef(null); // Reference to menu
  const buttonRef = useRef(null); // Reference to menu button

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingDown(currentScrollY > lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div
      className={classNames(
        "fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-transform duration-300 ease-in-out",
        {
          "-translate-y-full": isScrollingDown && !isMenuOpen,
          "translate-y-0": !isScrollingDown || isMenuOpen,
        }
      )}
    >
      <div className="flex flex-wrap items-center justify-between py-4 px-6 bg-white shadow-lg">
        {/* Logo */}
        <div className="flex items-center transition-all duration-500 ease-in-out transform hover:scale-105">
          <a href="#" title="daylaixeoto" className="flex items-center">
            <img
              src="chung.jpg"
              alt="daylaixeoto"
              className="w-24 h-24 transition-all duration-500 transform hover:scale-110"
            />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            ref={buttonRef}
            onClick={toggleMenu}
            className="bg-white text-gray-600 hover:text-gray-900 focus:outline-none transition-colors duration-200"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          {navigationLinks.map(({ name, href }) => (
            <a
              key={href}
              href={href}
              className="text-gray-800 hover:text-blue-600 font-medium transition-all duration-300 ease-in-out transform hover:translate-x-1"
            >
              {name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 md:hidden"
            >
              <motion.div
                ref={menuRef}
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className=" right-0 top-0 bottom-0 w-full bg-white shadow-xl flex flex-col"
              >
                <div className="flex justify-end items-center p-4">
                  {/* Close Button */}
                  <button
                    onClick={toggleMenu}
                    className="bg-white text-gray-600 hover:text-gray-900 focus:outline-none transition-colors duration-200"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <nav className="bg-white py-5 flex-grow flex flex-col justify-center px-8 space-y-4">
                  {navigationLinks.map(({ name, href }, index) => (
                    <motion.div
                      key={href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <a
                        href={href}
                        className="block text-lg font-medium text-gray-900 hover:text-blue-600 py-2 transition-colors duration-200"
                        onClick={toggleMenu}
                      >
                        {name}
                      </a>
                    </motion.div>
                  ))}
                </nav>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Topbar;
