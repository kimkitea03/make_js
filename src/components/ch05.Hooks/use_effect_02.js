import { useEffect, useState } from "react";


function App() {
    const imageSize = 300;// 이미지 사이즈
    const imagePath = '/images/';//이미지 경로
    const [image, setImage] = useState(`${imagePath}/americano01.png`);//카운터 변수
    const [imageIdx, setImageIdx] = useState(0);//현제 선택된 이미지의 색인 번호

    const imageArray = [
        'americano01.png',
        'sponge_cake_01.png',
        'croissant_01.png',
        'ciabatta_06.png',
    ];

    const [count, setCount] = useState(0);//카운터 변수
    const [towTimes, setTowTimes] = useState(0);//카운터 2배수 변수
    const [another, setAnother] = useState(0);//카운터 3배수 변수

    const TodoSomthing = () => {
        console.log('카운트 변수 값 : ' + count);

        setTowTimes(() => 2 * count);//count의 2배수
        setAnother(() => 3 * count + 1);//count의 2배수

        console.log('현재 이미지의 색인 번호 : ' + imageIdx);

        const currentImage = `${imagePath}/${imageArray[imageIdx]}`;
        setImage(currentImage); //해당 이미지 변경
        setImageIdx(imageIdx + 1);//이미지 색인 번호 +1
        if (imageIdx === (imageArray.length - 1)) {
            setImageIdx(0);
        }

    }

    //최초 1번 화면 갱신(rendering)이 되고 나서, count가 바뀔 때마다 다시 그리기(rendering)를 해줍니다. 
    useEffect(TodoSomthing, [count]);




    return (
        <div className="App">
            <table style={{ border: '1px solid black' }}>
                <tbody>
                    <tr>
                        <td style={{ border: '1px solid black' }}>카운터</td>
                        <td style={{ border: '1px solid black' }}>{count}</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid black' }}>2 곱하기</td>
                        <td style={{ border: '1px solid black' }}>{towTimes}</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid black' }}>3 곱하기 더하기 1</td>
                        <td style={{ border: '1px solid black' }}>{another}</td>
                    </tr>
                </tbody>
            </table>
            <hr />
            {/* 화살표 함수를 직접 속성창에 작성할 수 있습니다.*/}
            <button onClick={() => { setCount((count) => count + 1) }}>
                &nbsp;카운터 값 1 더하기&nbsp;
            </button>
            <hr />
            <div>
                <img src={image} alt="대안 이미지" width={imageSize} height={imageSize} />
            </div>
        </div>
    );
}

export default App;