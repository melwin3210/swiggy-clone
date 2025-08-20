import React, { useEffect, useState } from 'react'
import ResCard from './ResCard'

const ResList = () => {
    const [resLists,setResLists] = useState([])
    useEffect(()=>{
        console.log("useEffect called")
        getResData()
    },[])
    const getResData = async () => {
        const data = await fetch("https://pastebin.com/raw/0QcdEDBL")
        const json = await data.json()
        const resLists = (json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setResLists(resLists)

    }
  return (
    <div className='flex flex-wrap justify-center'>
        {resLists.map((resInfo)=>{
            return(<ResCard resInfo={resInfo}/>)
        })}
    </div>
  )
}

export default ResList