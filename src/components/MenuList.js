import {React, useEffect} from "react";
import MenuItem from "./MenuItem";
import PropTypes from "prop-types";
import store from "../store/index";

function MenuList({ menuList, setMenuList }) {

    return (
        <div className="menu-list">
            <ul className="menu-list-ul">
                {
                    menuList && menuList.map((menuItem, index) => (
                        <MenuItem
                            key={index}
                            menuItem={menuItem}
                            menuList={menuList}
                            setMenuList={setMenuList}
                        />
                    ))
                }
            </ul>
        </div>
    );
}

MenuList.propTypes = {
    menuList: PropTypes.arrayOf.isRequired,
    setMenuList: PropTypes.func.isRequired
};

export default MenuList;