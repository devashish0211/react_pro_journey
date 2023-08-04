import './App.css';
import Counter from './components/Counter';
// import GreetPerson from './components/Greet';
import Message from './components/Message';
// import Hello from './components/Hello';
// import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      {/* <GreetPerson name="Dev" heroName="IronMan" >
        <p>This is a children component</p>
      </GreetPerson>
      <GreetPerson name="Shub" heroName="Batman" >
        <button>Click me</button>
      </GreetPerson>
      <GreetPerson name="Gaurav" heroName="Hulk" />
      <Welcome name="Dev" heroName="IronMan" />
      <Welcome name="Shub" heroName="Batman" />
      <Welcome name="Gaurav" heroName="Hulk" /> */}
      {/* <Hello /> */}
      <Message />
      <Counter />
    </div>
  );
}

export default App;
