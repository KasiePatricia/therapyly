
import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { storeUserDetails } from "../../services/requests";
import { gettherapist } from "../../services/requests";
import Dashboardlayout from "../layout/Dashboardlayout";
import { getSessions } from "../../services/requests";
import Spinner from "../utils/Spinner";
import { useLocation } from "react-router-dom";
import SessionsPagination from "./SessionsPagination";
import { storeUserPage } from "../../services/requests";



export default React.memo( function BookedSessions  () {

  const [session, setSessions] = useState([]);
  const [spinner, setSpinner] = useState(true)
  const [page, setPage ] = useState(0)
  const [countPage, setCountPages] = useState(storeUserPage() ||0)
  const [check, setCheck] = useState(false)
  const[current, setCurrent] = useState()

//  on the first run
  useEffect(() => {
    let { token } = storeUserDetails();
    // set state here
    const details = async () => {
      const { sessions } = await getSessions(token);
      
      setSessions(sessions);
      setSpinner(false)
      setPage(sessions.length)
    
      
    };
    details();
    storeUserPage(countPage)
    
}, [countPage]);

const handleNext =(flag=false)=>{
 
  let pageValues  = page;
 let count= Math.ceil(pageValues / 8)
  if(flag){
    if(countPage !== count-1 ){
     setCountPages(prev=>prev+1)
    
     setCheck(false)
   }
   if(countPage === count - 1){
    setCheck(true)
   }
 
   
  }
  

  console.log(countPage, count)
}
const handlePrev =()=>{
 
  let pageValues  = page;
  let count = Math.ceil(pageValues / 8)
  if(  countPage !== 0){
    setCountPages(prev=>prev-1)
    
    setCheck(true)
  }
  if(countPage === 1){
    setCheck(false)
  }

 
  
}

if(!session){
  return <Dashboardlayout>
     <div className="flex justify-center items-center h-3/4  w-3/4 mx-auto my-8 bg-therapistCardzzBackground">
          <h2>No session booked</h2>
        </div>
  </Dashboardlayout>
}

  return (
    <Dashboardlayout>
      <div className="overflow-x-auto">
    { page / 8 > 7 &&   !spinner && <tr className="  flex mx-auto justify-end ">
     <button onClick={handlePrev} disabled={!check && check}   className=" mx-4 button py-2  bg-therapyDarkGreen w-20 text-white rounded-lg capitalize text-xs" >previous</button> 
    <button onClick={()=>handleNext(true)} disabled={check && !check} className=" mx-4 button  py-2  bg-therapyDarkGreen w-20 text-white rounded-lg capitalize text-xs"> Next</button>
   
</tr>}
      <table className="table w-full">
        <thead>
          <tr>
            <th>s/n  </th>
            <th>Therapist Name</th>
            <th>Meeting Type</th>
            <th>Date</th>
            <th>time</th>
            <th>Desc</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {!spinner && <SessionsPagination sessions={session} count={countPage}/>}
       
        </tbody>
     
      </table>
     
    </div>
    { spinner && <div className="border flex justify-center items-center h-4/5">

        <Spinner color="therapyDarkGreen" className="mx-auto "/>

        </div> }

        
  </Dashboardlayout>
  )
})
