import React from "react";
import { toast } from "react-toastify";
import { BiSearchAlt } from "react-icons/bi";

const Header = () => {
  return (
    <header className="header">
      <div className="header_brand">
        <div>
          Afri<span className="header_brand_subtext">Learn</span>
          <p className="header_text">New things every day</p>
        </div>
      </div>
      <div
        className="header_search"
        onClick={() =>
          toast("🧤 we are working on this feature", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          })
        }
      >
        <BiSearchAlt />
      </div>
    </header>
  );
};

export default Header;
