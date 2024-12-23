import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TeacherList from './components/TeacherList';
import CreateTeacher from './components/CreateTeacher';
import PositionList from './components/PositionList';
import CreatePosition from './components/CreatePosition';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TeacherList />} />
        <Route path="/create-teacher" element={<CreateTeacher />} />
        <Route path="/positions" element={<PositionList />} />
        <Route path="/create-position" element={<CreatePosition />} />
      </Routes>
    </Router>
  );
};

export default App;
