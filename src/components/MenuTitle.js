import { React } from "react";
import PropTypes from "prop-types";

function MenuTitle({ menuList, category }) {
    
    return (
        <div className="menu-title">
            <h2 className="category-name">{category.title} 메뉴 관리</h2>
            <span className="menu-count">총 {menuList[category.category].length}개</span>
        </div>
    );

}

MenuTitle.propTypes = {
    menuList: PropTypes.object.isRequired,
    category: PropTypes.object.isRequired
};

export default MenuTitle;