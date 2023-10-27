import Navigation from "../Navigation";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="fixed top-0 z-10 w-screen">
        <Navigation />
      </div>
      <main className=" mt-24 min-h-[70vh]">{children}</main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
