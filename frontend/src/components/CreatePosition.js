import { useState } from 'react';
import { createPosition } from '../services/api';

const CreatePosition = () => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPosition = { name };
    await createPosition(newPosition);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Position Name"
        required
      />
      <button type="submit">Create Position</button>
    </form>
  );
};

export default CreatePosition;
