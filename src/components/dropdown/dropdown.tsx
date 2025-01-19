import React, { FC, ChangeEvent, useState, useEffect } from 'react';
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
  noSearchable?: boolean;
}

export const Dropdown: FC<DropdownProps> = ({
  options,
  selectedValue,
  onValueChange,
  placeholder = 'Select an option',
  label,
  noSearchable = false
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState(options);

  useEffect(() => {
    if (!noSearchable) {
      setFilteredOptions(
        options.filter(option =>
          option.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, options, noSearchable]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleOptionClick = (value: number) => {
    onValueChange(value);
    setIsOpen(false);
    setSearchTerm('');
  };

  const selectedOption = options.find(option => option.value === selectedValue);

  return (
    <div className={styles.dropdownContainer}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.customSelect}>
        <div 
          className={styles.selectedValue} 
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption ? selectedOption.name : placeholder}
        </div>
        
        {isOpen && (
          <div className={styles.optionsContainer}>
            {!noSearchable && (
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                className={styles.searchInput}
                placeholder="Search..."
                onClick={(e) => e.stopPropagation()}
              />
            )}
            <div className={styles.optionsList}>
              {filteredOptions.map((option) => (
                <div
                  key={option.value}
                  className={`${styles.option} ${
                    option.value === selectedValue ? styles.selected : ''
                  }`}
                  onClick={() => handleOptionClick(option.value)}
                >
                  {option.name}
                </div>
              ))}
              {filteredOptions.length === 0 && (
                <div className={styles.noResults}>No results found</div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
