import React from "react";
import PropTypes from "prop-types";
import store from "../store/index";

function MenuItem({menuItem, menuList, setMenuList}) {
    const onClickSoldOut = () => {
        menuItem.soldOut = !menuItem.soldOut;
        const updateList = menuList.map((item) =>
            menuItem.name === item.name ? {name: item.name, soldOut: menuItem.soldOut} : {name: item.name, soldOut: item.soldOut} 
        );
        setMenuList(updateList);
        store.setLocalStorage(updateList);
    };

    const onClickUpdate = () => {
        const updatedMenu = prompt("메뉴를 수정하세요", menuItem.name);
        if(updatedMenu === menuItem.name || updatedMenu === "" || updatedMenu === null) {
            return;
        }

        const updateList = menuList.map((item) => 
            menuItem.name === item.name ? {name: updatedMenu, soldOut: item.soldOut} : {name: item.name, soldOut: item.soldOut}
        );
        setMenuList(updateList);
        store.setLocalStorage(updateList);
    };

    const onClickDelete = () => {
        if(window.confirm("메뉴를 삭제하시겠습니까?")) {
            const newList = menuList.filter(item => menuItem.name !== item.name);
            setMenuList(newList);
            store.setLocalStorage(newList);
        }
    };

    return (
        <li className="menu-item">
            <span className={"menu-item-name" + (menuItem.soldOut ? "-sold-out" : "")}>{menuItem.name}</span>
            <button className="item-sold-out-btn" onClick={onClickSoldOut}>품절</button>
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


