import './css/user.css';
function User({setWindowWidth,setConvId,id,username,received,edited}){
    function setWidth(){
        const width = window.innerWidth;
        width <=769 ? setWindowWidth(width) : setWindowWidth(null);
    }
    return(
        <div onClick = {()=>{setConvId(id);setWidth()}} className={`user`}>
            <img src="" alt="" />
            <div className="info">
                <p className="username"><abbr title={username}>{username}</abbr></p>
                <p className="received">Received : <span>{received}</span></p>
                <p className="edited">Edited : <span>{edited}</span></p>
            </div>
        </div>
    )
}
export default User;