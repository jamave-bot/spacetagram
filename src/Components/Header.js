import React from 'react';
import '../CSS/Header.css'
import { Icon } from 'semantic-ui-react'

function Header(props) {

    const API_KEY = process.env.REACT_APP_NASA_KEY 

    const handleChange = (e) =>{
        const startDate = e.target.value
        console.log(startDate)
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${startDate}`)
        .then(res=>res.json())
        .then(data=>{
          props.getFilteredPosts(data)
        })
    }

    return (
        <div className="header">
            <h1>Spacetagram</h1>
            <p>Enter a date to see its Astronomy Picture of the Day! </p>
            <div className='searchBarDiv'>
                <Icon circular name='search' />
                <input type='date' placeholder="YYYY-MM-DD" onChange={handleChange}/>
            </div>
            <div></div>
        </div>
    )
}

export default Header
