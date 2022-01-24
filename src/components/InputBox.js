import React from "react";

function InputBox() {
    return (
        <div className="menu-input-box">
            <label hidden>메뉴 이름</label>
            <input type="text" placeholder="메뉴 이름" ></input>
            <button type="submit" className="menu-input-box-add-btn">확인</button>
        </div>
    );
}

export default InputBox;

//value={menuName} onChange={onChange}