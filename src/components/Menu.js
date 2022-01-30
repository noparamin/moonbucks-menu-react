import { React, useState } from "react";
import MenuTitle from "./MenuTitle";
import InputBox from "./InputBox";
import MenuList from "./MenuList";
import store from "../store/index";

function Menu({category, setCategory}) {
    const [menuList, setMenuList] = useState(store.getLocalStorage());
    

    return (
        <div className="menu-container">
            <main className="main">
                <MenuTitle menuList={menuList} category={category} />
                <InputBox menuList={menuList} setMenuList={setMenuList} category={category}/>
                <MenuList menuList={menuList} setMenuList={setMenuList} category={category}/>
            </main>
        </div>
    );
}

export default Menu;