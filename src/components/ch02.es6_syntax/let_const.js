function App() {
  let su = 10;
  su+=3 ; 
  console.log('su : '+su);

  let str = 'hohoho';
  str='hahaha';
  console.log('str : '+str);

  let arr = []; // empty arry
  arr= [10,20,30]; // 배열은 대괄호를 사용합니다.
  console.log('arr : ' + arr);

  let obj = {}; //객체는 중괄호를 사용
  //속성의 이름과 값은 콜론으로 구분합니다.
  obj = {name:'hong', password:'abc123',age:30};
  console.log('obj : ');
  console.log(obj);

  //중괄호를 block라고 부릅니다.
  //Scope : 접근할 수 있는 어떠한 영역을 의미합니다. (접근지정자 같은 느낌)
  if(true){
    let x1 = 10; // let 키워드는 block Scope내에서만 유효합니다.
    var x2 = 20;

  }
  //console.log('x1 : ' + x1);
  console.log('x2 : ' + x2);

  //const를 사용한 상수 (값을 바꿀 수 없는 변수 자바에서 파이널과 비슷)(Constant)
  // const su2 = 10;
  // su2 +=3;
  const su2 = 15;//반드시 선언과 동시에 할당해야 합니다.
  console.log('su2 : '+su);

  // const str2 = 'hohoho';
  // str2 +='hahaha';
  const str2 = 'hohoho hahaha';
  console.log('str2 : '+str2);

  // const arr2 = [];
  // arr2 = [40,50,60];
  const arr2 = [40,50,60];
  console.log('arr2 : '+arr);

  // const obj2 = {};
  // obj2= {name: park, password: hellow5678, gender:'남자'};
  const obj2 = {name: 'park', password: 'hellow5678', gender:'남자'};
  console.log('obj2 : ');
  console.log(obj2);

  return (
    <div className="App">
   ECMAScript
    </div>
  );
}

export default App;/*StrictMode 모드 개발 도중 발생할 수 있는 문제를 꼼꼼히 감지하기 위하여
rendering을 두번 실행해줍니다.
따라서, <React.StrictMode>를 삭제하도록 합니다.
*/

