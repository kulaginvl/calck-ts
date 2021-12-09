import React, { FC } from "react";

interface DisplayType {
  x: string;
  y: string;
  action: string;
}

export const Display: FC<DisplayType> = ({ x, y, action }) => {
  const [showDisplay, setShowDisplay] = React.useState("");

  React.useEffect(() => {
    handleDisplay(x, y, action);
  }, [x, y, action]);

  const handleDisplay = (x: string, y: string, action: string) => {
    if (x && !y && !action) {
      setShowDisplay(x);
    } else if (x && !y && action) {
      setShowDisplay(`${x} ${action}`);
    } else if (x && y && action) {
      setShowDisplay(`${x} ${action} ${y}`);
    } else if (action === "AC") {
      setShowDisplay("");
    } else {
      setShowDisplay("");
    }
  };

  return (
    <div className="info">
      <p>{showDisplay}</p>
    </div>
  );
};
