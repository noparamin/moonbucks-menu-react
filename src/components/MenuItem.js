import React from "react";
import PropTypes from "prop-types";

function MenuItem({menuItem, menuList, setMenuList}) {

    const onClickUpdate = () => {
        const updatedMenu = prompt("메뉴를 수정하세요", menuItem);
        if(updatedMenu === menuItem || updatedMenu === "" || updatedMenu === null) {
            return;
        }

        const updateList = menuList.map((item) => 
            menuItem === item ? updatedMenu : item
        );
        setMenuList(updateList);
    };

    const onClickDelete = () => {
        if(window.confirm("메뉴를 삭제하시겠습니까?")) {
            const newList = menuList.filter(item => menuItem !== item);
            setMenuList(newList);
        }
    };

    return (
        <li className="menu-item">
            <span className="menu-item-name">{menuItem}</span>
            <button className="item-sold-out-btn">품절</button>
            <button onClick={onClickUpdate} className="item-edit-btn">
                수정
            </button>
            <button onClick={onClickDelete} className="item-remove-btn">삭제</button>
        </li>
    );
}

MenuItem.propTypes = {
    menuItem: PropTypes.string.isRequired,
    menuList: PropTypes.arrayOf.isRequired,
    setMenuList: PropTypes.func.isRequired
};

export default MenuItem;
