use rental;
select 
  customer.*, dvd.title
from 
  offer
  left join customer using(customer_id)
  left join dvd using(dvd_id)

where
  year(offer.offer_date) = year(now());