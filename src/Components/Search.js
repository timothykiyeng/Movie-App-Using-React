import React from 'react'

function Search({search, onSearchChange}) {
  return (
    <div>

<header>
        
          <input
            className="search"
            type="text"
            value={search}
            placeholder="Search..."
            onChange={onSearchChange}
          />
       
        </header>
    </div>
  )
}

export default Search