import logo from './logo.svg';
import './App.css';

var studyMode = false;

function buttonBig(title, func) {
  const button = (
    <button className='buttonBig' onClick={func}>{title}</button>
  )
  
  return button;
}

function App() {
  //fix
  if(!studyMode) {
    return (
      buttonBig('Study Mode', study)
    );
  }
  return (
    buttonBig('Leave', exit)
  )
}

function study() {
  studyMode=true;
}

function exit() {
  studyMode=false;
}

export default App;
