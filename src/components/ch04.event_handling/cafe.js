import React, { useState } from 'react';

// 이미지 매핑 (예시용 이미지 URL 사용, 실제 프로젝트에서는 로컬 경로나 정적 폴더 사용)
const imageMap = {
    '아메리카노': '/images/americano01_bigsize.png',
    '라떼': '/images/product_1739792780674.jpg',
    '와인': '/images/wine01.png',
    '우유': '/images/wine01.png',
    '치아바타': '/images/ciabatta_07.png',
    '바게트': '/images/french_baguette_01.png',
    '크로아상': '/images/croissant_03.png',
    '브리오쉬': '/images/brioche_04.png',
};

function Bread({ onItemClick }) {
    return (
        <ul>
            <li onClick={() => onItemClick('치아바타')}>치아바타</li>
            <li onClick={() => onItemClick('바게트')}>바게트</li>
            <li onClick={() => onItemClick('크로아상')}>크로아상</li>
            <li onClick={() => onItemClick('브리오쉬')}>브리오쉬</li>
        </ul>
    );
}

function Coffee({ onItemClick }) {
    return (
        <ol>
            <li onClick={() => onItemClick('아메리카노')}>아메리카노</li>
            <li onClick={() => onItemClick('라떼')}>라떼</li>
            <li onClick={() => onItemClick('와인')}>와인</li>
            <li onClick={() => onItemClick('우유')}>우유</li>
        </ol>
    );
}

function Bottom({ menu, onItemClick }) {
    if (menu === "1") {
        return <Bread onItemClick={onItemClick} />;
    } else if (menu === "2") {
        return <Coffee onItemClick={onItemClick} />;
    } else {
        return null;
    }
}

function App() {
    const [menu, setMenu] = useState("0");
    const [selectedItem, setSelectedItem] = useState(null);

    function handleMenuChange(e) {
        const selected = e.target.value;
        setMenu(selected);
        setSelectedItem(null); // 항목 변경 시 이전 이미지 제거
    }

    function handleItemClick(itemName) {
        setSelectedItem(itemName);
    }

    return (
        <div>
            <h2>클릭 이벤트 테스트</h2>
            <select id="menu" onChange={handleMenuChange}>
                <option value="-">항목을 선택해 주세요</option>
                <option value="1">빵</option>
                <option value="2">음료</option>
            </select>

            {/* 선택된 카테고리에 따라 목록 표시 */}
            <Bottom menu={menu} onItemClick={handleItemClick} />

            {/* 클릭된 항목의 이미지 표시 */}
            {selectedItem && (
                <div style={{ marginTop: '20px' }}>
                    <h3>{selectedItem} 이미지</h3>
                    <img
                        src={imageMap[selectedItem]}
                        alt={selectedItem}
                        style={{ width: '300px', borderRadius: '8px' }}
                    />
                </div>
            )}
        </div>
    );
}

export default App;
