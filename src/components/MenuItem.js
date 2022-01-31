import React from "react";
import PropTypes from "prop-types";
import store from "../store/index";

function MenuItem({menuItem, menuList, setMenuList, category}) {
    const onClickSoldOut = () => {
        menuItem.soldOut = !menuItem.soldOut;
        const currentCategory = category.category;
        const updateList = menuList[currentCategory].map((item) =>
            menuItem.name === item.name ? {name: item.name, soldOut: menuItem.soldOut} : {name: item.name, soldOut: item.soldOut} 
        );
        updateStorage(updateList, currentCategory);
    };

    const onClickUpdate = () => {
        const updatedMenu = prompt("메뉴를 수정하세요", menuItem.name);
        if(updatedMenu === menuItem.name || updatedMenu === "" || updatedMenu === null) {
            console.log(menuList[category.category]);
            return;
        }
        
        const currentCategory = category.category;
        const updateList = menuList[currentCategory].map((item) => 
            menuItem.name === item.name ? {name: updatedMenu, soldOut: item.soldOut} : {name: item.name, soldOut: item.soldOut}
        );
        updateStorage(updateList, currentCategory);
    };

    const onClickDelete = () => {
        if(window.confirm("메뉴를 삭제하시겠습니까?")) {
            const currentCategory = category.category;
            const updateList = menuList[currentCategory].filter(item => menuItem.name !== item.name);
            updateStorage(updateList, currentCategory);
        }
    };

    const updateStorage = (updateList, currentCategory) => {
        if(currentCategory === "espresso") {
            setMenuList((prevState) => ({
                ...prevState,
                espresso : updateList
            }));
        }
        else if(currentCategory === "frappuccino") {
            setMenuList((prevState) => ({
                ...prevState,
                frappuccino : updateList
            }));
        }
        else if(currentCategory === "blended") {
            setMenuList((prevState) => ({
                ...prevState,
                blended : updateList
            }));
        }
        else if(currentCategory === "teavana") {
            setMenuList((prevState) => ({
                ...prevState,
                teavana : updateList
            }));
        }
        else if(currentCategory === "dessert") {
            setMenuList((prevState) => ({
                ...prevState,
                dessert : updateList
            }));
        }
        store.setLocalStorage(menuList);
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
    menuItem: PropTypes.object.isRequired,
    menuList: PropTypes.object.isRequired,
    setMenuList: PropTypes.func.isRequired,
    category: PropTypes.object.isRequired
};

export default MenuItem;


