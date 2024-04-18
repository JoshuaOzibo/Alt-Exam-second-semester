import React from "react";
import { Breadcrumb, Breadcrumbs, Link } from "react-aria-components";
import { BiMenuAltRight } from "react-icons/bi";


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full h-[60px] bg-[#fff] border-slate-300 border-b md:px-[80px] px-[1rem]">
      <Breadcrumbs className="flex m-auto w-[30%] justify-between">
        <Breadcrumb className=" outline-none">
          <Link className=" outline-none" href="/">Repositories</Link>
        </Breadcrumb>
        <Breadcrumb >
          <Link className=" outline-none" href="/">SingleRepo</Link>
        </Breadcrumb>
        {/* <Breadcrumb>
          <Link>Breadcrumbs</Link>
        </Breadcrumb> */}
      </Breadcrumbs>

      <div>
      <BiMenuAltRight className="cursor-pointer" size={30} />
      </div>
    </nav>
  );
};

export default Navbar;
