import Members from './ui/BoardList';
import Borders from './ui/MemberList';

function App() {
    console.log('샘플');

    return (
        <div className="App">
            <Borders />
            <hr />
            <Members />
        </div>
    );
}

export default App;