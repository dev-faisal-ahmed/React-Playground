import { ChangeEvent, useState } from "react";
import { BiDownArrow } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";

type SelectProps = {
  options: string[];
  selected: string;
  // setSelected: Dispatch<SetStateAction<string>>;
  handleSelect: (data: string) => void;
};

export function Select({ selected, options, handleSelect }: SelectProps) {
  const [tempOptions, setTempOptions] = useState<string[]>(options);
  const [showList, setShowList] = useState<boolean>(false);

  const handleOnchange = (event: ChangeEvent<HTMLInputElement>) => {
    const filteredOptions = options.filter((op) =>
      op.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())
    );
    setTempOptions(filteredOptions);
  };

  const handleSelection = (option: string) => {
    handleSelect(option);
    setShowList(false);
    setTempOptions(options);
  };

  return (
    <div className="relative">
      <div
        onClick={() => setShowList(!showList)}
        className="bg-transparent border px-3 py-1 rounded flex items-center justify-between font-semibold cursor-pointer"
      >
        {selected ? selected : "Select Any"}
        <BiDownArrow />
      </div>
      {showList && (
        <div className="absolute top-10 border w-full px-3 py-1 rounded">
          <div className="flex items-center gap-3">
            <label className="text-gray-500">
              <FiSearch />
            </label>
            <input
              onChange={handleOnchange}
              className="outline-none"
              type="text"
              placeholder="Search Day"
            />
          </div>
          <hr />
          <ul>
            {tempOptions.length !== 0 ? (
              tempOptions.map((option, index) => (
                <li
                  className="cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSelection(option)}
                  key={index}
                >
                  {option}
                </li>
              ))
            ) : (
              <p>Nothing found</p>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
