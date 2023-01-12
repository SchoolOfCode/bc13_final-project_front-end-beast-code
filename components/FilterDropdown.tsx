import { useState } from "react"

export default function FilterDropdown(){

    const [toggle, setToggle] = useState(false)

    function setDropdown(){
        setToggle(!toggle);
    }

    return <div className="dropdown">
        <p onClick={setDropdown}>Category</p>
        {toggle ? <ul data-testid="unordered-list">
            <li data-testid="list-item">
                <p data-testid="option-text">Option 1</p>
                <input type="checkbox" data-testid="checkbox"></input>
            </li>
            <li>
                <p>Option 2</p>
                <input type="checkbox"></input>
            </li>
            <li>
                <p>Option 3</p>
                <input type="checkbox"></input>
            </li>
            <li>
                <p>Option 4</p>
                <input type="checkbox"></input>
            </li>
        </ul> : null}
    </div>
}