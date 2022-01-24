import { React, useState } from "react";
import MenuTitle from "./MenuTitle";
import InputBox from "./InputBox";
import MenuList from "./MenuList";


function Menu() {
    // const [menuName, setMenuName] = useState("");
    // const [menuList, setMenuList] = useState([]);
    
    // const onChange = (event) => {
    //     setMenuName(event.target.value);
    // };
    
    // const onSubmit = (event) => {
    //     event.preventDefault();
    //     if(menuName === "") {
    //         return;
    //     }

    //     setMenuList((currentArray) => [...currentArray, menuName]);
    //     setMenuName("");
    // };

    // const onClickLiButton = (event) => {
    //     //const updatedMenuName = prompt("메뉴명을 수정하세요");
    //     console.log(event.target.classList);
    //     if(event.target.classList.contains("menu-edit-button")) {
    //     }
    // };

    // const deleteMenuName = (item) => {
    //     console.log(item);
    // };

    return (
        <div>
            <main>
                <MenuTitle/>
                <InputBox/>
                <MenuList/>
            </main>
        </div>
    );
}

// Nav
// MenuHeader
// inputBox
// itemList

// 메뉴이름 입력 후 엔터 또는 확인 버튼 클릭하면 메뉴 추가
// input은 빈 값으로 초기화
// input 빈 값인 상태에서 엔터 또는 확인 버튼 클릭하면 아무 일도 일어나지 않게 한다

// 수정 버튼 클릭하면 prompt 인터페이스 창이 나타난다
// 현재 메뉴의 값을 초기화한 상태로 인터페이스 창에 보여준다.
// 값을 수정하고 확인을 누르면 수정된 값으로 변경된다.
// 빈 값으로 수정하고 확인을 누르면 아무 일도 일어나지 않게 한다.

// 삭제 버튼을 누르면 confirm 인터페이스가 나타난다. 
// 확인 버튼을 누르면 삭제된다.

// 메뉴가 몇 개 있는지 보여준다.
// -메뉴 생성하면 업데이트
// -메뉴 삭제하면 업데이트
export default Menu;