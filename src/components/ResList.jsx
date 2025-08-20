import React, { useEffect, useState } from 'react'
import ResCard from './ResCard'

const ResList = () => {
    const [resLists,setResLists] = useState([])
    const [filteredResLists,setFilteredResLists] = useState([])
    const [topRated,setTopRated] = useState(false)
    const [searchInput, setSearchInput]= useState("")
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
        setFilteredResLists(resLists)

    }
    useEffect(()=>{
        
            topRatedRes(topRated)
        
    },[topRated])
    const topRatedRes = (e) => {
        if(!e){
            setFilteredResLists(resLists)
            return
        }
        const filteredList = resLists.filter((resInfo)=>{
            return resInfo.info.avgRating>4.5
        })
        setFilteredResLists(filteredList)
    }
    const filterSearchList = () => {
        const filteredList = resLists.filter((resInfo)=>{
            return resInfo.info.name.toLowerCase().includes(searchInput.toLowerCase())
        })
        setFilteredResLists(filteredList)
    }
  return (
    <>
    <div>
        <input className='border-1 border-grey-100' type="text" value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} />
        <button className='bg-gray-100 cursor-pointer ml-2' onClick={filterSearchList}>Search</button>
        <button className='bg-gray-100 cursor-pointer ml-2' onClick={()=>{
            setFilteredResLists(resLists)
            setSearchInput("")
        }}>Clear</button>
        <input type="checkbox" aria-label='Top Rated' value={topRated} onChange={(e)=>setTopRated(prev => !prev)} />
        <label htmlFor="Top Rated">Top Rated</label>
    </div>
    <div className='flex flex-wrap justify-center'>
        {filteredResLists.map((resInfo)=>{
            return(<ResCard resInfo={resInfo}/>)
        })}
    </div>
    </>
  )
}

export default ResList