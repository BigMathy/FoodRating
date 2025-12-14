import { useState } from 'react'
import { MdDeleteForever } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import "../css/RestaurantList.css"

function getAverageRating(r) {
    const { food, location, price } = r.ratings || {};
    const ratings = [food, location, price].filter(n => typeof n === "number" && n > 0);
    if (ratings.length === 0) return "0";
    const avg = ratings.reduce((a, b) => a + b, 0) / ratings.length;
    return avg.toFixed(1);
}

export default function RestaurantList({ restaurant, updateRestaurant, resetRestaurant }) {
    const handleVisitedChange = () => {
        updateRestaurant(restaurant.id, {
            ...restaurant,
            visited: !restaurant.visited
        });
    };

    return (
        <div className='list-horizontal'>
            <div className='list-info'>
                <img src={restaurant.image} alt={restaurant.name} className='list-image' />
                <div className='list-head'>
                    <h2>
                        {restaurant.name}
                        {getAverageRating(restaurant) && (
                            <span className="average-rating"> ★ {getAverageRating(restaurant)}</span>
                        )}
                    </h2>
                    
                    <p className='location'><FaLocationDot />{restaurant.location}</p>
                    <div className="list-tags">
                        {restaurant.cuisine?.map((c, i) => (
                            <span className="tag" key={i}>{c}</span>
                        ))}
                        <span className="list-tag">{restaurant.price}</span>
                    </div>
                </div>

                <div className='button'>
                    <label className="list-visited">
                        <input
                            type="checkbox"
                            checked={restaurant.visited}
                            onChange={handleVisitedChange}
                        />
                    </label>

                    <div className="button-group">
                        <button
                            className="list-reset-button"
                            onClick={() => resetRestaurant(restaurant.id)}
                        >
                            <MdDeleteForever size="18px" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}