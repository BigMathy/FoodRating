import '../css/Filter.css'

// src/components/Filter.jsx
function Filter({ filter, setFilter }) {
    console.log("Filter component: setFilter =", setFilter);
    const options = [
        { value: "all", label: "All Restaurants" },
        { value: "visited", label: "Visited" },
        { value: "not-visited", label: "Not Visited" },
        { value: "rating-high", label: "Rating: High to Low" },
        { value: "rating-low", label: "Rating: Low to High" },
    ];

    return (
        <div className="filter-controls">
            <h3>Filter</h3>
            <div className="filter-buttons">
                {options.map((opt) => (
                    <button
                        key={opt.value}
                        className={`filter-button ${filter === opt.value ? "active" : ""}`}
                        onClick={() => setFilter(opt.value)}
                    >
                        {opt.label}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Filter;

