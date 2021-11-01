import json
import urllib.request
from bs4 import BeautifulSoup

url="https://www.google.com"
soup=BeautifulSoup(urllib.request.urlopen(url).read(), "html.parser", from_encoding='euc-kr')
tags=soup.find_all('a') # a 태그를 모두 찾기
response_list=list()
for item in tags:
    response_list.append(item.get_text())
print(response_list)

# def lambda_handler(event, context):
#     # TODO implement
#     return {
#         'statusCode': 200,
#         'body': json.dumps('Hello Lambda!')
#     }
# 잠시 패스
# 잠시 패스
