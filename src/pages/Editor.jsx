import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { theme } from "../styles/theme";
import Sidebar from "../components/editor/Sidebar";
import Site from "../components/editor/Site";
import { useEffect, useState } from "react";
import { siteThemes } from "../constants/siteThemes";


// Component Styles

const Root = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1700px;
  margin: 0 auto;
  height: 100vh;
  padding: 0;
  overflow-x: hidden;
  overflow-y: hidden;
  
`;

const RootContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  transition: height 100ms linear;
  padding: 32px;
  
`;

const SiteWrapper = styled(motion.div)`
  flex: 1;
  height: 100%;
  min-height: 600px;
  overflow: hidden;
  border: 1px solid ${theme.colors.black[40]};
  border-radius: 8px;
  background-color: ${({ mainTheme, themeStyles }) => themeStyles[mainTheme].primary}; // Change to Primary color
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SideBarWrapper = styled(motion.div)`
  width: 64px;
  height: 100%;
`;

/** Root Editor View */
function Editor() {

  // Creating a new state theme and initializing according to selection of theme or chosen default.

  const [themes, setThemes] = useState(() => {
    const storedTheme = localStorage.getItem("selectedTheme");
    return storedTheme ? JSON.parse(storedTheme) : "default";
  });

  //useEffect functionality is used to set the selected theme to local storage
  useEffect(() => {
    localStorage.setItem("selectedTheme", JSON.stringify(themes));
  }, [themes]);

  // handleThemeChange function is used to set the theme according to user preference

  const handleThemeChange = (data) => {
    setThemes(data);
  };


  return (
    <Root>
      <RootContent>
        <SiteWrapper mainTheme={themes} themeStyles={siteThemes} layout>
          <Site chosenTheme={themes} themeStyles={siteThemes} />
        </SiteWrapper>
        <SideBarWrapper layout>
          <Sidebar themesData={themes} themeStyles={siteThemes} onChangeTheme={handleThemeChange} />
        </SideBarWrapper>
      </RootContent>
    </Root>
  );
}

export default Editor;
