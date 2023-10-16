import CardFooter from "../app/CardFooter";
import { dataWakley } from "./data/dataWakley";

export const Weekly = ({ className }) => {
  return (
    <section className={className}>
      <CardFooter title={dataWakley.title} desc={dataWakley.desc} />;
    </section>
  );
};
export default Weekly;
