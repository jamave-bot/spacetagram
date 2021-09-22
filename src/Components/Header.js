import React from 'react'
import '../CSS/Header.css'
import { Icon } from 'semantic-ui-react'

function Header() {
    return (
        <div className="header">
            <h1>Spacetagram</h1>
            <div className='searchBarDiv'>
                <Icon circular name='search' style={{"color": "white"}}/>
                <input type='text' />
            </div>
            <div></div>
        </div>
    )
}

export default Header
