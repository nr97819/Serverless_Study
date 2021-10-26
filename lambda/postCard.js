const AWS = require("aws-sdk"); 
var documentClient = new AWS.DynamoDB.DocumentClient({
    apiVersion: '2012-08-10'
});
const tableName = "Cards"

exports.handler = async (event) => {
    // 받은 JSON event를 문자열로 변환 및 출력
    console.log("Received: "+JSON.stringify(event,null,2)); // 가독성을 위해 2로 간격 설정
    let response=""
    try{
        // requestId를 찾아서 id변수에 저장
        const id = event.requestContext.requestId
        // 요청 body를 찾아서 body변수에 저장
        // -> JSON이지만 람다에 전달될 때는, string으로 전달되므로, 다시 JSON으로 변환
        const body = JSON.parse(event.body)

        var params = {
            TableName: tableName,
            Item: {
                id: id,
                title: body.title,
                category: body.category
             }
        }
        await documentClient.put(params).promise();

        response = {
            statusCode: 200,
            // 생성된 card의 id 값을 JSON 형식으로 반환
            body: JSON.stringify({"id":id})
        }
    } catch (exception) {
        console.error(exception);
        response = {
            statusCode: 500,
            body: JSON.stringify({
                "Message: ": exception
            })
        }
    }
    return response;
};