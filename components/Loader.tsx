import React, { useState, CSSProperties } from "react";
import { View } from "react-native";
import ClipLoader from "react-spinners/ClipLoader";

interface LoaderProps {
  isLoading: boolean;
}

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  const [color, setColor] = useState("#ffffff");

  return (
    <View className="sweet-loading">
      <ClipLoader
        color={color}
        loading={isLoading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </View>
  );
};

export default Loader;
