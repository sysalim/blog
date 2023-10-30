import Footer from "./Footer";
import Header from "./Header";
/**
 * 
 * @param {componets} param0 
 * @returns {global component}
 * @author sayyid salim <mohsalim951@gmail.com>
 */
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
