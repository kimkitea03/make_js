import { Dropdown, Form, ListGroup, Table } from "react-bootstrap";


function App({ contents, onClickToContent, categories, onOdrerByClick, orderInfo, onChangeCategory }) {

    // 테이블 특정 행(row)의 셀(cell) 1개를 클릭했습니다.
    const ClickItem = (event) => {
        //선택한 항목의 부모 요소의 id를 읽어서 할당합니다.
        const itemId = event.target.parentNode.id;
        console.log(`선택된 상품 id : ${itemId}`);

        onClickToContent(itemId); //상위 컴포넌트에 해당 id를 넘겨줍니다.
    }

    const ProductList = () => {
        return (
            <tbody>
                {contents.map((item, index) => {
                    const match = categories.find((cate) => cate.english === item.category);
                    return (
                        <tr id={item.id} key={index}>
                            <td align="center" onClick={ClickItem}>{item.name}</td>

                            {/* 숫자 형식으로 바꾼 다음, 3자리 마다 콤마 유형을 추가합니다. */}
                            <td align="right" onClick={ClickItem}>{Number(item.price).toLocaleString()} 원</td>

                            {/* match가 의미 있는 데이터면 "한글"을 아니면 "원래 값"을 표시함 */}
                            <td align="center" onClick={ClickItem}>
                                {match ? match.korean : item.category}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        );

    };

    //사용자가 드롭 다운 버튼을 클릭했습니다. 상위 컴포넌트에게 정렬 방식을 알려주는 함수
    const ClickButtonGroup = (event) => {
        event.preventDefault();//이벤트 전파 동작 방지

        const target_id = event.target.id;//이벤트 동작을 일으킨 요소의 id

        //정렬할 칼럼 정보와 관련있는 배열
        const orderColumnList = ['name', 'price', 'category'];

        //클릭한 항목의 id가 orderColumnList 배열에 포함이 되어 있으면 ture를 반환해 줍니다.
        const isColumn = orderColumnList.includes(target_id);

        //넘어온 onOdrerByClick 프롭스에 정렬할 컬럼, 정렬 방식을 각각 전송해 줍니다.
        if (isColumn) { //정렬할 칼럼 선택
            onOdrerByClick(target_id, orderInfo.ordering)
        } else {//정렬 방식 선택
            onOdrerByClick(orderInfo.isColumn, target_id)
        }

    }

    // 여러 곳에서 사용되는 문구는 상수(constant) 형태로 작성하여 재활용하면 편리합니다.
    const OrderColum = '정렬할 칼럼';
    const Ordertype = '정렬 방식';

    /* 필드 검색
    넘겨 받은 카테고리 정보를 이용하여 동적으로 콤보 박스에 들어갈 목록들을 생성합니다*/
    const comboCategory = categories.map((item, index) =>
        <option key={index} value={item.english}>{item.korean}</option>
    );

    //사용자가 콤보 박스의 특정 카테고리 항목을 change하였습니다.
    const ChangedComboItem = (event) => {
        const selectedCategory = event.target.value;

        //체인지와 관련된 프롭스에게 해당 카테고리 정보(영문이름)를 넘규 줍니다.
        onChangeCategory(selectedCategory);
    }

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        {/* width를 10% 설정한 이유는 Dropdown 항목들이 붙어 있는 것 처럼 설정하기 위하여 코딩함 */}
                        <td width="10%" valign='middle'>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    {OrderColum}
                                </Dropdown.Toggle>
                                {/* id 소석으로 어떠한 항목이 클릭되었는 지를 파악합니다.
                                일반적으로 id 속성의 값은 영문 칼럼으로 명하는 것이 코딩하기에 편리합니다. */}
                                <Dropdown.Menu>
                                    <Dropdown.Item id='name' onClick={ClickButtonGroup}>이름</Dropdown.Item>
                                    <Dropdown.Item id='price' onClick={ClickButtonGroup}>가격</Dropdown.Item>
                                    <Dropdown.Item id='category' onClick={ClickButtonGroup}>카테고리</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                        <td valign='middle'>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    {Ordertype}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {/* id 속성의 이름은 데이터 베이스 정렬과 관련된 용어를 사용했습니다. */}
                                    <Dropdown.Item id='asc' onClick={ClickButtonGroup}>오름차순</Dropdown.Item>
                                    <Dropdown.Item id='desc' onClick={ClickButtonGroup}>내림차순</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                        <td valign="middle">
                            <ListGroup horizontal>
                                <ListGroup.Item> {OrderColum} : {orderInfo.column}</ListGroup.Item>
                                <ListGroup.Item>{Ordertype} : {orderInfo.ordering}</ListGroup.Item>
                            </ListGroup>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div>
                <Form.Select name="category" onChange={ChangedComboItem}>
                    <option value="all">전체 보기</option>
                    {comboCategory}{/* 동적으로 생성된 콤보 아이템들 */}
                </Form.Select>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>가격</th>
                        <th>카테고리</th>
                    </tr>
                </thead>

                {/* 화살표 함수를 사용하여 상품 목록을 만들어 줍니다. */}
                {ProductList()}

            </Table>
        </>
    );
}

export default App;