# ポートフォリオは焼肉鴨緑江の予約管理アプリです

[鴨緑江予約管理アプリ](https://booking.yunonn.net)

# サービスコンセプト
簡単操作でいつでもどこでも予約の管理ができます。

# 背景
父が経営する個人型飲食店の50代と30代の従業員と自分が予約のダブルブッキングと記載ミスをしてしまう課題を解決するために開発しました。来店された際、スムーズに席まで案内することで顧客満足度アップを図ります。このアプリでは入力を最初の一度と編集する際だけにし、それ以外はボタンで操作できるようにすることでミスを減らします。

# 使用技術
|カテゴリー|技術名|
|---|---|
|フロントエンド|React, ChakraUI|
|バックエンド|Rails|
|インフラ|AWS(EC2, RDS, Route53, ACM, ALB, VPC, IAM)|
|データベース|PostgreSQL|
|モニタリング|Sentry, Route 53 Health Check|
|CI/CD|GitHub Actions|
|その他| Git, GitHub, Notion, draw.io, Figma|

# 技術の選定理由
アプレンティスで学んだ技術を中心に選定しました。よって全体として学習コストを低く抑えることができました。
主要な技術の選定理由は以下のとおりです。

- React: 想定ユーザーに50代が含まれていて、ITリテラシーがあまり高くないことが予想されました。よってUI,UXに優れたSPAを開発しないと使ってもらえないと考えました。具体的には入力操作を最小限にしボタンで操作できるようにしました。Reactならstateフックを利用することでDOM操作が簡単に行えて効率よく開発ができました。

- Rails: このプロジェクトではAPIとしてのみRailsを使用しましたが、アクティブレコードという強力な機能を利用することで、SQLを意識せずにデータベース操作を行うことができました。

- AWS: 信頼性の高いクラウドインフラとして、AWSの各サービスを利用することで可用性とセキュリティを確保しました。

アプリイメージ
![アプリ画面イメージ](./documents/app_describe.png)

システム構成図(インフラ)
![システム構成図インフラ](./documents/%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E6%A7%8B%E6%88%90%E5%9B%B3.drawio.png)

ワイヤーフレーム図
![ワイヤーフレーム](./documents/%E3%83%AF%E3%82%A4%E3%83%A4%E3%83%BC%E3%83%95%E3%83%AC%E3%83%BC%E3%83%A0%E3%82%B9%E3%83%86%E3%83%83%E3%83%971.png)

# その他のポートフォリオ
[unityroom](https://unityroom.com/users/7qaijm2pyt3r0zkfvod5)
Unityで作ったゲームです。

[鴨緑江タブレット注文システム](https://oreder-ouryokukou.web.app/login/)
ReactとFirebaseで作成しています。

### 座席番号1でログイン

- Email: 1@gmail.com

- pass: yakiniku1

### マスターアカウントでログイン(注文を受信できます。)

- Email: master@gmail.com

- pass: yakiniku100


[鴨緑江ホームページ](https://ouryokukou.com/)
WordPressで作成しています。

# オリジナルプロダクトのドキュメント
お時間のある方はご覧ください。

[week5-6 テーマ決め](https://www.notion.so/week5-6-d079c54c99e948c689bb75e4997c84d0?pvs=4)

[week7-8 要件定義](https://www.notion.so/week7-8-c341dbe260aa42c7bec8a2323f211a09?pvs=4)

[week9-10 設計1](https://www.notion.so/week9-10-1-bd73292925a84578ad2e36ecf1bb1d58?pvs=4)

[week10-11 設計2](https://www.notion.so/week11-12-2-4bdaeca48988446fbab91ec8ea74b5e4?pvs=4)

[仕様とテスト](https://utopian-earth-71a.notion.site/6944b5220d5640c79facf15bd0ee0039?pvs=4)

[デプロイ手順書](https://www.notion.so/25a68208638c4e13995963a7b7eae31d?pvs=4)
