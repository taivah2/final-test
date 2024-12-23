export const fetchTeachers = async (page, limit) => {
  const response = await fetch(`/api/teachers?page=${page}&limit=${limit}`);
  return await response.json();
};

export const createTeacher = async (teacher) => {
  const response = await fetch('/api/teachers', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(teacher),
  });
  return await response.json();
};

export const fetchPositions = async () => {
  const response = await fetch('/api/teacher-positions');
  return await response.json();
};

export const createPosition = async (position) => {
  const response = await fetch('/api/teacher-positions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(position),
  });
  return await response.json();
};

  