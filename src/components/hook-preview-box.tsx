import { useFormContext, useWatch } from "react-hook-form";

const HookPreviewBox = () => {
  const { control } = useFormContext();

  // Watch all form values
  const values = useWatch({ control });

  // Parse and fallback values
  const borderRadius = parseInt(values?.borderRadius) || 10;
  const width = parseInt(values?.width) || 200;

  // Validate hex color string
  const isValidHex = (hex: string): boolean =>
    /^#([0-9A-F]{3}){1,2}$/i.test(hex);

  // Set background color if valid, otherwise fallback to white
  const backgroundColor = isValidHex(values?.backgroundColor)
    ? values.backgroundColor
    : "#ffffff";

  return (
    <div
      style={{
        borderRadius: `${borderRadius}px`,
        width: `${width}px`,
        height: "100px",
        backgroundColor,
        padding: "0px",
      }}
      className="mx-auto transition-all duration-300 flex justify-center items-center mt-8 border"
    >
      Preview Box
    </div>
  );
};

export default HookPreviewBox;
