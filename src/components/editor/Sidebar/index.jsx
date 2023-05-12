import styled from "styled-components";
import { useState } from "react";

// Component Styles

const Root = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SelectTheme = styled.div`
  position: relative;
  background-color: white;
  left: -180px;
  width: 200px;
  height: 200px;
  border: 1px solid gray;
  border-radius: 7px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SelectedTheme = styled.div`
  font-size: 14px;
  border-radius: 4px;
  background-color: ${({ mainColor, themes }) => themes[mainColor].primary}};
  color: ${({ mainColor, themes }) => themes[mainColor].secondary}};
  height: 30px;
  padding: 6px 10px;
  &:hover {
    cursor: pointer;
  }
`;

const ThemeOptions = styled.div`
  position: relative;
  background-color: white;
  border: 1px solid gray;
  border-radius: 5px;
  height: 68px;
  overflow-y: scroll;
  padding: 2px;
`;

const ThemeOption = styled.div`
  display: flex;
  font-size: 13px;
  padding: 5px;
  &:hover {
    cursor: pointer;
    background-color: ${({ mainColor, themes }) => themes[mainColor].primary}};
    border-radius: 5px;
  }
`;

const Color = styled.div`
  background-color: ${(props) => props.subTheme};
  width: 15px;
  height: 15px;
  border-radius: 30px;
`;

/** Sidebar view of the Editor page */
function Sidebar({ theme, allThemes, onThemeSelectionHandler }) {
  const formatedTheme = theme[0].toUpperCase() + theme.slice(1);
  const [toggleThemes, setToggleThemes] = useState(false);

  const toggleHandler = () => {
    setToggleThemes((prevState) => !prevState);
  };

  const newThemeHandler = (value) => {
    onThemeSelectionHandler(value);
    setToggleThemes(false);
  };

  return (
    <Root>
      <SelectTheme>
        <h4>Site Styles</h4>
        <p style={{ fontSize: "14px" }}>Theme</p>
        <SelectedTheme
          mainColor={theme}
          themes={allThemes}
          onClick={toggleHandler}
        >
          {formatedTheme}
        </SelectedTheme>
        {toggleThemes ? (
          <ThemeOptions>
            {Object.keys(allThemes).map((item) => {
              const formattedOption = item[0].toUpperCase() + item.slice(1);
              return (
                <ThemeOption
                  mainColor={theme}
                  themes={allThemes}
                  onClick={() => newThemeHandler(item)}
                >
                  {formattedOption}
                  <Color subTheme={allThemes[item].primary} />
                  <Color subTheme={allThemes[item].secondary} />
                  <Color subTheme={allThemes[item].tertiary} />
                </ThemeOption>
              );
            })}
          </ThemeOptions>
        ) : (
          <>
            <p style={{ fontSize: "14px" }}>Theme Colors</p>
            <div style={{ display: "flex" }}>
              <Color subTheme={allThemes[theme].primary} />
              <Color subTheme={allThemes[theme].secondary} />
              <Color subTheme={allThemes[theme].tertiary} />
            </div>
          </>
        )}
      </SelectTheme>
    </Root>
  );
}

export default Sidebar;
