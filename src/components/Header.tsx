import { HiBars3 } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";
import { useState } from "react";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="max-w-screen-2xl flex flex-col text-center justify-between items-center py-4 px-5 text-black mx-auto max-sm:px-5 max-[400px]:px-3">
        <div className="flex justify-between items-center w-full">
          {/* Sidebar Menu Icon */}
          <HiBars3
            className="text-2xl max-sm:text-xl mr-20 max-lg:mr-0 cursor-pointer"
            onClick={() => setIsSidebarOpen(true)}
          />

          {/* Logo with Gradient Text */}
          <Link
            to="/"
            className="text-4xl font-bold tracking-[1.08px] max-sm:text-3xl max-[400px]:text-2xl"
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "1.2em",
              background: "linear-gradient(90deg, #d53369, #daae51)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.4)",
              fontWeight: 600,
              display: "inline-block",
            }}
          >
            Mytalorzone By Sahiba
          </Link>

          {/* Icons Section */}
          <div className="flex gap-4 items-center max-sm:gap-2">
            <Link to="/search">
              <HiOutlineMagnifyingGlass className="text-2xl max-sm:text-xl" />
            </Link>
            <Link to="/login">
              <HiOutlineUser className="text-2xl max-sm:text-xl" />
            </Link>
            <Link to="/cart">
              <HiOutlineShoppingBag className="text-2xl max-sm:text-xl" />
            </Link>
          </div>
        </div>

        {/* Scrolling Text Bar */}
        <div className="scrolling-container">
          <div className="scrolling-bar">
            <p className="scrolling-text">
              Welcome to Mytalorzone! Explore our latest trends | Sustainable
              Fashion for All | Custom Tailoring Services Available | Free
              Shipping Worldwide!
            </p>
          </div>
        </div>
      </header>

      {/* Sidebar Menu Component */}
      <SidebarMenu
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      {/* Inline Styles */}
      <style>
        {`
          @keyframes scrollBar {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          .scrolling-container {
            width: 100%;
            overflow: hidden;
            background-color: #ff4500; /* Bright orange for the bar */
          }

          .scrolling-bar {
            display: inline-block;
            white-space: nowrap;
            animation: scrollBar 10s linear infinite;
            padding: 10px 0;
          }

          .scrolling-text {
            font-size: 1rem;
            font-weight: bold;
            color: #ffffff; /* White text for contrast */
          }
        `}
      </style>
    </>
  );
};

export default Header;
