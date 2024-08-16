import React from "react";
import AndesFinanceLogo from "../Global/AndesFinanceLogo";
import { FaucetButton, RainbowKitCustomConnectButton } from "../scaffold-eth";
// import LanguageSwitcher from "../Global/LanguageSwitcher";
// import AccountConnect from "../layout/header/AccountConnect";
// import { BlackCreateWalletButton } from "../layout/header/BlackCreateWalletButton";
import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { useAccount } from "wagmi";

type ScrollComponentProps = {
  scrollToSection: (index: number) => void;
  activeSection: number;
};

const HeaderHome: React.FC<ScrollComponentProps> = ({ scrollToSection, activeSection }) => {
  const { address } = useAccount();
  return (
    <Navbar className="z-10 bg-background-1 py-10 px-32" maxWidth="2xl">
      <NavbarContent className="w-full justify-between">
        <NavbarBrand>
          <Link color={activeSection === 0 ? undefined : "foreground"}>
            <AndesFinanceLogo />
          </Link>
        </NavbarBrand>
        <div className="flex w-1/2 justify-center gap-6 lg:gap-20">
          <NavbarItem className="text-4xl font-bold text-orange-500">
            <Link
              className={activeSection === 0 ? "text-success" : "text-[#1744F9]"}
              onPress={() => scrollToSection(0)}
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem className="text-4xl font-bold">
            <Link
              className={activeSection === 1 ? "text-success" : "text-[#1744F9]"}
              onPress={() => scrollToSection(1)}
            >
              How it works?
            </Link>
          </NavbarItem>
          <NavbarItem className="text-4xl font-bold">
            <Link
              className={activeSection === 2 ? "text-success" : "text-[#1744F9]"}
              onPress={() => scrollToSection(2)}
            >
              Learning
            </Link>
          </NavbarItem>
        </div>
        <div className="flex items-center gap-4">
          <NavbarItem>{/* <LanguageSwitcher /> */}</NavbarItem>
          {!address && <NavbarItem className="hidden lg:flex">{/* <BlackCreateWalletButton /> */}</NavbarItem>}
          <NavbarItem className="hidden rounded-lg text-lg font-bold lg:flex">
            {/* TODO: WALLET */}
            <RainbowKitCustomConnectButton />
            <FaucetButton />
          </NavbarItem>
        </div>
      </NavbarContent>
    </Navbar>
  );
};

export default HeaderHome;
