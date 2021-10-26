const AWS = require("aws-sdk"); 
var documentClient = new AWS.DynamoDB.DocumentClient({
    apiVersion: '2012-08-10'
});
const tableName = "Cards";

exports.handler = async (event) => {
    // 받은 JSON event를 문자열로 변환 및 출력
    console.log("Received: "+JSON.stringify(event,null,2)); // 가독성을 위해 2로 간격 설정
    let response="";
    try{
        var params = {
            TableName: tableName
        }
        const cards = await documentClient.scan(params).promise();

        response = {
            statusCode: 200,
            body: JSON.stringify(cards)
        }
    } catch (exception) {
        console.error(exception);
        response = {
            statusCode: 500,
            body: JSON.stringify({
                "Message: ": exception
            })
        };
    }
    return response;
};