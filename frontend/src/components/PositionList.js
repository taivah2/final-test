import { useEffect, useState } from 'react';
import { fetchPositions } from '../services/api';

const PositionList = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const loadPositions = async () => {
      const data = await fetchPositions();
      setPositions(data);
    };
    loadPositions();
  }, []);

  return (
    <div>
      <ul>
        {positions.map((position) => (
          <li key={position.code}>{position.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PositionList;
