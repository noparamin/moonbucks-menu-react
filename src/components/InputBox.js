import {React, useState} from "react";

function InputBox({ menuList, setMenuList }) {
    const [menuName, setMenuName] = useState("");

    const onChangeInput = (e) => {
        setMenuName(e.target.value)
    };

    const onClickAdd = () => {
        if(menuName === "") {
            return;
        }
        setMenuList((currentArray) => [...currentArray, menuName]);
        setMenuName("");
    };
    return (
        <div className="menu-input-box">
            <label hidden className="label">메뉴 이름</label>
            <input type="text" placeholder="메뉴 이름" className="input" value={menuName} onChange={onChangeInput}></input>
            <button type="submit" className="menu-input-box-add-btn" onClick={onClickAdd}>확인</button>
        </div>
    );
}

export default InputBox;

//value={menuName} onChange={onChange}