function App() {
    // console.log('샘플');

    const memberList = [
        {
            id: "hong123",
            name: "홍길동",
            email: "hong123@example.com",
            joinDate: "2024-06-15",
            age: 10
        },
        {
            id: "kimc456",
            name: "김철수",
            email: "kimc456@example.com",
            joinDate: "2024-07-20",
            age: 15
        },
        {
            id: "park789",
            name: "박영희",
            email: "park789@example.com",
            joinDate: "2024-08-05",
            age: 20
        },
        {
            id: "lee101",
            name: "이민수",
            email: "lee101@example.com",
            joinDate: "2024-09-12",
            age: 25
        }
    ];


    //가격에 따른 코멘트 현황
    const getComment = (age) => {
        if (age < 20) return '미성년자';
        return '성인';
    }

    const memList = memberList.map((members) => (
        <tr key={members.id}>
            <td>{members.id}</td>
            <td>{members.name}</td>
            <td>{members.email}</td>
            <td>{members.joinDate}</td>
            <td>{members.age}살</td>
            <td>{getComment(members.age)}</td>

        </tr>
    ))

    return (
        <table border="1">
            <thead>
                <tr>
                    <th>아이디</th>
                    <th>이름</th>
                    <th>이메일</th>
                    <th>가입날짜</th>
                    <th>나이</th>
                    <th>미성년자 체크</th>
                </tr>
            </thead>
            <tbody>
                {memList}
            </tbody>
        </table>

    );
}

export default App;