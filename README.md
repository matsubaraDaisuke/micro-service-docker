# micro-service-docker

# 利用方法

## 開発環境

``` terminal
$ docker-compose -f docker-compose.yml -f docker-compose.development.yml  up --build
$ docker-compose -f docker-compose.yml -f docker-compose.development.yml  up -d
```

hostsファイルに以下を追加して、ブラウザでアクセス `http://example.com`

```
127.0.0.1 example.com
```

## デプロイ環境

``` terminal
$ docker-compose  up --build
$ docker-compose  up -d
```

hostsファイルに以下を追加して、ブラウザでアクセス `http://example.com`

```
127.0.0.1 example.com
```
