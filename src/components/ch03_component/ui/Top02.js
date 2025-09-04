//넘겨진 프로터리는 () 내에 적어주면 됩니다.

function App({greeting, wellcome}) {
    // console.log('샘플');

    return (
        <header>
            <h1>{greeting}</h1>
            <p>{wellcome}</p>
        </header>
    );
}

export default App;