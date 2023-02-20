

import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import pagination from "../utils/pagination";
import Pages from "./Pages";
import { storeUserSessions } from "../../services/requests";


export default function SessionsPagination({sessions, count}) {
    const [load, setload] = useState(false)
    const [bookedSessions, setBookedSessions] = useState([])
    useEffect(()=>{

        let pages = pagination(sessions, 8)
        if(pages){
            setload(true)
            setBookedSessions(pages)
            storeUserSessions(pages)
        }
      
    },[])
    
  return (
    <>
{
    load && <Pages page={bookedSessions} count={count}/>
   
}
{

}



    </>


  );
}


