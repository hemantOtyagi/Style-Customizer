import React, { createContext, useContext, useState } from "react";

export type StyleState = {
  textColor: string;
  backgroundColor: string;
  borderRadius: string;
  padding: string;
  fontSize: string;
  width: string;
  height: string;
};

const defaultStyle: StyleState = {
  textColor: "#000000",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  padding: "16px",
  fontSize: "16px",
  width: "200px",
  height: "100px",
};

type StyleContextType = {
  style: StyleState;
  setStyle: React.Dispatch<React.SetStateAction<StyleState>>;
};

const StyleContext = createContext<StyleContextType | undefined>(undefined);

export const StyleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [style, setStyle] = useState<StyleState>(defaultStyle);

  return (
    <StyleContext.Provider value={{ style, setStyle }}>
      {children}
    </StyleContext.Provider>
  );
};

export const useStyleContext = (): StyleContextType => {
  const context = useContext(StyleContext);
  if (!context) {
    throw new Error("useStyleContext must be used within a StyleProvider");
  }
  return context;
};

