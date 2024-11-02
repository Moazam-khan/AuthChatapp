import { ThemeConfig } from "antd";
import { breakPoints } from "../utils/constants";

export const colors = {
  primary: "#FFCB3A",
  secondary: "#354DFE",
  secondary90: "#354DFEEE",
  gray: "#2D2D2D",
  white: "#ffffff",
  white50: "rgba(255, 255, 255, 0.50)",
  white20: "rgba(255, 255, 255, 0.20)",
  white15: "rgba(255, 255, 255, 0.15)",
  white10: "rgba(255, 255, 255, 0.10)",
  white5: "rgba(255, 255, 255, 0.05)",
  black15: "rgba(0, 0, 0, 0.15)",
};
const { screenXS, screenSM, screenMD, screenLG, screenXL, screenXXL } =
  breakPoints;

export const theme: ThemeConfig = {
  components: {
    Pagination: {
      itemActiveBg: "#146DF1",
      colorText: "#7C7C82",
      borderRadius: 10,
    },
    Drawer: {
      colorBgElevated: "#252527",
    },
    Menu: {
      colorText: "#7C7C82",
      itemSelectedColor: "White",
      horizontalItemSelectedColor: "White",
      popupBg: "#181819",
      itemSelectedBg: "#37373C",
      subMenuItemBorderRadius: 8,
      itemHoverBg: "#37373C",
    },
    Dropdown: {
      colorBgElevated: "#252527",
    },
    Input: {
      colorBgContainer: "#181819",
      colorBorder: "#181819",
      borderRadiusLG: 16,
      colorText: "white",
      colorTextPlaceholder: "#7C7C82",
    },
    Modal: {
      contentBg: "#252527",
      colorIcon: "white",
    },
    Typography: {
      colorText: "white",
    },
    Button: {
      borderRadiusLG: 16,
      colorPrimary: "#146DF1",
      controlHeightLG: 47,
      fontWeight: 600,
      paddingInlineLG: 24,
      defaultBg: "#37373C",
      defaultBorderColor: "#37373C",
      defaultHoverBg: "#37373C",
      defaultHoverBorderColor: "#37373C",
      defaultColor: "white",
    },
    Segmented: {
      trackBg: "#181819",
      borderRadiusLG: 18,
      trackPadding: 6,
      itemColor: "white",
      itemHoverColor: "white",
      itemSelectedBg: "#252527",
      itemSelectedColor: "white",
      fontSizeLG: 14,
      controlHeightLG: 48,
    },
  },
  token: {
    screenXS,
    screenXSMin: screenXS,
    screenXSMax: screenSM - 1,
    screenSM,
    screenSMMin: screenSM,
    screenSMMax: screenMD - 1,
    screenMD,
    screenMDMin: screenMD,
    screenMDMax: screenLG - 1,
    screenLG,
    screenLGMin: screenLG,
    screenLGMax: screenXL - 1,
    screenXL,
    screenXLMin: screenXL,
    screenXLMax: screenXXL - 1,
    screenXXL,
    screenXXLMin: screenXXL,
  },
};
