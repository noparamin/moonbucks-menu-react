import React from "react";
import MenuItem from "./MenuItem";
function MenuList() {
    return (
        <div>
            <ul>
                <MenuItem />
            </ul>
        </div>
    );
}

{/* <ul onClick={onClickLiButton}>
                    {menuList.map((item, index) => (
                    <li key={index}>
                        <span>{item}</span>
                        <button className="sold-out-button">품절</button>
                        <button className="menu-edit-button">수정</button>
                        <button onClick={deleteMenuName(item)}>삭제</button>
                    </li>
                    ))}
                </ul> */}

export default MenuList;