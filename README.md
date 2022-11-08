# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

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

```sh
php artisan migrate
```

#### Insert demo user

```sh
php artisan db:seed
```
