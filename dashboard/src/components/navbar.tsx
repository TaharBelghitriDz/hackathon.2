import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Modals from "./modals";
import LoginModal from "./modals/auth.modal";

export default () => {
  const disclosure = useDisclosure();

  return (
    <Navbar shouldHideOnScroll>
      <Modals {...disclosure} children={<LoginModal />} />
      <NavbarBrand>
        <p className="text-inherit play font-black">FTRAIN</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="flat"
            radius="full"
            onClick={disclosure.onOpen}
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
