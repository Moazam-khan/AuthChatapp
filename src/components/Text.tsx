import React from "react";
import { Typography } from "antd";
import { TextProps } from "antd/es/typography/Text";
const { Text: AntText } = Typography;

interface TextPropsExtended extends TextProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  color?: "secondary" | string;
  fontFamily?: string;
}

const Text = (props: TextPropsExtended) => {
  const { size, color = "white", fontFamily, ...rest } = props;

  const colorMap: { [key: string]: string } = {
    white: "#FFFFFF",
    secondary: "#7C7C82",
  };

  const finalColor = colorMap[color] || color;

  const getVariantStyle = () => {
    switch (size) {
      case "xs":
        return {
          fontSize: 12,
          fontWeight: 400,
        };
      case "sm":
        return {
          fontSize: 14,
          fontWeight: 400,
        };
      case "md":
        return {
          fontSize: 16,
          fontWeight: 400,
        };
      case "lg":
        return {
          fontSize: 18,
          fontWeight: 400,
        };
      case "xl":
        return {
          fontSize: 36,
          fontWeight: 600,
        };
      case "xxl":
        return {
          fontSize: 42,
          fontWeight: 600,
        };
      default:
        return {
          fontSize: 24,
          fontWeight: 600,
        };
    }
  };

  return (
    <AntText
      {...rest}
      style={{
        lineHeight: "normal",
        ...getVariantStyle(),
        color: finalColor,
        fontFamily: fontFamily || "Inter",
        ...props.style,
      }}
    >
      {props.children}
    </AntText>
  );
};

export default Text;
