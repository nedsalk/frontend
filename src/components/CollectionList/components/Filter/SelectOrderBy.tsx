import React from "react";
import Select, { ISelectOption } from "components/Select";

const options: ISelectOption[] = [
  {
    text: "Price Low to High",
    value: 1,
  },
  {
    text: "Price High to Low",
    value: 2,
  },
  {
    text: "Recently Listed",
    value: 3,
  },
  {
    text: "Highest Last Sale",
    value: 4,
  },
  {
    text: "Lowest Last Sale",
    value: 5,
  },
];

const SelectOrderBy = (props: any) => {
  const defaultOption = options.find((option) => option.value === props.value) ?? options[0];
  const [value, setValue] = React.useState(defaultOption);

  return (
    <div>
      <Select
        className="hidden lg:flex"
        options={options}
        value={value}
        onChange={(option) => {
          setValue(option);
          props?.onChange(option);
        }}
      />
    </div>
  );
};

export default SelectOrderBy;
