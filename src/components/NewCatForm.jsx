import { useState } from 'react';

const NewCatForm = ({ handleSubmit }) => {
  const [name, setName] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    const newCat = {
      name,
      personality: '',
      color: '',
      pet_count: 0
    };
    handleSubmit(newCat);
    setName('');
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <label htmlFor="name">Cat Name: </label>
      <input type="text" id="name" name="name" value={name} onChange={handleNameChange}/>
      <div>
        <input type="submit" value="Add a cat" />
      </div>
    </form>
  );
};

export default NewCatForm;