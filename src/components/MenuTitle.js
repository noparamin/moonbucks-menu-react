function MenuTitle({ menuList }) {
    return (
        <div className="menu-title">
            <h2 className="category-name">☕ 에스프레소 메뉴 관리</h2>
            <span className="menu-count">총 {menuList.length}개</span>
        </div>
    );

}

export default MenuTitle;