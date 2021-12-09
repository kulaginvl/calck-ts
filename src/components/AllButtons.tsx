import React, { FC } from "react";

let buttons = [
  {
    id: 1,
    key: "AC",
  },
  {
    id: 2,
    key: "+/-",
  },
  {
    id: 3,
    key: "%",
  },
  {
    id: 4,
    key: "/",
  },
  {
    id: 5,
    key: 7,
  },
  {
    id: 6,
    key: 8,
  },
  {
    id: 7,
    key: 9,
  },
  {
    id: 8,
    key: "*",
  },
  {
    id: 9,
    key: 4,
  },
  {
    id: 10,
    key: 5,
  },
  {
    id: 11,
    key: 6,
  },
  {
    id: 12,
    key: "-",
  },
  {
    id: 13,
    key: 1,
  },
  {
    id: 14,
    key: 2,
  },
  {
    id: 15,
    key: 3,
  },
  {
    id: 16,
    key: "+",
  },
  {
    id: 17,
    key: 0,
  },
  {
    id: 18,
    key: ".",
  },
  {
    id: 19,
    key: "=",
  },
];

interface AllButtonsType {
  onAddClick: (value: string) => void;
}

export const AllButtons: FC<AllButtonsType> = React.memo(({ onAddClick }) => {
  return (
    <div>
      {buttons.map((b, index) =>
        index === 16 ? (
          <button
            onClick={(e) => onAddClick(e.currentTarget.innerHTML)}
            key={b.id}
            className="btn two-block"
          >
            {b.key}
          </button>
        ) : (
          <button
            onClick={(e) => onAddClick(e.currentTarget.innerHTML)}
            key={b.id}
            className="btn"
          >
            {b.key}
          </button>
        )
      )}
    </div>
  );
});
