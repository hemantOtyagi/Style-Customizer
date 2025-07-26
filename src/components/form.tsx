import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useStyleContext } from "./style-context";
import PreviewBox from "./preview-box";

const getTextColorForBackground = (hex: string): "black" | "white" => {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "black" : "white";
};

const isValidHex = (hex: string): boolean =>
  /^#([0-9A-F]{3}){1,2}$/i.test(hex);

const fields = [
  { label: "Border Radius (px)", name: "borderRadius", type: "number" },
  { label: "Padding (px)", name: "padding", type: "number" },
  { label: "Font Size (px)", name: "fontSize", type: "number" },
  { label: "Width (px)", name: "width", type: "number" },
  { label: "Height (px)", name: "height", type: "number" },
] as const;

const StyleForm: React.FC = () => {
  const { style, setStyle } = useStyleContext();
  const [manualHex, setManualHex] = useState(style.backgroundColor);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value, type } = e.target;
    const processedValue = type === "number" ? `${value}px` : value;
    setStyle((prev) => ({
      ...prev,
      [name]: processedValue,
    }));
  };

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    const hex = e.target.value;
    setManualHex(hex);

    if (isValidHex(hex)) {
      const textColor = getTextColorForBackground(hex);
      setStyle((prev) => ({
        ...prev,
        backgroundColor: hex,
        textColor: textColor === "white" ? "#ffffff" : "#000000",
      }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Styles applied!");
  };

  useEffect(() => {
    setManualHex(style.backgroundColor);
  }, [style.backgroundColor]);

  return (
    <div className="h-fit bg-[#212121] p-6 rounded-xl grid grid-cols-2 gap-22">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white rounded-xl shadow p-6 space-y-4 bg-gradient-to-b from-white to-gray-200"
      >
        <h2 className="text-xl font-semibold">Style Customizer</h2>

        <label className="block">
          <span className="text-sm font-medium">Enter Hex Color (e.g. #3498db)</span>
          <input
            type="text"
            value={manualHex}
            onChange={handleColorChange}
            placeholder="#ffffff"
            className="w-full mt-1 border rounded px-2 py-1"
          />
          {!isValidHex(manualHex) && (
            <span className="text-sm text-red-600">Invalid hex format</span>
          )}
        </label>

        {fields.map(({ label, name, type }) => (
          <label key={name} className="block">
            <span className="text-sm font-medium">{label}</span>
            <input
              type={type}
              name={name}
              value={parseInt(style[name]) || 0}
              onChange={handleChange}
              className="w-full mt-1 border rounded px-2 py-1"
            />
          </label>
        ))}

        <button
          type="submit"
          className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Apply Styles
        </button>
      </form>

      <div className="rounded-xl flex justify-center items-center bg-white">
        <PreviewBox />
      </div>
    </div>
  );
};

export default StyleForm;
