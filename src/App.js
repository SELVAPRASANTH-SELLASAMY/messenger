import './css/app.css';
import Messenger from './Messenger';
import Conversations from './Conversations';
import { useState } from 'react';
function App() {
  const [convId,setConvId] = useState();
  const [convObj,setConvObj] = useState([]);
  const [windowWidth,setWindowWidth] = useState('');
  return (
    <div className="App">
      <Messenger windowWidth={windowWidth} setWindowWidth={setWindowWidth} setConvObj={setConvObj} setConvId={setConvId}/>
      {convId !== undefined ? <Conversations windowWidth={windowWidth} setWindowWidth={setWindowWidth} convObj={convObj} convId={convId}/> : null}
    </div>
  )
}

export default App;