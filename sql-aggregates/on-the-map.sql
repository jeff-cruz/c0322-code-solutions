select "countries"."name",
  count("countryId") as "totalCities"
  from "cities"
join "countries" as "countries" using ("countryId")
group by "countries"."name";
