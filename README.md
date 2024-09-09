# Инструкция по использованию #
## Запуск 
- Введите в консоль команду `docker-compose up` и у вас поднимутся необходимые контейнеры.
- Серверное приложение магазина запустится по адресу: `http://localhost:3000`, а сервис "истории действий с товарами или остатками” на `http://localhost:3001`. Если на локальной машине есть Docker Desktop, можно затем запускать контейнер из него.
- Внос магазинов предусмотрен только с помощью SQL-запросов, поэтому можно восстановить данные из `dump.sql`.

## Использование 

Для сервиса `shop` реализован следующий функционал:
- Создание товара `POST api/product`
- Получение товаров `GET api/products`. Можно передавать следующие фильтры: `name`, `plu`
- Создание остатков `POST api/remainder`
- Получение остатков `GET api/remainders`. Можно передавать следующие фильтры: `shopId`, `plu`, `quantityOnShelfFrom`, `quantityOnShelfTo`, `quantityInOrderFrom` и `quantityInOrderTo`
- Изменение остатка на полке: `PUT api/remainder/shelf/:shopId/:productId/:action`. `Action` = `decrease` || `increase`
- Изменение остатка в заказе: `PUT api/remainder/order/:shopId/:productId/:action`. `Action` = `decrease` || `increase`

Для сервиса `history` реализован следующий функционал:
- Создание действия `POST api/action`. Вызывается первым сервисом.
- Получение товаров `GET api/actions`. Можно передавать следующие фильтры: `shopId`, `plu`, `action`, `dateFrom` и `dateTo`. Для постраничной навигации передаются: `page`, `limit` и `skip`
