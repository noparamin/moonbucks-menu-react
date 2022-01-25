import React from "react";
import MenuItem from "./MenuItem";
function MenuList({ menuList, setMenuList }) {
    return (
        <div className="menu-list">
            <ul className="menu-list-ul">
                {
                    menuList && menuList.map((menuItem) => (
                        <MenuItem
                            key={menuItem.id}
                            menuItem={menuItem}
                            // menuList={menuList}
                            // setMenuList={setMenuList}
                        />
                    ))
                }
            </ul>
        </div>
    );
}

export default MenuList;