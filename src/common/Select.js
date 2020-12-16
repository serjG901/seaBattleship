import React from "react";

export function Select({
  labelText,
  defaultValue,
  selectArray,
  setValue,
  viewModificator,
}) {
  function handleChange(event) {
    setValue(Number(event.target.value));
  }

  return (
    <div>
      <label>{labelText}</label>
      <br />
      <select defaultValue={defaultValue} onChange={handleChange}>
        {selectArray.map((item) => {
          return (
            <option key={item} value={item}>
              {viewModificator(item)}
            </option>
          );
        })}
      </select>
    </div>
  );
}
