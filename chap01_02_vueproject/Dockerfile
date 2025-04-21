FROM node:lts-alpine

## curl(client url) 설치
RUN apk add --no-cache curl

WORKDIR /app
COPY . .
RUN npm install

## npm run dev --host 0.0.0.0
## "--": npm 명령어와 구분하기 위한 의미(구분자)
## -- host 0.0.0.0은 네트워크 인터페이스에서 접속을 허용하도록 설정(Docker 컨테이너 외부에서 접속 가능)

## 각 요소는 "쌍따옴표"로 작성할 것
## JSON arguments recommended for ENTRYPOINT/CMD to prevent unintended behavior related to OS signals
## (JSON arguments recommended for CMD to prevent unintended behavior related to OS signals)
## docker-language-server JSONArgsRecommended
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]