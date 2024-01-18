import './css/app.css';
import Messenger from './Messenger';
import Conversations from './Conversations';
import { useEffect, useState } from 'react';
function App() {
  const [convId,setConvId] = useState();
  const [convObj,setConvObj] = useState([]);
  const [width,setWidth] = useState();
  useEffect(()=>{
    const w = window.innerWidth;
    setWidth(w);
  },[width]);
  return (
    <div className="App">
      {((convId === undefined && width < 769) || (width >= 769)) ? <Messenger setConvObj={setConvObj} setConvId={setConvId}/>:null}
      {convId !== undefined ? <Conversations setWidth={setWidth} convObj={convObj} convId={convId} setConvId={setConvId}/> : null}
    </div>
  )
}

export default App;

//Messenger component contains the list of client's

//Conversations will be filtered based on the convId