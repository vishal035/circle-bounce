import logo from './logo.svg';

function App() {
  return (
    <div className=" relative flex flex-col items-center">
      <header className="relative flex flex-col top-10 items-center">
        <img src={logo} className="w-96 h-96" alt="logo" />
        <p className="font-normal text-3xl">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="font-medium text-xl mt-2"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
