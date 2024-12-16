export default function Filter() {
    return (
        <div className="filter-content" id="filterContent">
            <div className="filter-section" id="filterSection">
                <div className="filter-table">
                    <div className="filter-row">
                        <div className="filter-item">
                            <label htmlFor="year" id="yearLabel">
                                Select Year
                            </label>
                            <select id="year">
                                <option>Year</option>
                                {/* <!-- Add year options here --> */}
                            </select>
                        </div>
                        <div className="filter-item">
                            <label htmlFor="make" id="makeLabel">
                                Select Make
                            </label>
                            <select id="make">
                                <option>Make</option>
                                {/* <!-- Add make options here --> */}
                            </select>
                        </div>
                        <div className="filter-item">
                            <label htmlFor="model" id="modelLabel">
                                Select Model
                            </label>
                            <select id="model">
                                <option>Model</option>
                                {/* <!-- Add model options here --> */}
                            </select>
                        </div>
                    </div>
                    <div className="filter-row">
                        <div className="filter-item">
                            <label htmlFor="style" id="styleLabel">
                                Body Style
                            </label>
                            <select id="style">
                                <option>Style</option>
                                {/* <!-- Add style options here --> */}
                            </select>
                        </div>
                        <div className="filter-item">
                            <label htmlFor="condition" id="conditionLabel">
                                Car Condition
                            </label>
                            <select id="condition">
                                <option>Condition</option>
                                {/* <!-- Add condition options here --> */}
                            </select>
                        </div>
                        <div className="filter-item">
                            <label htmlFor="price" id="priceLabel">
                                Select Price
                            </label>
                            <select id="price">
                                <option>Price</option>
                                {/* <!-- Add price options here --> */}
                            </select>
                        </div>
                    </div>
                </div>
                <button className="search-btn" id="searchButton">
                    Search
                </button>
            </div>
        </div>
    );
}
