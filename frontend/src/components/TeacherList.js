import { useEffect, useState } from 'react';
import { fetchTeachers } from '../services/api';

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadTeachers = async () => {
      const data = await fetchTeachers(page, 10);
      setTeachers(data);
    };
    loadTeachers();
  }, [page]);

  return (
    <div>
      <ul>
        {teachers.map((teacher) => (
          <li key={teacher.code}>{teacher.name}</li>
        ))}
      </ul>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Previous
      </button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};

export default TeacherList;
