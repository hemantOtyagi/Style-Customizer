import React from "react";
import { useStyleContext } from "./style-context";

const PreviewBox: React.FC = () => {
  const { style } = useStyleContext();

  return (
    <div
      style={{
        color: style.textColor,
        backgroundColor: style.backgroundColor,
        borderRadius: style.borderRadius,
        padding: style.padding,
        fontSize: style.fontSize,
        width: style.width,
        height: style.height,
      }}
      className="mx-auto transition-all duration-300 flex justify-center items-center mt-8 border"
    >
      Preview Box
    </div>
  );
};

export default PreviewBox;
