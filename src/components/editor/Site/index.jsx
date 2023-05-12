import styled from "styled-components";
import { theme } from "../../../styles/theme";

const Root = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SiteTitle = styled.h1`
  font-size: 24px;
  font-weight: 500;
  color: ${({ mainColor, themes }) =>
    themes[mainColor].secondary}; // Change to Secondary color
  margin-bottom: 12px;
`;

const SiteDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${({ mainColor, themes }) =>
    themes[mainColor].tertiary}}; // Change to Tertiary color
`;

const DocLink = styled.a`
  text-decoration: none;
  font-weight: 500;
  color: ${({ mainColor, themes }) =>
    themes[mainColor].secondary}}; // Change to Secondary color
  margin-top: 12px;
`;

/** Site preview for the Editor page */
function Site({ theme, allThemes }) {
  return (
    <Root>
      <SiteTitle mainColor={theme} themes={allThemes}>
        StyleAI Frontend Interview ⭐️
      </SiteTitle>
      <SiteDescription mainColor={theme} themes={allThemes}>
        Congratulations on making it to the coding interview for the frontend
        developer internship at StyleAI! In this task, you will be developing a
        'styles' menu in the sidebar of a website editor. This menu will allow
        users to change the theme of their site within the editor. This
        documentation aims to provide you with all the necessary information to
        complete the task successfully.
      </SiteDescription>
      <SiteDescription mainColor={theme} themes={allThemes}>
        This task is designed to test your ability to work with React
        components, manage state variables, and utilize local storage. We wish
        you the best of luck in completing this task and look forward to
        reviewing your work.
      </SiteDescription>
      <DocLink
        mainColor={theme}
        themes={allThemes}
        target="_blank"
        href="https://github.com/tapp-ai/tapp-frontend-interview#readme"
      >
        Read Task Documentation
      </DocLink>
    </Root>
  );
}

export default Site;
