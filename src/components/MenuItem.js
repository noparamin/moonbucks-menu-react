import React from "react";

function MenuItem() {
    return (
        <li>
            <span>Item</span>
            <button>품절</button>
            <button>
                수정
            </button>
            <button>삭제</button>
        </li>
    );
}

export default MenuItem;