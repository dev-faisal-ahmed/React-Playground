import { FormEvent, useState } from "react";
import { Select } from "./select";

export function Form() {
  const options = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
  const [selected, setSelected] = useState<string>("");

  const handleSelection = (data: string) => {
    setSelected(data);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(selected);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-[300px] mx-auto mt-10 p-5">
      <Select options={options} selected={selected} handleSelect={handleSelection} />
      <button className="border mt-5">Submit</button>
    </form>
  );
}
