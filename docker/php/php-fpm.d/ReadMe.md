# listen = /var/run/php-fpm/php-fpm.sock

# listen.owner = www-data

# listen.group = www-data

# listen.mode = 0666

# listen = /var/run/php-fpm/php-fpm.sock 　 FastCGI リクエストを受け入れるアドレスを設定、nginx と通信(接続)するための UNIX ドメインソケットの path を指定します。fastcgi_pass unix:/var/run/php-fpm/php-fpm.sock;と同じ path を指定をすることで通信できるようになります。

# listen.owner unix ソケットを使う場合に、そのパーミッションを設定します。 読み書きアクセス権限(ユーザー)を nginx の実行ユーザーと同一設定しないとウェブサーバーからの接続を受け付けることができません。

# listen.group = www-data 同様に nginx の実行ユーザーと統一させる。

# これがないと php 側でエラーが出ます。

<!-- TCP の場合 -->

<!-- user = www-data
group = www-data
listen = 9000
listen.owner = www-data
listen.group = www-data
listen.mode = 0666 -->
