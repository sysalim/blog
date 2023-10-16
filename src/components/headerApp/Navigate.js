import Link from "next/link";
import { dataNavigate } from "./data/navigate";
const Navigate = ({ className }) => {
  return (
    <nav className={className}>
      <ul>
        {dataNavigate.map((value, index) => (
          <li key={index}>
            <Link href={value.path}>{value.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigate;
