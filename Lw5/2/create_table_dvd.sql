use rental;
create table dvd
(
dvd_id int not null primary key auto_increment,
title varchar(50),
production_year year
)engine=InnoDB default charset=utf8;