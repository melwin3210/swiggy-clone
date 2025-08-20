import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ResPage = () => {
  const params = useParams()
  useEffect(()=>{
    fetchResInfo()
  },[])
  const [categories, setCategories] = useState([])
  const fetchResInfo = () => {
    fetch(`
https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.94060&lng=76.26530&restaurantId=704922&catalog_qa=undefined&submitAction=ENTER`)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.categories)
      // console.log(data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards)
      const cards  = data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards
      const filteredCards = cards.filter((card) => (card.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory") || (card.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"))
      console.log(filteredCards);
      setCategories(filteredCards)
      
    })
  }
  return (
    <div>{
      categories.map((category) => (
        <div>
          <h1 className='font-bold'>{category?.card?.card?.title}</h1>
          <div>
            {category?.card?.card?.itemCards?.map((item) => (
              <div>
                <h1>{item?.card?.info?.name}</h1>
                <h1>{item?.card?.info?.price}</h1>
              </div>
            ))}
          </div>
        </div>
      ))}
      </div>
  )
}

export default ResPage