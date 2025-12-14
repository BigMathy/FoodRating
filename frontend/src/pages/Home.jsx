import '../css/Home.css'
import React, { useState, useEffect } from 'react';
import { restaurantData } from '../restaurants/restaurants';
import RestaurantCard from '../components/RestaurantCard';
import Filter from '../components/Filter';
import StatisticsCard from '../components/StatisticCard';

import { FaList } from "react-icons/fa";
import { MdGridOn } from "react-icons/md";
import RestaurantList from '../components/RestaurantList';

function mergeWithSavedData(defaults, saved) {
    return defaults.map(r => {
        const savedMatch = saved.find(s => s.id === r.id);
        return savedMatch ? { ...r, ...savedMatch } : r;
    });
}

function Home({ searchTerm }) {
    const [layout, setLayout] = useState("grid");
    const [filter, setFilter] = useState("all");

    const [restaurants, setRestaurants] = useState(() => {
        const saved = localStorage.getItem("restaurants");
        if (saved) return mergeWithSavedData(restaurantData, JSON.parse(saved));
        return restaurantData;
    });

    // NEW: stable random order map for "all"
    const [randomOrder, setRandomOrder] = useState({});

    useEffect(() => {
        localStorage.setItem("restaurants", JSON.stringify(restaurants));
    }, [restaurants]);

    // NEW: (re)create random order ONLY when filter becomes "all"
    useEffect(() => {
        if (filter === "all") {
            const ids = restaurants.map(r => r.id);
            const shuffled = [...ids].sort(() => Math.random() - 0.5);
            const map = {};
            shuffled.forEach((id, idx) => { map[id] = idx; });
            setRandomOrder(map);
        }
        // deliberately not depending on `restaurants` so updates don't reshuffle
    }, [filter]);

    const updateRestaurant = (id, updatedData) => {
        setRestaurants(prev => prev.map(r => (r.id === id ? updatedData : r)));
    };

    const resetRestaurant = (id) => {
        const original = restaurantData.find(r => r.id === id);
        if (original) {
            setRestaurants(prev => prev.map(r => (r.id === id ? { ...original } : r)));
        }
    };

    function getAverageRating(r) {
        const { food, location, price } = r.ratings || {};
        const ratings = [food, location, price].filter(n => typeof n === "number" && n > 0);
        if (ratings.length === 0) return 0;
        return ratings.reduce((a, b) => a + b, 0) / ratings.length;
    }

    const filteredRestaurants = [...restaurants]
        .filter((r) => {
            if (filter === "visited") return r.visited;
            if (filter === "not-visited") return !r.visited;
            return true;
        })
        .filter((r) => {
            if (!searchTerm.trim()) return true;
            const lower = searchTerm.toLowerCase();
            const nameMatch = r.name.toLowerCase().includes(lower);
            const cuisineMatch = (r.cuisine || []).some(c => c.toLowerCase().includes(lower));
            const priceMatch = (r.price || "").toLowerCase().includes(lower);
            return nameMatch || cuisineMatch || priceMatch;
        })
        .sort((a, b) => {
            if (filter === "rating-high") return getAverageRating(b) - getAverageRating(a);
            if (filter === "rating-low") return getAverageRating(a) - getAverageRating(b);
            if (filter === "all") {
                const ai = randomOrder[a.id] ?? Number.MAX_SAFE_INTEGER;
                const bi = randomOrder[b.id] ?? Number.MAX_SAFE_INTEGER;
                return ai - bi; // stable random order while on "all"
            }
            return 0;
        });



    const total = restaurants.length;
    const visited = restaurants.filter(r => r.visited).length;
    const toVisit = total - visited;

    const averageRating = (() => {
        const allAverages = restaurants
            .map(r => {
                const ratings = Object.values(r.ratings || {});
                const valid = ratings.filter(n => typeof n === 'number' && n > 0);
                return valid.length ? valid.reduce((a, b) => a + b, 0) / valid.length : null;
            })
            .filter(n => n !== null);

        if (allAverages.length === 0) return "–";
        const totalAvg = allAverages.reduce((a, b) => a + b, 0) / allAverages.length;
        return totalAvg.toFixed(1);
    })();

    return (
        <>
            <div className='main-background'>
                <span className="float-item circle pink"></span>
                <span className="float-item circle blue"></span>
                <span className="float-item circle light-blue"></span>
                <span className="float-item circle yellow"></span>
            </div>
            <div className='main'>
                <div className='app-layout'>
                    <aside className='filter-sidebar'>
                        <Filter filter={filter} setFilter={setFilter} />
                    </aside>
                    <div className="app">
                        <h1>your food <span className="highlight">adventures</span></h1>
                        <p>all the places that made your taste buds happy (or sad)</p>
                        <div className='statics'>
                            <StatisticsCard value={total} label=" Total Restaurants" color1="#e171a5ff" color2="#e63c8c" />
                            <StatisticsCard value={visited} label="Visited" color1="#57a1f5ff" color2="#147df5" />
                            <StatisticsCard value={averageRating} label="Avg Rating" color1="#60c3f8ff" color2="#21b0fe" />
                            <StatisticsCard value={toVisit} label="To Visit" color1="#fed460ff" color2="#ffbc0a" />
                        </div>

                        <div className='layout-toggle-container'>
                            <div className="visible-count">
                                Showing {filteredRestaurants.length} {filteredRestaurants.length === 1 ? "restaurant" : "restaurants"}
                            </div>

                            <div className="layout-toggle">
                                <button
                                    className={layout === "grid" ? "active" : ""}
                                    onClick={() => setLayout("grid")}
                                >
                                    <MdGridOn size="16px"></MdGridOn>
                                </button>
                                <button
                                    className={layout === "list" ? "active" : ""}
                                    onClick={() => setLayout("list")}
                                >
                                    <FaList size="16px"></FaList>
                                </button>
                            </div>
                        </div>


                        <div className="grid">
                            {layout === "grid" ? (
                                filteredRestaurants.map((r) => (
                                    <RestaurantCard
                                        key={r.id}
                                        restaurant={r}
                                        updateRestaurant={updateRestaurant}
                                        resetRestaurant={resetRestaurant}
                                    />
                                ))
                            ) : (
                                <div className="list-view">
                                    {filteredRestaurants.map((r) => (
                                        <RestaurantList
                                            key={r.id}
                                            restaurant={r}
                                            updateRestaurant={updateRestaurant}
                                            resetRestaurant={resetRestaurant}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Home