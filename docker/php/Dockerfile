FROM php:7.4.1-fpm

COPY /docker/php/php.ini /usr/local/etc/php/

RUN apt update
RUN apt install -y wget git unzip libpq-dev

# Install Node.js 12
RUN apt install -y npm \
    && npm install n -g \
    && n 12

# Install PHP Extensions
RUN apt install -y zlib1g-dev mariadb-client libzip-dev libonig-dev \
    && docker-php-ext-install zip pdo_mysql


# Install Composer
RUN curl -sS https://getcomposer.org/installer | php \
    && mv composer.phar /usr/local/bin/composer \
    && composer self-update

# #Composer install
# COPY --from=composer /usr/bin/composer /usr/bin/composer

# ENV COMPOSER_ALLOW_SUPERUSER 1

# ENV COMPOSER_HOME /composer

# ENV PATH $PATH:/composer/vendor/bin

# WORKDIR /var/www/laravel/

# COPY /web/laravel/vendor/ /var/www/laravel/vendor/

# COPY --from=composer /usr/bin/composer /usr/bin/composer

# Docker Instructionの実行ディレクトリを変更
WORKDIR /var/www

# php-fpmはデフォルトのユーザwww-dataで動く。https://stackoverflow.com/questions/48619445/permission-denied-error-using-laravel-docker
# 変更する場合は /usr/local/etc/php-fpm.d/www.conf でユーザー名を変える。
RUN chown -R www-data:www-data /var/www 
# /var/wwwの所有者をwww-data 所有グループをwww-dataに変更

RUN mkdir /var/run/php-fpm

COPY /docker/php/php-fpm.d/zzz-www.conf /usr/local/etc/php-fpm.d/zzz-www.conf
# Linux設定のための各種ファイルを持っているディレクトリ。 etc文字の意味の通り、そのシステム全体で使用する設定のようなエトセトラデータが保存されるフォルダ。
# システムのほぼすべての設定ファイルが存在するディレクトリ。
EXPOSE 8000

RUN composer global require "laravel/installer"