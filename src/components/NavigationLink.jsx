import { NavLink } from "react-router-dom";

const NavigationLink = ({ label, linkTo }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `${
          isActive
            ? " bg-opacity-100 bg-white rounded-full after:w-[30px] after:h-[30px] after:bg-[length:100%] after:bg-none md:after:bg-menu-item after:absolute  after:top-0 after:right-0 after:mt-[50px] before:w-[30px] before:h-[30px] before:bg-[length:100%] before:bg-none md:before:bg-menu-item before:absolute before:top-0 before:right-[-1px] before:mt-[-30px] before:rotate-90 [&>div]:before:h-[50px] [&>div]:before:w-[50px] [&>div]:before:bg-none md:[&>div]:before:bg-white [&>div]:before:absolute [&>div]:before:right-0"
            : "text-white"
        } text-2xl block relative h-[50px]`
      }
      to={linkTo}
      end
    >
      <div className=''>
        <div className='pl-5 py-2'>{label}</div>
      </div>
    </NavLink>
  );
};

export default NavigationLink;
