import Footer from "./Footer";
import Header from "./Header";
export default function Layout({ children }) {
  return (
    <div className="inner-wrapper">
      <Header />
      <div className="wrapper">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
