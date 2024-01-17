import './css/conversations.css';
import emaiIcon from './assets/svg/mail.svg';
import phoneIcon from './assets/svg/phone.svg';
import gobackIcon from './assets/svg/back.svg';
import { useEffect, useRef, useState } from 'react';
function Conversations({windowWidth,setWindowWidth,convObj,convId}){
    const [convArray,setConvArray] = useState();
    const convRef = useRef();
    const backbutton = useRef();
    useEffect(()=>{
        const filteredObj = filterConv(convObj,convId);
        setConvArray(filteredObj);
        convRef && windowWidth <=769 ? convRef.current.classList.add('showConversation'):convRef.current.classList.remove('showConversation');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[convObj, convId,windowWidth])
    useEffect(()=>{
        backbutton.current.addEventListener('click',()=>{
            convRef && convRef.current.classList.remove('showConversation');
            setWindowWidth(null);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    function filterConv(obj,id){
        return obj.filter(item => item._id === id);
    }
    return(
        <div ref={convRef} className="Conversations">
            <div className="header">
                <div ref={backbutton} className="goback">
                    <img src={gobackIcon} alt="back" />
                </div>
                <div className="profile-picture">
                    <img src="" alt="" />
                </div>
                <h1 className='userName'>{convArray && convArray[0].Name}</h1>
                <div className="options">
                    <img src={emaiIcon} alt="email" />
                    <img src={phoneIcon} alt="phone" />
                </div>
            </div>
            {
                convArray && convArray.map((obj)=>(
                    <p key={obj._id} className="chat">
                        {obj.Message}
                    </p>
                ))
            }
        </div>
    );
}
export default Conversations;