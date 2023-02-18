import app_logo from "../../../../assets/app-logo/logo.png";

const Header = () => {
  return (
    <header class="navbar mb-2 justify-between">
      <div class="flex-none px-2 mx-2">
        <a href="/">
          <img className="w-36" src={app_logo} alt="Qwizbot logo" />
        </a>
      </div>
      <div class="flex-none px-2 mx-2">
        <div class="items-stretch hidden lg:flex">
          <a class="btn btn-ghost btn-sm rounded-btn">Home</a>
          <a class="btn btn-ghost btn-sm rounded-btn">Portfolio</a>
          <a class="btn btn-ghost btn-sm rounded-btn">About</a>
          <a class="btn btn-ghost btn-sm rounded-btn">Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
