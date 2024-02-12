import { useEffect, useState } from "react";


const User = () => {
  const [data,setData] = useState(null);
  useEffect(()=>{
    getData();
  },[])
  async function getData(){
    const data = await fetch("https://api.github.com/users/PiyushM109");
    const json = await data.json();
    console.log(json);
    setData(json);
  }
  if(data==null){
    return <div>
      loading..
    </div>
  }
  return (
    <div className="user-card">
        <img src={data.avatar_url} alt="Avatar" />
        <h2>Name : {data.name}</h2>
        <h3>Location : {data.location}</h3>
        <h4>Id : {data.login}</h4>

    </div>
  )
}

export default User;
