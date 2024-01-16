import React from 'react';

function SelectionForm({ setPetType }) {
  const handleSelectionChange = (event) => {
    setPetType(event.target.value);
  };

  return (
    <div>
      <p className='select-prompt'> Select a Pet to get started</p>
      <form>
        <select onChange={handleSelectionChange} defaultValue="">
          <option value="" disabled></option>
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
        </select>
      </form>
    </div>
  );
}

export default SelectionForm;
