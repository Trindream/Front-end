use rental;
create table offer
(
offer_id serial primary key,
dvd_id bigint unsigned,
customer_id bigint unsigned,
offer_date date,
return_date date,
foreign key(dvd_id) references dvd (dvd_id),
foreign key(customer_id) references customer (customer_id)
)engine=InnoDB default charset=utf8;