select "a"."line1" as "addresses",
      "c"."name" as "cities",
      "a"."district"
  from "addresses" as "a"
join "cities" as "c" using ("cityId");
