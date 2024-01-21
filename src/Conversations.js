import './css/conversations.css';
import emaiIcon from './assets/svg/mail.svg';
import phoneIcon from './assets/svg/phone.svg';
import gobackIcon from './assets/svg/back.svg';
import sendButtonIcon from './assets/svg/send.svg';
import { useEffect, useRef, useState } from 'react';
function Conversations({setWidth,convObj,convId,setConvId}){
    const [convArray,setConvArray] = useState();
    const convRef = useRef();
    const backbutton = useRef();
    const ConvClass = document.querySelector('.Conversations');
    useEffect(()=>{
        const filteredObj = filterConv(convObj,convId);
        setConvArray(filteredObj);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[convObj, convId])

    function addPadding(){
        ConvClass.style.paddingBottom = '10rem';
    }
    function removePadding(){
        ConvClass.style.paddingBottom = '3.5rem';
    }

    function filterConv(obj,id){
        return obj.filter(item => item._id === id);
    }
    return(
        <div ref={convRef} className="Conversations">
            <div className="header">
                <div onClick={()=>{setWidth(800);setConvId(undefined)}} ref={backbutton} className="goback">
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
            <div className="reply">
                <textarea onFocus={()=>addPadding()} onBlur={()=>removePadding()} name="reply-text-field" id="reply-text-field" placeholder='Type a message' cols="30" rows="10"></textarea>
                <div className="send">
                    <img src={sendButtonIcon} alt="Send" />
                </div>
            </div>
        </div>
    );
}
export default Conversations;