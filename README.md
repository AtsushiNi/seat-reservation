# 概要
座席予約サービス

# 技術スタック
- Spring Boot
- React
- React Leaflet

[GitHub: AtsushiNi/spring-react](https://github.com/AtsushiNi/spring-react)を使って、Springの中にReactをパッケージングした

# 起動方法
## 開発
1. Spring Boot の起動
```
mvn spring-boot:run
```

2. React Webサーバーの起動
```
cd src/main/frontend
./node/npm start
```

3. localhost:3000にアクセス

## 本番想定
1. Spring Boot サーバー起動(自動的にReactがビルド・Spring Boot上に配置される)
```
mvn spring-boot:run -Pprod
```

2. localhost:8080にアクセス

## 参考URL
- SpringとReact: [GitHub: AtsushiNi/spring-react](https://github.com/AtsushiNi/spring-react)