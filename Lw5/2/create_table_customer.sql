use rental;
create table customer
(
customer_id int not null primary key auto_increment,
first_name varchar(20),
last_name varchar(20),
passport_code varchar(6),
registration_date date
)engine=InnoDB default charset=utf8;