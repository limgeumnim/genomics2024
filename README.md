# ROKIT Genomics WebSite
# 2024 renewal
임금님, 이예승, 송명훈

# Updated
1. 폰트 : 나눔고딕 -> 프리텐다드 변경중 https://github.com/orioncactus/pretendard
2. 

이전 README 내용
## Test Device
PC, iPad Pro 11inch, iPhone 12
## 호환 브라우저
Chrome, Safari, Edge
## cookie
언어 : 1시간 만료</br>
팝업 : 24시간 만료

## 배포방법
0. key를 통해 접속
ssh -i "rokit-genomics-com-key.pem" ec2-user@ec2-43-201-113-146.ap-northeast-2.compute.amazonaws.com

1. 아파치 파일로 이동 
cd /var/www/html/

2. git 패치
git fetch origin

3. git branch가 release인지 확인
git branch

4. git pull하면 바로 반영됨. (web이므로)
git pull
