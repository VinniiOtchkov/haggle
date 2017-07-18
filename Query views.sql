--create views

--Active haggles by seller_id
create view selling_by_id as
select u.name as seller_name, u.id as seller_id, u2.name as buyer_name, u2.id as buyer_id, i.name as item_name, i.description, i.initial_price, h.haggle_price, s.status from haggles h join users u on h.seller_id = u.id join users u2 on h.buyer_id = u2.id join items i on h.item_id = i.id join statuses s on h.status_id = s.id;

--All items being sold by location (using seller_id)
create view items_by_location as
select i.name, i.description, i.initial_price, l.city, u.name seller_name from items i join haggles h on i.id = h.item_id join users u on u.id = h.seller_id join locations l on l.id = u.location_id;

--All items a user is buying based on user_id
create view buyer_by_id as
select u.name buyer_name, u.id buyer_id, i.name item_name, i.description, h.haggle_price, s.status from haggles h join users u on u.id = h.buyer_id join items i on h.item_id = i.id join statuses s on h.status_id = s.id;


--Retrieving data based on views or straight queries

--List all active haggles by seller id using view
-- select s.seller_name, s.buyer_name, s.item_name, s.description, s.initial_price, s.haggle_price, s.status from selling_by_id s join users u on u.id = s.seller_id where s.seller_id = 2;

--List all active haggles based on buyer_id
-- select s.seller_name, s.buyer_name, s.item_name, s.description, s.initial_price, s.haggle_price, s.status from selling_by_id s join users u on u.id = s.seller_id where s.buyer_id = 1;

--List all items being sold by seller_id
-- select i.name, i.description, i.initial_price, i.img_url, s.status from haggles h join users u on h.seller_id = u.id join items i on h.item_id = i.id join statuses s on h.status_id = s.id where h.seller_id = 2;

--List all items a user is buying by buyer_id
-- select b.buyer_name, b.item_name, b.description, b.haggle_price from buyer_by_id b where b.buyer_id = 1;

--List all items being sold by location
-- select * from items_by_location i where i.city='Glendale' order by seller_name, name;