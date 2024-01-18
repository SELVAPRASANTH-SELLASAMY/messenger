import './css/user.css';
function User({setConvId,id,username,received,edited}){
    return(
        <div onClick = {()=>{setConvId(id);}} className={`user`}>
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