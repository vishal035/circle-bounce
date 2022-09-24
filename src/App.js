import logo from './logo.svg';
import BackgroundCircles from './components/MainBackground/Circles/BackgroundCircles';

function App() {
  return (
    <>
      <BackgroundCircles />
      <div className="z-30 relative flex flex-col items-center w-screen h-screen overflow-hidden  ">
        <header className="relative flex flex-col top-10 items-center">
          <img src={logo} className="w-96 h-96 animate-spin-slow" alt="logo" />
          <p className="font-normal text-3xl">
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="font-medium text-xl mt-2 text-blue-600"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
