import {React, useState, useEffect} from "react";
import PropTypes from "prop-types";
import store from "../store/index";

function InputBox({ menuList, setMenuList }) {
    const [menuName, setMenuName] = useState("");

    useEffect(() => {
      store.setLocalStorage(menuList);
    }, [menuList]);
    

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
        </div>
    );
}

InputBox.propTypes = {
    menuList: PropTypes.arrayOf.isRequired,
    setMenuList: PropTypes.func.isRequired
};

export default InputBox;
