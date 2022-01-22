function Menu() {
    
    return (
        <div>
            <main>
                <div>
                    <h2>☕ 에스프레소 메뉴 관리</h2>
                    <span>총 0개</span>
                </div>
                
                <form>
                    <label hidden>메뉴 이름</label>
                    <input type="text" placeholder="메뉴 이름"></input>
                    <button>확인</button>
                </form>
                <ul></ul>
            </main>
        </div>
    );
}

export default Menu;