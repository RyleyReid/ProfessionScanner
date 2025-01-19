import React, { FC, ChangeEvent } from 'react';
import styles from './dropdown.module.scss';

export interface DropdownOption {
  name: string;
  value: number;
}

interface DropdownProps {
  options: DropdownOption[];
  selectedValue: number;
  onValueChange: (value: number) => void;
  placeholder?: string;
  label?: string;
}

export const Dropdown: FC<DropdownProps> = ({
  options,
  selectedValue,
  onValueChange,
  placeholder = 'Select an option',
  label
}) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = Number(event.target.value);
    onValueChange(value);
  };

  return (
    <div className={styles.dropdownContainer}>
      {label && <label className={styles.label}>{label}</label>}
      <select
        className={styles.select}
        value={selectedValue}
        onChange={handleChange}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};
