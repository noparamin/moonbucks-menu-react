import {React} from "react";
import MenuItem from "./MenuItem";
import PropTypes from "prop-types";

function MenuList({ menuList, setMenuList, category }) {

    return (
        <div className="menu-list">
            <ul className="menu-list-ul">
                {
                    menuList[category.category] && menuList[category.category].map((menuItem, index) => (
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
    menuList: PropTypes.object.isRequired,
    setMenuList: PropTypes.func.isRequired,
    category: PropTypes.object.isRequired
};

export default MenuList;