import { FiAlignJustify } from "react-icons/fi";
import { HashLink as Link } from "react-router-hash-link";
function NavBar() {
  const link = [
    { id: 1, name: "Home", address: "#homepage" },
    { id: 2, name: "Features", address: "#featurePage" },
    { id: 3, name: "About", address: "#aboutPage" },
    { id: 4, name: "Contact", address: "#contactPage" },
  ];

  return (
    <header className="bg-none bg-primary ">
      <nav className="px-10 lg:px-20 py-6 flex items-center justify-between">
        <img src="../images/logo.png" alt="" className="w-56 h-16" />
        <ul className="hidden lg:flex items-center px-6 gap-20 font-medium text-secondary">
          {link.map((data) => {
            return (
              <Link to={data.address} key={data.id} smooth>
                <li className="hover:bg-accent px-3.5 py-2 rounded-md cursor-pointer">
                  {data.name}
                </li>
              </Link>
            );
          })}
        </ul>
        <FiAlignJustify
          size={40}
          className="text-secondary cursor-pointer lg:hidden"
        />
      </nav>
    </header>
  );
}

export default NavBar;
