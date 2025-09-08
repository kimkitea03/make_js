import { useState } from 'react';

function App() {
    // const [스테이트 이름, 셋터 메소드 이름]=useState('기본값');
    const [color, setcolor] = useState("red");
    const [name, setName] = useState("카푸치노");
    const [image, setimage] = useState("product_1739792780674.jpg");

    const ClickEvent = () => {
        console.log(`현재색상 : ${color}`);
        if (color === 'red') {
            setcolor('blue');
        } else {
            setcolor('red');
        }

    }

    const ClickEvent01 = () => {
        console.log(`현재이름 : ${name}`);
        if (image === 'product_1739792780674.jpg') {
            setimage('ciabatta_06.png');
            setName('치아바타');
        } else {
            setimage('product_1739792780674.jpg');
            setName('카푸치노');
        }
    }

    return (
        <div className="App">
            <h2>My favoriter color is {color}!</h2>

            {/* 외부 {} 기호는 jsx 표현식에 사용하는 중괄호 */}
            {/* 내부 {} 기호는 자바스크립트 객체 표현시 사용하는 중괄호 */}
            <span style={{ color: color, fontWeight: 'bold' }}>글자 색상</span>
            <br /> <br />
            <button type="button" onClick={ClickEvent}>
                클릭시 이미지 변경 및 red 색상으로 변경
            </button>

            <button type="button" onClick={ClickEvent01}>
                클릭시 이미지 {image} (으)로 변경
            </button>
            <br /><br />
            <h4>카푸치노</h4>
            <img src={`/images/${image}`} alt={name} width="210" height="210" />
        </div>
    );
}

export default App;