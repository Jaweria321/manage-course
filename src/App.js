import './App.css';
import AboutPage from './components/AboutPage';
import CourseListPage from './components/CourseListPage';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <p>Manage Course</p>
      <HomePage applyStyle={true}/>
      <AboutPage />
      <CourseListPage />
    </div>
  );
}

export default App;
