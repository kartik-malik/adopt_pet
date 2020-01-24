import React, {
  useState,
  SetStateAction,
  Dispatch,
  FunctionComponent
} from "react";
const useDropdown = (label: string, defaultState: any, options: string[]) => {
  const [state, setState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
  const Dropdown: FunctionComponent = () => (
    <label htmlFor={id}>
      {id}
      <select
        id={id}
        value={state}
        onChange={e => setState(e.target.value)}
        onBlur={e => setState(e.target.value)}
      >
        {options.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );
  return [state, Dropdown, setState] as [
    string,
    FunctionComponent,
    Dispatch<String>
  ];
};
export default useDropdown;
