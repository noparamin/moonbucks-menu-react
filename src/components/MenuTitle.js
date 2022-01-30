import { React } from "react";

function MenuTitle({ menuList, category }) {
    
    return (
        <div className="menu-title">
            <h2 className="category-name">{category.title} 메뉴 관리</h2>
            <span className="menu-count">총 {menuList[category.category].length}개</span>
        </div>
    );

}

export default MenuTitle;