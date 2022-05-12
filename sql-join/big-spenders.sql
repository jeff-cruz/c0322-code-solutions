select "c"."firstName" as "customers",
        "c"."lastName",
        "p"."amount" as "payments"
  from "customers" as "c"
join "payments" as "p" using ("customerId")
order by "amount" desc
limit 10;
