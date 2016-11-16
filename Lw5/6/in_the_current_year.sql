use rental;
select 
  customer.*, dvd.title
from 
  customer, offer, dvd 
where
  (customer.customer_id =o ffer.customer_id) &
  (offer.dvd_id = dvd.dvd_id) &
  (year(offer.offer_date) = year(now()));