import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AddIcon from "../components/icons/addIcon";
import HomeIcon from "../components/icons/HomeIcon";
import NavigationLink from "../components/NavigationLink";
import SidebarNav from "../components/SidebarNav";

const Layout = () => {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

  const navigate = useNavigate();
  const handleToggleMobileMenu = () => {
    setToggleMobileMenu(!toggleMobileMenu);
  };
  return (
    <>
      <div className='md:flex md:min-h-screen'>
        <div className='hidden lg:block lg:w-1/5 bg-blue-900 pl-5 py-10'>
          <h2 className='text-4xl text-center text-white font-black'>
            CMR - Clients
          </h2>
          <SidebarNav>
            <NavigationLink label='Clients' linkTo='/clients' />
            <NavigationLink label='New Client' linkTo='/clients/new' />
          </SidebarNav>
        </div>
        {/* Mobile Header */}
        <div className='fixed top-0 left-0 w-full flex lg:hidden bg-sky-900 text-white justify-between py-3 px-5'>
          <div>
            <h1 className='text-2xl font-bold'>CRM - CLIENTS</h1>
          </div>
          <div>
            <button type='button' onClick={handleToggleMobileMenu}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                stroke-width='2'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
        </div>
        <div className='w-full lg:w-4/5 pt-4 lg:pr-4 md:h-screen overflow-scroll'>
          <div className='p-10 bg-white rounded-2xl m-5 sm:m-10 mt-12 sm:mt-20'>
            <Outlet />
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`${
          toggleMobileMenu
            ? "opacity-100 transition duration-500 ease-out"
            : "opacity-0 transition duration-500 ease-in"
        } fixed top-0 left-0 h-full w-full backdrop-contrast-75 bg-stone-900/50 z-50`}
        onClick={handleToggleMobileMenu}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`${
            toggleMobileMenu
              ? "translate-x-0 transition duration-500 ease-out"
              : "-translate-x-96 transition duration-500 ease-in"
          } h-screen w-[250px] bg-sky-900 absolute top-0`}
        >
          <SidebarNav>
            <div className='py-3 px-5'>
              <ul className='[&>li]:mb-5'>
                <li>
                  <button
                    className='text-white text-md font-medium flex gap-2'
                    type='button'
                    onClick={() => {
                      handleToggleMobileMenu();
                      navigate("/clients");
                    }}
                  >
                    <HomeIcon />
                    Clients
                  </button>
                </li>
                <li>
                  <button
                    className='text-white text-md font-medium flex gap-2'
                    type='button'
                    onClick={() => {
                      handleToggleMobileMenu();
                      navigate("/clients/new");
                    }}
                  >
                    <AddIcon />
                    New Client
                  </button>
                </li>
              </ul>
            </div>
          </SidebarNav>
        </div>
      </div>
    </>
  );
};

export default Layout;
