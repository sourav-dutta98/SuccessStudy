import axios from 'axios'
import React, { useEffect,useState } from 'react'
import crd from './crd'


const FetchData = () => {
    const [infoData,setinfoData]=useState([])
    useEffect( ()=>{
 axios.get('https://jsonplaceholder.typicode.com/posts').then((data)=>{
    
    let info=[];
    for(let i=0;i<data.data.length;i++){
        let datainfo={id:data.data[i].id,
            title:data.data[i].title
        }
        info.push(datainfo)
    }
    setinfoData(info)
 })       

        
    },[])
    console.log(infoData)
  return (
    <div>
  {infoData.map((info) => (
    <>
    <div>
    <span>Id is : {info.id}</span>
</div>
  <div>
  <span>Title is : {info.title}</span>
</div>
</>
  ))}
</div>
  )
}

export default FetchData