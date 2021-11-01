// main으로 등록할 함수 (handler)
// node js는 기본적으로 매개변수 3개를 받는다.
exports.handler = async (event, context, callback) => {

    // 사용자의 요청은 기본적으로 event 변수에 담기는데,
    // 여기서 httpMethod를 보면, 사용자가 요청한 방식을 알 수 있다.
    const operation = event.httpMethod;
    switch (operation) {
        case 'GET':
            let data = {
                'id': 1,
                'name': '조상우'
            }
            // 웹사이트에 출력(반환)될 정보를 입력한다.
            callback (null, {
                'statusCode': 200,
                'headers': {},
                'body': JSON.stringify(data)
            })
            break
        case 'POST':
            callback (null, {
                'statusCode': 200
            })
    }
}