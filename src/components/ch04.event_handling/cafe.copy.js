import React, { useState } from 'react';

function App() {
    const [menu, setMenu] = useState("0");
     const [selectedItem, setSelectedItem] = useState(null);

    function handleItemClick(e) {

        const selected = e.target.value;
        if (selected === "-") {
            alert(e.target.id); // 클릭된 <li>의 텍스트를 alert로 표시
        } else {
            setMenu(selected);
        }
    }

    function Bread() {
        return (<ul>
            <li>빵 항목</li>
            <li onClick={() => onItemClick('치아바타')}>치아바타</li>
            <li onClick={() => onItemClick('바게트')}>바게트</li>
            <li onClick={() => onItemClick('크로아상')}>크로아상</li>
            <li onClick={() => onItemClick('브리오쉬')}>브리오쉬</li>
        </ul>
        );

    }

    function Coffee() {
        return (
            <ol>
                <li>음료 항목</li>
                <li onClick={() => onItemClick('아메리카노')}>아메리카노</li>
                <li onClick={() => onItemClick('라떼')}>라떼</li>
                <li onClick={() => onItemClick('와인')}>와인</li>
                <li onClick={() => onItemClick('우유')}>우유</li>
            </ol>
        );

    }

    function Bottom({ menu }) {
        console.log(menu);
        if (menu === "1") {
            return <Bread onItemClick={onItemClick} />;
        } else if (menu === "2") {
            return <Coffee onItemClick={onItemClick} />;
        } else {
            return null;
        }


    }

    return (
        <div>
            <h2>클릭 이벤트 테스트</h2>
            <select id="menu" onChange={handleItemClick}>
                <option value="-">항목을 선택해 주세요</option>
                <option value="1">빵</option>
                <option value="2">음료</option>

            </select>
            <Bottom menu={menu} onItemClick={handleItemClick} />


        </div>
    );
}

export default App;