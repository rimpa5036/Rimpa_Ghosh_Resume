import './App.css';
import ApplicationForm from './components/ApplicationForm';
import AutoIncrementCounter from './components/AutoIncrementCounter';
import Counter from './components/Counter';
import RouterApplication from './components/RouterApplication';
import ReactPortfolio from './React-Porfolio/ReactPortfolio';

function App() {
  return (
    <div>

        {/*  Task 1: Create a counter in React js using class components? */}
        {/* <Counter></Counter> */}

        {/* Task 2: Create a auto-increment by using useState and useEffect hooks */}
        {/* <AutoIncrementCounter></AutoIncrementCounter> */}

        {/* Task 3: Create a Portfolio using React JS */}
        <ReactPortfolio />

        {/* Task 4: Create a complete validated form, handle the errors and display customize errors after submission of form. */}
        {/* <ApplicationForm></ApplicationForm> */}

        {/* Task 5: Create a single page application using router */}
        {/* <RouterApplication></RouterApplication> */}

       

    </div>
  );
}

export default App;
