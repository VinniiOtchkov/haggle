--List all active haggles by seller id
drop view if exists selling_by_id;
create view selling_by_id as
select u.name as seller_name, u.id as seller_id, u2.name as buyer_name, u2.id as buyer_id, i.name as item_name, i.description, i.initial_price, i.img_url, h.haggle_price, s.status from haggles h left join users u on h.seller_id = u.id left join users u2 on h.buyer_id = u2.id join items i on h.item_id = i.id join statuses s on h.status_id = s.id;

--see all active haggles based on seller_id
--select s.seller_name, s.buyer_name, s.item_name, s.description, s.initial_price, s.haggle_price, s.status from selling_by_id s join users u on u.id = s.seller_id where s.seller_id = 2;

--see all active haggles based on buyer_id
--select s.seller_name, s.buyer_name, s.item_name, s.description, s.initial_price, s.haggle_price, s.status from selling_by_id s join users u on u.id = s.seller_id where s.buyer_id = 1;

--List all items being sold by seller_id
--select i.name, i.description, i.initial_price, i.img_url, s.status from haggles h join users u on h.seller_id = u.id join items i on h.item_id = i.id join statuses s on h.status_id = s.id where h.seller_id = 2;

--create view of all items being sold by location (using seller_id)
drop view if exists items_by_location;
create view items_by_location as
select i.name, i.description, i.initial_price, l.city, u.name seller_name from items i join haggles h on i.id = h.item_id join users u on u.id = h.seller_id join locations l on l.id = u.location_id;
--select * from items_by_location i where i.city='Glendale' order by seller_name, name;

--List all items a user is buying based on user_id
drop view if exists buyer_by_id;
create view buyer_by_id as
select u.name buyer_name, u.id as buyer_id, u2.name seller_name, u2.id seller_id, i.name item_name, i.description, i.img_url, h.haggle_price, s.status, l.city from haggles h join users u on u.id = h.buyer_id join users u2 on u2.id = h.seller_id join items i on h.item_id = i.id join statuses s on h.status_id = s.id join locations l on l.id = u2.location_id;

--buyer listing
--select img_url, item_name, haggle_price, seller_name, city, status from buyer_by_id where buyer_id = 2;