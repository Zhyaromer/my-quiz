import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuizApp from './QuizApp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuizApp />} />
      </Routes>
    </Router>
  );
}

export default App;
