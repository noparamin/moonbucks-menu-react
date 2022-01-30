function Nav({category, setCategory}) {

    const onClickCategory = (e) => {
        if(e.target.innerHTML === "☕ 에스프레소") {
            setCategory({category: "espresso", title: "☕ 에스프레소"});
        }
        else if(e.target.innerHTML === "🥤 프라푸치노") {
            setCategory({category: "frappuccino", title: "🥤 프라푸치노"});
        }
        else if(e.target.innerHTML === "🍹 블렌디드") {
            setCategory({category: "blended", title: "🍹 블렌디드"});
        }
        else if(e.target.innerHTML === "🫖 티바나") {
            setCategory({category: "teavana", title: "🫖 티바나"});
        }
        else if(e.target.innerHTML === "🍰 디저트") {
            setCategory({category: "dessert", title: "🍰 디저트"});
        }
    };
    
    return (
        <div className="nav">
            <header className="header">
                <h1>🌝 문벅스 메뉴 관리</h1>
            </header>
            <nav>
                <button className="nav-btn" onClick={onClickCategory}>☕ 에스프레소</button>
                <button className="nav-btn" onClick={onClickCategory}>🥤 프라푸치노</button>
                <button className="nav-btn" onClick={onClickCategory}>🍹 블렌디드</button>
                <button className="nav-btn" onClick={onClickCategory}>🫖 티바나</button>
                <button className="nav-btn" onClick={onClickCategory}>🍰 디저트</button>
            </nav>
        </div>
    );
}

export default Nav;