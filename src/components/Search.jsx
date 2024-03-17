import React from 'react'

const Search = ({handleInput,search}) => {
  return (
    <section className="searchbox-wrap">
        <input type="text" 
        placeholder='search new Movie'
        onChange={handleInput}
        onKeyPress={search}
        className="searchbox" />
    </section>

    )
}

export default Search