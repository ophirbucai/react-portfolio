import React from "react";
import { Navigation, Copyright } from "./components";
import navigation from "./lib/constants/navigation.ts";

const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const headerNavigation = React.useMemo(() => {
    return navigation.items.map(({ label, path }) => ({ children: label, to: path }))
  }, []);

  React.useEffect(() => {
    console.log("rendered");
  }, [])

  return (
    <>
      <header>
        <Navigation items={headerNavigation}/>
      </header>
      <main className="content">
        {children}
      </main>
      <footer className="footer">
        <Copyright/>
      </footer>
    </>
  );
};

export default AppLayout;