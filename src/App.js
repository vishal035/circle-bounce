import BackgroundCircles from './components/MainBackground/Circles/BackgroundCircles';
import Login from './components/Login/Login';

function App() {
  return (
    <>
      <BackgroundCircles />
      <div className="z-30 relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden  ">
        <Login />
      </div>
    </>
  );
}

export default App;
