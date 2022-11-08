# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)


## Technology uses

### Frontend
- nodejs (latest)
- npm (latest)
- vuejs 3
- vuex (latest)
- vue-router 4
- vitejs

### Backend
- PHP 8.1
- Laravel 9


## Setup instruction

### Frontend
from root folder run those command

#### Install dependencies
```sh
npm install
```

#### Compile and Hot-Reload for Development

```sh
npm run dev
```

#### Compile and Minify for Production

```sh
npm run build
```

### Backend

from [root/api] folder run those command

#### Install dependencies
```sh
composer install
```

#### Database migration
create a database and create .env file from .env.example 

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=<datbase name>
DB_USERNAME=<databse user name>
DB_PASSWORD=<database user password>

```

```sh
php artisan migrate
```

#### Insert demo user

```sh
php artisan db:seed
```

#### mail configaration

```sh
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=<your mail username>
MAIL_PASSWORD="<mail passowrd>"
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS="<mail address>"
MAIL_FROM_NAME="${APP_NAME}"
```

#### start development server
```sh
php artisan serve
```
