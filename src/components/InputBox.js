import {React, useState} from "react";

function InputBox({ menuList, setMenuList }) {
    const [menuName, setMenuName] = useState("");

    const onChangeInput = (e) => {
        setMenuName(e.target.value);
    };

    const addMenuName = (e) => {
        if(menuName === "") {
            return;
        }
        e.preventDefault();
        setMenuList((currentArray) => [...currentArray, menuName]);
        setMenuName("");
    };

    const onEnterCheck = (e) => {
        if(e.key === "Enter") {
            addMenuName(e);
        }
    };

    const onClickAdd = (e) => {
        addMenuName(e);
    };
    
    return (
        <div className="menu-input-box">
            <form>
                <label hidden className="label">메뉴 이름</label>
                <input type="text" placeholder="메뉴 이름" className="input" value={menuName} onChange={onChangeInput} onKeyPress={onEnterCheck}></input>
                <button type="submit" className="menu-input-box-add-btn" onClick={onClickAdd}>확인</button>
            </form>
            {/* <label hidden className="label">메뉴 이름</label>
            <input type="text" placeholder="메뉴 이름" className="input" value={menuName} onChange={onChangeInput}></input>
            <button type="submit" className="menu-input-box-add-btn" onClick={onClickAdd}>확인</button> */}
        </div>
    );
}

export default InputBox;

//value={menuName} onChange={onChange}