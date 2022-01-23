import { React, useState } from "react";

function Menu() {
    const [menuName, setMenuName] = useState("");
    const [menuList, setMenuList] = useState([]);
    
    const onChange = (event) => {
        setMenuName(event.target.value);
    };
    
    const onSubmit = (event) => {
        event.preventDefault();
        if(menuName === "") {
            return;
        }

        setMenuList((currentArray) => [...currentArray, menuName]);
        setMenuName("");
    };

    return (
        <div>
            <main>
                <div>
                    <h2>☕ 에스프레소 메뉴 관리</h2>
                    <span>총 0개</span>
                </div>
                
                <form onSubmit={onSubmit}> 
                    <label hidden>메뉴 이름</label>
                    <input type="text" placeholder="메뉴 이름" value={menuName} onChange={onChange}></input>
                    <button>확인</button>
                </form>
                <ul>{menuList.map((item, index) => (
                    <li key={index}>{item}</li>
                    ))}
                </ul>
            </main>
        </div>
    );
}
// 메뉴판 만들기

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