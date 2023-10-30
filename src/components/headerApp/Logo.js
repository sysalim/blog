import Link from "next/link";

import { dataGlobalHeader, dataLogo } from "./data/logo";
const Logo = ({ className }) => {
  return (
    <Link href={"/"}>
      <div className={className}>
        <img
          src={dataGlobalHeader.logo}
          alt={dataGlobalHeader.altLogo}
        />
        <h1>
          {dataLogo.first}
          <span>{dataLogo.two}</span>
        </h1>
      </div>
    </Link>
  );
};
export default Logo;
