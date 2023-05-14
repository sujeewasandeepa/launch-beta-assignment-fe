import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "../assets/DropDown.css"

function DropDown({ items, dummyPlaceHolder, functions }) {
    // items should be an array
    
    const [active, setActive] = useState("");
    const [placeholder, setPlaceholder] = useState(dummyPlaceHolder);

    const handleClick = (e) => {
        e.preventDefault();
        setActive("is-active");
        if (active === "is-active") {
            setActive("");
        }
    }

    const handleSelect = (e) => {
        e.preventDefault();
        functions(e.target.innerText);
        setPlaceholder(e.target.innerText);
        handleClick(e);
    }

    return (
        <>
            <div className={`dropdown ${active}`}>
                <div className="dropdown-trigger">
                    <button onClick={handleClick} id="dropdown-wrap" className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                        <span>{placeholder}</span>
                        <span className="icon is-small">
                            <FontAwesomeIcon icon={faAngleDown} />
                        </span>
                    </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                        {
                            items?.map((item, index) => {
                                return (
                                    <a onClick={handleSelect} href="#" className="dropdown-item" key={index}>{item}</a>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );

}
export default DropDown;