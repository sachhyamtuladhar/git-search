import React from 'react'
import Button from './Button';
import Input from './Input';

const Searchbar = ({
  searchInputRef,
  handleSearch,
  defaultValue
}) => {
  return (
    <div className="flex flex-wrap">
      <div className="flex-auto">
        <Input
          ref={searchInputRef}
          type="text"
          id="search"
          placeholder="Search repositories..."
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          defaultValue={defaultValue}
        />
      </div>
      <div className="flex-[1/4] flex items-center ">
        <Button onClick={handleSearch} name="Search" />
      </div>
    </div>
  )
}

export default Searchbar