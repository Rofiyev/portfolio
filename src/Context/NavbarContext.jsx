import { createContext } from "react";

const NavbarContext = createContext({ isOpen: false, setIsOpen: () => {} });

export default NavbarContext;
