import styled from "styled-components";
import { useState } from "react";
import StyleIcon from '@mui/icons-material/Style';

// Component Styles - google has been used for a little styling purpose 

const Root = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ChooseTheme = styled.div`
  position: relative;
  background-color: white;
  left: -150px;
  width: 200px;
  height: 200px;
  border: 1px solid gray;
  border-radius: 7px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const DefaultSelectedTheme = styled.div`
  font-size: 14px;
  border-radius: 4px;
  background-color: ${({ color, styles }) => styles[color].primary}};
  color: ${({ color, styles }) => styles[color].secondary}};
  height: 30px;
  padding: 6px 10px;
  cursor: pointer;
  
`;

const ThemesOption = styled.div`
  position: relative;
  background-color: white;
  border: 1px solid gray;
  border-radius: 5px;
  height: 60px;
  overflow-y: scroll;
  padding: 2px;
`;

const ThemeSelection = styled.div`
  display: flex;
  font-size: 13px;
  padding: 5px;
  &:hover {
    cursor: pointer;
    background-color: ${({ color, styles }) => styles[color].primary}};
    border-radius: 5px;
  }
`;

const ThemeColor = styled.div`
  background-color: ${(props) => props.colorTheme};
  width: 15px;
  height: 15px;
  margin-left: 5px;
  border-radius: 30px;
`;

/** Sidebar view of the Editor page */
function Sidebar(props) {

  /**Created two state to manage state of toggling on theme selection and on activity of sidebar menu */

  const [toggleMethod, setToggleMethod] = useState(false);
  const [handleClick, setHandleClick] = useState(false);


  const onHandleClick = () => {
    setHandleClick(!handleClick);
  };

  const ontoggleClick = () => {
    setToggleMethod(!toggleMethod);
  };

  const onThemeChange = (data) => {
    props.onChangeTheme(data);
    setToggleMethod(false);
  };

  return (
    <Root>
      {/* mui is used for menu in sidebar and onclick functionality is performed to make sidebar active */}

      <StyleIcon style={{ height: "40px", width: "30px", cursor: "pointer", marginLeft: "10px", borderRadius: "3px", color: props.themeStyles[props.themesData].secondary, background: handleClick ? props.themeStyles[props.themesData].primary : null }} onClick={onHandleClick}></StyleIcon>
      {/*HandleClick is true then the theme options are shown for selection */}
      {handleClick &&
        <ChooseTheme>
          <h4>Site Styles</h4>
          <p style={{ fontSize: "15px" }}>Theme</p>

          {/* Default theme is chosen from local storage and onclick is triggered to select user prefered theme */}

          <DefaultSelectedTheme
            color={props.themesData}
            styles={props.themeStyles}
            onClick={ontoggleClick}
          >
            {props.themesData.charAt(0).toUpperCase() + props.themesData.slice(1)}
          </DefaultSelectedTheme>
          {toggleMethod ? (
            <ThemesOption>
              {Object.keys(props.themeStyles).map((value) => {
                return (
                  <ThemeSelection
                    color={props.themesData}
                    styles={props.themeStyles}
                    onClick={() => onThemeChange(value)}
                  >
                    {value.charAt(0).toUpperCase() + value.slice(1)}
                    <ThemeColor colorTheme={props.themeStyles[value].primary} />
                    <ThemeColor colorTheme={props.themeStyles[value].secondary} />
                    <ThemeColor colorTheme={props.themeStyles[value].tertiary} />
                  </ThemeSelection>
                );
              })}
            </ThemesOption>
          ) : (
            <>
              <p style={{ fontSize: "15px" }}>Theme Colors</p>
              <div style={{ display: "flex" }}>
                <ThemeColor colorTheme={props.themeStyles[props.themesData].primary} />
                <ThemeColor colorTheme={props.themeStyles[props.themesData].secondary} />
                <ThemeColor colorTheme={props.themeStyles[props.themesData].tertiary} />
              </div>
            </>
          )}
        </ChooseTheme>
      }
    </Root>
  );
}

export default Sidebar;