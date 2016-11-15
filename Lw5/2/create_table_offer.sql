use rental;
create table offer
(
offer_id int not null primary key auto_increment,
dvd_id int, customer_id int,
offer_date date,
return_date date,
foreign key(dvd_id) references dvd (dvd_id),
foreign key(customer_id) references customer (customer_id)
)engine=InnoDB default charset=utf8;