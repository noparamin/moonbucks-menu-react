import {React} from "react";
import MenuItem from "./MenuItem";
import PropTypes from "prop-types";

function MenuList({ menuList, setMenuList, category }) {

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
                            category={category}
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