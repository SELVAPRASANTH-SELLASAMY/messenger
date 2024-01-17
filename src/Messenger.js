import { useEffect, useRef } from 'react';
import './css/messenger.css';
import User from './User';
import Axios from 'axios';
import { useState } from 'react';
function Messenger({windowWidth,setWindowWidth,setConvObj,setConvId}){
    const [Messages,setMessages] = useState([]);
    const MessengerRef = useRef();
    useEffect(()=>{
        Axios.get('https://zany-gray-cricket-cap.cyclic.app/get')
        .then((res)=>{
            setMessages(res.data);
            setConvObj(res.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(()=>{
        windowWidth !== null ? MessengerRef.current.classList.add('hide-messenger') : MessengerRef.current.classList.remove('hide-messenger');
    },[setConvId,windowWidth])
    return(
        <div ref={MessengerRef} className="Messenger">
            <h1>Messages</h1>
            <div className="client-list">
                {
                    Messages && Messages.map((obj)=>(
                        <User key={obj._id} setWindowWidth={setWindowWidth} setConvId={setConvId} id={obj._id} username={obj.Name} received={obj.createdAt} edited={obj.updatedAt}/>
                    ))
                }
            </div>
        </div>
    )
}
export default Messenger;