//프로그램 모드(mode)에 따라서 화면을 분기해주는 스위치 앱

import Display from './DIsplay';
import CreateContent from './CreateContent';
import UpdateContent from './UpdateContent';
import CreateCategy from './Createcategy';

function App({ mode, product, onSubmitInsert, onSubmitUpdate, onSubmitCategoryAdd, categories}) {
    console.log(`현재 모드 : ${mode}`);

    const onSwitchInsert = (formData) => {
        console.log(`등록 버튼 누름 (Switcher)`);
        onSubmitInsert(formData);//넘어온 폼 정보를 main 파일로 넘김
    }

    const onSwitchUpdate = (formData) => {
        console.log(`수정 버튼 누름 (Switcher)`);
        onSubmitUpdate(formData);//수정된 폼 정보를 main 파일로 넘김
    }

    const onSwitchCategy = (formData) => {
        console.log(`카테고리 추가 버튼 누름 (Switcher)`);
        onSubmitCategoryAdd(formData);//넘어온 폼 정보를 main 파일로 넘김
    }

    switch (mode) {
        case 'detail'://특정 상품 상세 보기
            return < Display product={product} />;

        case 'get_insert': // 상품 등록 화면으로 이동
            return < CreateContent onSubmitInsert={onSwitchInsert} categories={categories} />;

        case 'get_update': // 상품 수정 화면으로 이동
            //product는 수정하고자 하는 이전의 입력했던 데이터로써, 수정하고자 하는 항목입니다.
            return < UpdateContent product={product} onSubmitUpdate={onSwitchUpdate} categories={categories} />;

        case 'get_category_add': // 신규 카테고리 추가 화면으로 이동
            return < CreateCategy onSubmitCategoryAdd={onSwitchCategy} />;

        case 'read': // 읽기모드
            return <div />;

        default:
            return null;
    }


}

export default App;