use rental;
select
  *
from
  dvd
where
  dvd_id in (select dvd_id from offer where return_date is null);