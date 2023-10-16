import Link from "next/link";
import ContainerFlex from "../helper/ContainerFlex";
import { dataLink } from "./data/dataLink";
const FooterLink = ({ className }) => {
  return (
    <ContainerFlex className={className}>
      <section>
        <h3>{dataLink[0].quick.title}</h3>
        <ul>
          {dataLink[0].quick.content.map((value,index) => (
            <li key={index}>
              <Link href={value.path}>{value.label}</Link>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h3>{dataLink[1].categories.title}</h3>
        <ul>
          {dataLink[1].categories.content.map((value, index) => (
            <li key={index}>
              <Link href={value.path}>{value.label}</Link>
            </li>
          ))}
        </ul>
      </section>
    </ContainerFlex>
  );
};
export default FooterLink;
