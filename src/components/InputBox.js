import {React, useState, useEffect} from "react";
import PropTypes from "prop-types";
import store from "../store/index";

function InputBox({ menuList, setMenuList, category }) {
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
        
        const currentCategory = category.category;
        // setMenuList((currentArray) => [...currentArray, {name: menuName, soldOut: false}]);
        if(currentCategory === "espresso") {
            setMenuList((prevState) => ({
                ...prevState,
                espresso : [...prevState.espresso, {name: menuName, soldOut: false}]
            }));
        }
        else if(currentCategory === "frappuccino") {
            setMenuList((prevState) => ({
                ...prevState,
                frappuccino : [...prevState.frappuccino, {name: menuName, soldOut: false}]
            }));
        }
        else if(currentCategory === "blended") {
            setMenuList((prevState) => ({
                ...prevState,
                blended : [...prevState.blended, {name: menuName, soldOut: false}]
            }));
        }
        else if(currentCategory === "teavana") {
            setMenuList((prevState) => ({
                ...prevState,
                teavana : [...prevState.teavana, {name: menuName, soldOut: false}]
            }));
        }
        else if(currentCategory === "dessert") {
            setMenuList((prevState) => ({
                ...prevState,
                dessert : [...prevState.dessert, {name: menuName, soldOut: false}]
            }));
        }
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
