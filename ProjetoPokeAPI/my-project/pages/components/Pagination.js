import React from "react";

const Pagination = (props) =>{
    const {page, total, onLeftClick, onRightClick} = props;
    return(
        <div className="flex flex-row items-center">
            <button onClick={onLeftClick}> ◀ </button>
            <div>{page} de {total}</div>
            <button onClick={onRightClick}> ▶ </button>
        </div>
    )
}

export default Pagination