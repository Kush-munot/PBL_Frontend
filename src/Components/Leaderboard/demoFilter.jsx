import React, { useState, useEffect } from 'react';
import axios from 'axios';



const DemoFilter = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(props.link)
            .then((res) => {
                setData(res.data.data);
            })
            .catch((err) => console.log(err));
    }, [props.link]); // Make sure to use props.link as the dependency here

    

    const [collegeName, setCollegeName] = useState('');
    const [searchResults, setSearchResults] = useState([]);


    const handleSearch = (e) => {
        e.preventDefault();

        // Filter the data based on the entered college name
        const filteredResults = data.filter((user) => user.college_name === collegeName);

        // Update the searchResults state with the filtered data
        setSearchResults(filteredResults);
    };

    const handleInputChange = (e) => {
        setCollegeName(e.target.value);
    };
    return (
        <div>
            {/* <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleInputChange}
            /> */}

            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Enter college name"
                    value={collegeName}
                    onChange={handleInputChange}
                />
                <button type="submit">Search</button>
            </form>

            {searchResults.map((record, index) => (
                <div key={index}>{index + 1}{record.name}{record.college_name}</div>
            ))}
        </div>
    )
}

export default DemoFilter