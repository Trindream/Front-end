use rental;
create table customer
(
customer_id serial primary key,
first_name varchar(255),
last_name varchar(255),
passport_code varchar(6),
registration_date date
)engine=InnoDB default charset=utf8;