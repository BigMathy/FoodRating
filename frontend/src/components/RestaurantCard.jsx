import { useState } from 'react';
import '../css/RestaurantCard.css';
import { MdDeleteForever } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

function StarRating({ value, onChange }) {
    return (
        <div className="stars">
            {[1, 2, 3, 4, 5].map(num => (
                <span
                    key={num}
                    className={`star ${num <= value ? 'active' : ''}`}
                    onClick={() => onChange(num)}
                >
                    ★
                </span>
            ))}
        </div>
    );
}

function getAverageRating(r) {
    const { food, location, price } = r.ratings || {};
    const ratings = [food, location, price].filter(n => typeof n === "number" && n > 0);
    if (ratings.length === 0) return "0";
    const avg = ratings.reduce((a, b) => a + b, 0) / ratings.length;
    return avg.toFixed(1);
}

export default function RestaurantCard({ restaurant, updateRestaurant, resetRestaurant }) {
    const [comment, setComment] = useState(restaurant.comment);

    const handleRatingChange = (category, value) => {
        updateRestaurant(restaurant.id, {
            ...restaurant,
            ratings: {
                ...restaurant.ratings,
                [category]: value
            }
        });
    };

    const handleVisitedChange = () => {
        updateRestaurant(restaurant.id, {
            ...restaurant,
            visited: !restaurant.visited
        });
    };

    const handleCommentChange = (e) => {
        const newComment = e.target.value;
        setComment(newComment);
        updateRestaurant(restaurant.id, {
            ...restaurant,
            comment: newComment
        });
    };

    return (
        <div className="card-horizontal">
            <img src={restaurant.image} alt={restaurant.name} className="card-image" />
            <div className="card-info">
                <div className="card-header">
                    <div className="card-header-text">
                        {restaurant.name}
                        {getAverageRating(restaurant) && (
                            <span className="average-rating"> ★ {getAverageRating(restaurant)}</span>
                        )}
                    </div>
                    <div className="button-group">
                        <button
                            className="card-reset-button"
                            onClick={() => resetRestaurant(restaurant.id)}>
                            <MdDeleteForever size="18px" />
                        </button>
                    </div>
                </div>

                <div className="tags">
                    {restaurant.cuisine?.map((c, i) => (
                        <span className="tag" key={i}>{c}</span>
                    ))}
                    <span className="tag">{restaurant.price}</span>
                </div>

                <div className="location"><FaLocationDot className="location-icon" /> {restaurant.location}</div>

                <div className="ratings">
                    <div>
                        <div className="food">Food</div>
                        <StarRating value={restaurant.ratings.food} onChange={(val) => handleRatingChange('food', val)} />
                    </div>
                    <div>
                        <div className="price">Price</div>
                        <StarRating value={restaurant.ratings.price} onChange={(val) => handleRatingChange('price', val)} />
                    </div>
                    <div>
                        <div className="view">View</div>
                        <StarRating value={restaurant.ratings.location} onChange={(val) => handleRatingChange('location', val)} />
                    </div>
                </div>

                <div className="comment">
                    <div className="command-command">Command</div>
                    <textarea
                        value={comment}
                        placeholder="Share your experience..."
                        onChange={handleCommentChange}
                    />
                </div>

                <div className="card-footer">
                    <label className="visited">
                        <input
                            type="checkbox"
                            checked={restaurant.visited}
                            onChange={handleVisitedChange}
                        />
                        Visited
                    </label>
                </div>
            </div>
        </div>
    );
}
