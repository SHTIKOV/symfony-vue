# Symfony + Vue + Webpack

Простая сборка прилажения на стеке:  `Symfony 4.x`  +  `Vue` + `Vuex` + `Webpack` + `Sass`.

# Install

ПРоект можно установить через **composer**:

```
composer require shtikov/symfony-vue
```


# Build

Для сборки проекта необходимо:
- Установить **npm** модули
	```
	npm install
	```
- Установить **composer** вендоры
	```
	composer install
	```
- Собрать все пакеты прилажения
	```
	npm run build (production)
	or
	npm run dev (develop)
	```
- Запустить сервер
	```
	bin/console server:run
	```
