import { dataAbout } from "./data/dataAbout";
const AboutFooter = ({className}) => {
  return (
    <section id="about" className={className}>
      <h3>{dataAbout.title}</h3>
      <p>{dataAbout.content}</p>
      <h4>Email:<span>{dataAbout.email}</span></h4>
      <h4>Phone:<span>{dataAbout.phone}</span></h4>
    </section>
  );
};
export default AboutFooter;
