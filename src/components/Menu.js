import { React, useState } from "react";
import MenuTitle from "./MenuTitle";
import InputBox from "./InputBox";
import MenuList from "./MenuList";
import store from "../store/index";

function Menu() {
    const [menuList, setMenuList] = useState(store.getLocalStorage());

    return (
        <div className="menu-container">
            <main className="main">
                <MenuTitle menuList={menuList}/>
                <InputBox menuList={menuList} setMenuList={setMenuList}/>
                <MenuList menuList={menuList} setMenuList={setMenuList}/>
            </main>
        </div>
    );
}

export default Menu;