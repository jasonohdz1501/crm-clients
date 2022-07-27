import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <div className="md:flex md:min-h-screen">
      <div className="md:w-1/4 bg-blue-900 px-5 py-10">
        <h2 className="text-4xl text-center text-white font-black">
          CMR - Clients
        </h2>
        <nav className="mt-10">
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "text-blue-300" : "text-white"} text-2xl block`
            }
            to="/clients"
            end
          >
            Clients
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "text-blue-300" : "text-white"} text-2xl block`
            }
            to="/clients/new"
          >
            New Client
          </NavLink>
        </nav>
      </div>
      <div className="md:w-3/4 px-10 pt-4 md:h-screen overflow-scroll">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
