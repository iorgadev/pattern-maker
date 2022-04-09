import React from "react";
import SearchBar from "@/components/OptionsPanel/SearchBar";
import SearchOptions from "@/components/OptionsPanel/SearchOptions";

export default function OptionsPanel() {
  const [iconResults, setIconResults] = React.useState([]);

  // make an array from 1 to 42
  const icons = Array.from(Array(40).keys()).map((i) => i + 1);

  const getIcons = async (query) => {
    const response = await fetch("/api/getIcons", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        q: query,
      }),
    });
    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
      setIconResults(data);
      return;
    }
    setIconResults([]);
  };

  return (
    <div className="optionspanel closed">
      <SearchBar />
      <SearchOptions />

      <div className="flex-grow w-full grid grid-cols-4 gap-6 mt-10 px-4">
        {icons.map((icon, i) => {
          return (
            <div
              key={i}
              className="w-16 h-16 border-2 border-blue-100 border-opacity-50 p-1"
            >
              <img src={`/images/icons/${i}.png`} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
