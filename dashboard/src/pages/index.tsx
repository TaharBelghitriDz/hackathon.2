import Dashboard from "./dashboard";
import LandingPage from "./landing.page";

const Pages = {
  Home: <LandingPage />,
  dashboard: <Dashboard />,
};

export default (props: { page: keyof typeof Pages }) => Pages[props.page];
