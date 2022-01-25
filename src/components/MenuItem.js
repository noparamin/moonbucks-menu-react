import React from "react";

function MenuItem({menuItem}) {
    return (
        <li className="menu-item">
            <span className="menu-item-name">{menuItem}</span>
            <button className="item-sold-out-btn">품절</button>
            <button className="item-edit-btn">
                수정
            </button>
            <button className="item-remove-btn">삭제</button>
        </li>
    );
}

export default MenuItem;