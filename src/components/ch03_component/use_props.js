//ui 폴더에 있는 Top02이라는 앱을 나는 Top이라고 부를거야
import Top from './ui/Top02';
import Content from './ui/Content02';
import Bottom from './ui/Bottom02';


function App() {
    console.log('샘플');
    const breadList = ["소금빵", "단팥빵", "샌드위치", "도너스", "소보루빵"];
    const coffeeList = ["아메리카노", "카페라떼", "콜드브루", "바닐라라떼"];

    return (
        <div className="App">
            <Top greeting="포레스트 다방" wellcome="어서오세요. 우리매장에서 잼있는 시간 되시길 바랍니다." />

            {/* bread List를 props로 전달하기*/}
            {/* bread01 ="소금빵" bread="단팥빵".....*/}
            <Content type="ul" menus={breadList} />
            <hr />
            <Content type="ol" menus={coffeeList} />
            <Bottom goodbye ="안녕히 가세요" comment= "다음 번에 또 뵐수 있으면 좋겠습니다." />
        </div>
    );
}

export default App;