import './App.css';
import SideBar from './Layout/SideBar/SideBar';

const App = () => {
  return (
    <div className='App'>
      <SideBar />
      <main className='main-content'>
        <h1>WELCOME TO PHARMA ONE</h1>
      </main>
    </div>
  );
};

export default App;
