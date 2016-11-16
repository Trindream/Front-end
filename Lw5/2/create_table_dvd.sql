use rental;
create table dvd
(
dvd_id serial primary key,
title varchar(255),
production_year year
)engine=InnoDB default charset=utf8;