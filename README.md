## 1. clone後のリモートリポジトリ変更
```bash
git remote set-url origin <remote repository url>
```

## ex1. （Windowsの場合）Make for Windowsのインストール
https://zenn.dev/genki86web/articles/6e61c167fbe926<br>
システム環境変数のPathに `インストール先/bin` を登録する

## 2. Makeコマンドを使ったコンテナの起動
```bash
make build #docker compose build  (コンテナのビルド実行)
make up #docker compose up -d　（Dockerコンテナの起動）
make access #docker compose exec app /bin/bash　（Dockerコンテナへの接続）
make down #docker compose down --rmi local -v　（Docker コンテナとイメージの削除）
```


