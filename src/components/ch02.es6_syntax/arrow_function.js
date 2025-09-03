function App(){
    const function01 = function(){
        return 'hello~~~wolld';
    }
    const function02 = () =>{
        return '여러분~~~~안녕하세요';
    }
    const function03 = () => '어서오세요~~방가워요.';

console.log('\n매개 변수가 없는 함수 표현식');
console.log(function01());

console.log('\n매개 변수가 없는 화살표 함수');
console.log(function02());

console.log('\n중괄호와 return 문이 없는 화살표 함수');
console.log(function03());

const function04 = (name) =>{
    if (name === null){
        console.log('누구세요');
    }else{
    return `hello ~~${name}님`;
    }
}

const name='김철수';
console.log('\n매개 변수 1개 짜리');
console.log(function04(name));

console.log(function04());



    return(
        <div className = "App">
            화살표 함수
        </div>
    );
}

export default App;