import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import AddTask from './component/AddTask';
import BaseComponent from 'bootstrap/js/dist/base-component';
import Container from 'react-bootstrap/Container';
import TaskList from './component/TaskList';

function App() {
  return (
    <div>
      <Container>
      <Navbar />

      <AddTask />
      <TaskList />
      </Container>
    </div>
      );
}

export default App;
