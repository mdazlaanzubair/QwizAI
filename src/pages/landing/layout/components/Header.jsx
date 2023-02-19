import AnchorLink from "react-anchor-link-smooth-scroll";
import app_logo from "../../../../assets/app-logo/logo.png";

const Header = () => {
  return (
    <header className="navbar mb-2 justify-between">
      <div className="flex-none px-2 mx-2">
        <a href="/">
          <img className="w-36" src={app_logo} alt="Qwizbot logo" />
        </a>
      </div>
      <div className="flex-none px-2 mx-2">
        <div className="items-stretch hidden lg:flex">
          <AnchorLink href="#home" className="p-3 border-b-4 hover:border-b-indigo-600">Home</AnchorLink>
          <AnchorLink href="#about" className="p-3 border-b-4 hover:border-b-indigo-600">About</AnchorLink>
          <AnchorLink href="#features" className="p-3 border-b-4 hover:border-b-indigo-600">Features</AnchorLink>
          <AnchorLink href="#pricing" className="p-3 border-b-4 hover:border-b-indigo-600">Pricing</AnchorLink>
          <AnchorLink href="#why" className="p-3 border-b-4 hover:border-b-indigo-600">Why Qwizbot</AnchorLink>
          <AnchorLink href="#testimonial" className="p-3 border-b-4 hover:border-b-indigo-600">Reviews</AnchorLink>
          <AnchorLink href="#faq" className="p-3 border-b-4 hover:border-b-indigo-600">FAQ</AnchorLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
