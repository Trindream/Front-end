use rental;
select
  dvd.*
from
  dvd
  right join offer using(dvd_id) where offer.return_date is null;