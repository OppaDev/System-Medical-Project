import React, { useEffect, useState, ReactNode } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import Image from "next/image";

import SubHeader from "../layout/header/SubHeader";
import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer"; 


interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  const [userTheme, setUserTheme] = useState<string>("light");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setUserTheme(theme || "light");
  }, [theme]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("loader");
      if (loader) {
        setTimeout(() => {
          loader.style.display = "none";
        }, 3000);
      }
    }
  }, []);

  const themeToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setUserTheme(newTheme);
    setTheme(newTheme);
  };

  return (
    <>
      <div id="loader">
        <div>
          <Image
            width={500}
            height={500}
            src="/logo.png"
            alt="Logo"
            className="rounded-[50%] w-[75px] h-[75px]"
          />
        </div>
      </div>
      <div className="flex flex-col min-h-screen max-w-[100vw] overflow-x-clip bg-background-default text-text-main">
        {router.pathname !== "/404" && (
          <>
            <SubHeader />
            <Header themeToggle={themeToggle} theme={userTheme} />
          </>
        )}
        <main className="flex-grow -z-1">{children}</main>
        {router.pathname !== "/404" && <Footer />}
      </div>
    </>
  );
};

export default Layout;