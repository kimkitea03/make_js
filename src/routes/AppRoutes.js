//react-router-dom은 라우팅을 위한 라이브러리 입니다.
//기본으로 설치가 안되어 있으니 차후 설치를 해주어야 합니다
//npm install react-router-dom 엔터
import { Routes, Route } from 'react-router-dom';

// ch02장 make_function
//imoirt 앱이름 from '전체경로/파일명' 
//기호 .는 현재 폴더, ..는 상위폴더, /는 폴더 구분자
import AppLetConst from './../components/ch02.es6_syntax/let_const';
import ApptemplateString from './../components/ch02.es6_syntax/template_string';
import AppSubjectList from './../components/ch02.es6_syntax/make_subject_list';
import AppMakeFunction from './../components/ch02.es6_syntax/make_function';
import Arrowunction from './../components/ch02.es6_syntax/arrow_function';
import ArrayMap from './../components/ch02.es6_syntax/array_map';
import AppSpereadOperator from './../components/ch02.es6_syntax/spread_operator';

// ch3장
import AppClassComponent from './../components/ch03_component/components01';
import AppFunctionComponent from './../components/ch03_component/components02';
import AppComponentSeparate from './../components/ch03_component/component_separate';
import FileSeparator from './../components/ch03_component/file_separator';
import AppUseProps from './../components/ch03_component/use_props';
import AppMakeTable01 from './../components/ch03_component/array_and_table_01';
import AppMakeTable02 from './../components/ch03_component/array_and_table_02';

//4장
import ClickEvent from './../components/ch04.event_handling/click_event';
import ChangeEvent from './../components/ch04.event_handling/change_event';
import MouseEvent from './../components/ch04.event_handling/mouse_event';
import KeyEvent from './../components/ch04.event_handling/Key_event';
import Cafe from './../components/ch04.event_handling/cafe';


function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<AppLetConst />} />
            <Route path='/let_const' element={<AppLetConst />} />
            <Route path='/template_string' element={<ApptemplateString />} />
            <Route path='/make_subject_list' element={<AppSubjectList />} />
            <Route path='/make_function' element={<AppMakeFunction />} />
            <Route path='/arrow_function' element={<Arrowunction />} />
            <Route path='/array_map' element={<ArrayMap />} />
            <Route path='/spread_operator' element={<AppSpereadOperator />} />

            <Route path='/components01' element={<AppClassComponent />} />
            <Route path='/components02' element={<AppFunctionComponent />} />
            <Route path='/component_separate' element={<AppComponentSeparate />} />
            <Route path='/file_separator' element={<FileSeparator />} />
            <Route path='/use_props' element={<AppUseProps />} />
            <Route path='/array_and_table_01' element={<AppMakeTable01 />} />
            <Route path='/array_and_table_02' element={<AppMakeTable02 />} />

            <Route path='/click_event' element={<ClickEvent />} />
            <Route path='/change_event' element={<ChangeEvent />} />
            <Route path='/mouse_event' element={<MouseEvent />} />
            <Route path='/Key_event' element={<KeyEvent />} />
            <Route path='/cafe' element={<Cafe />} />
        </Routes>
    );
};

export default AppRoutes;
