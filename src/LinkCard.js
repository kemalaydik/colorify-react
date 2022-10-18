import { Card } from "flowbite-react";

export default function LinkCard({ paletteName, emoji, colors }) {
  return (
    <>
      <div className="grid grid-cols-4 w-full">
        {colors.map(({ color, name }) => (
          <div
            key={name}
            className="w-full h-6 "
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      <div className="flex justify-between">
        <h5 className="text-md font-bold tracking-tight text-gray-900">
          {paletteName}
        </h5>
        <p className="font-normal text-gray-700">{emoji}</p>
      </div>
    </>
  );
}
