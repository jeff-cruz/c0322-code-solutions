select "name",
  count("name") as "numberOfFilms"
  from "genres"
join "filmGenre" using ("genreId")
join "castMembers" using ("filmId")
join "actors" using ("actorId")
where "actors"."firstName"= 'Lisa'
and "actors"."lastName"='Monroe'
group by "genres"."name";
