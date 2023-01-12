import React from 'react'

function ResultsSearchSection() {
  return (
    <div>
        <input type="text" placeholder='Search within results'/>
        <input type="checkbox" className="map-view-toggle"/>
        <label htmlFor='map-view-toggle'>Map view toggle</label>
        <>
        <div className="price-dropdown">
            <p>Price</p>
            <input type="checkbox" id="price" name="cheap" value="1"/>
            <label htmlFor="cheap">Cheap</label><br></br>
            <input type="checkbox" id="price" name="midrange" value="2"/>
            <label htmlFor="midrange">Midrange</label><br></br>
            <input type="checkbox" id="price" name="expensive" value="3"/>
            <label htmlFor="expensive">Expensive</label><br></br>
        </div>
        <div className="rating-dropdown">
            <p>Rating</p>
            <input type="checkbox" id="rating" name="rating-1" value="1"/>
            <label htmlFor="rating-1">1</label><br></br>
            <input type="checkbox" id="rating" name="rating-2" value="2"/>
            <label htmlFor="rating-2">2</label><br></br>
            <input type="checkbox" id="rating" name="rating-3" value="3"/>
            <label htmlFor="rating-3">3</label><br></br>
            <input type="checkbox" id="rating" name="rating=4" value="4"/>
            <label htmlFor="rating-4">4</label><br></br>
            <input type="checkbox" id="rating" name="rating-5" value="5"/>
            <label htmlFor="rating-5">5</label><br></br>
        </div>
        <div className="food-dropdown"></div>
        <div className="occasion-dropdown">
            <p>Occasions</p>
            <input type="checkbox" id="occasion" name="occasion-client" value="client"/>
            <label htmlFor="occasion-client">Client</label><br></br>
            <input type="checkbox" id="occasion" name="occasion-date" value="date"/>
            <label htmlFor="occasion-date">Date</label><br></br>
            <input type="checkbox" id="occasion" name="occasion-family" value="family"/>
            <label htmlFor="occasion-family">Family</label><br></br>
            <input type="checkbox" id="occasion" name="occasion-friends" value="friends"/>
            <label htmlFor="occasion-friends">Friends</label><br></br>
            <input type="checkbox" id="occasion" name="occasion-large-group" value="large-group"/>
            <label htmlFor="occasion-large-group">Large group</label><br></br>
            <input type="checkbox" id="occasion" name="occasion-stag-hen" value="stag-hen"/>
            <label htmlFor="occasion-stag-hen">Stag or hen party</label><br></br>
        </div>
        </>
        <button>Reset</button>
        <button>More filters</button>
    </div>
  )
}

export default ResultsSearchSection
// clients date family friends large group stag/henparty