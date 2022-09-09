# Backend: using postgres(via knex), express, & node
# Frontend: using React, axios for HTTP calls

## Backend routes:
- /shows --> GET list of shows watched
        --> POST new show
- /shows/:show_id --> PUT update a show or movie
            --> DELETE show by show_id

## Frontend routes:
- /shows --> GET list of shows rendered in table format    --> DELETE show by clicking on a button associated with it
- /shows/new --> POST new show in form on new page,
- /shows/:show_id/edit --> PUT update show using same form as create, but populating data already in it

## Blockers/Troubleshooting:
### Seeding:
1. Tried convertcsv.com to transfer csv data into json file; transferred json file into project; parsing error
2. Used `knex-csv-seeder`: old/unused package, so not optimistic; added csv to project and copied over syntax included in package docs; wasn't working; potentially because of the import syntax?
3. Used `knex-csv-transformer`: more used than previous package, but not by much; didn't seem to work either, minimal troubleshooting
4. Started using Google for searches instead of DuckDuckGo
5. Found `convert-csv-to-json` package; newer and used frequently; issue with keeping multiple items contained to their right property (i.e. two directors meant director 1 -> `director`, director 2 -> `country`, country -> `date_added`, etc; also `listed_in` was only ever showing the first item in the list; tipped off by `date_added` (str) showing up in `release_year` (set to int at the time))
6. Tried using knex's .bulkInsert() feature as well to try and split the seed file into multiple insertions; wouldn't work because of the broken structure of the above JSON object in item 5
7. Thanks to googling instead of duckduckgo, found a way to just seed database from csv straight through dBeaver. Phew.
8. Wasn't satisfied with "s" appearing in `show_id`, nor the list being unsorted. Used google docs to remove the "s" and sort. Reseeded db and tested with Postman.

### Creating new show:
1. If `show_id` isn't explicitly added, the default create/post functionality seems to be starting at 1 for any new shows added. 
2. Not fixed. Creating a new show currently only works when `show_id` is explicitly named and unique

### Reading show_id:
1. The showExists() validation that is calling the `service.read()` function is not currently working as expected, and thus preventing the PUT and DELETE functionality from currently working. Errors are thrown on Postman, and a show object is not being returned from the API call. Did not have time to deepdive to troubleshoot


If there was more time: 
- fixed bug with `show_id` on creating new shows
- Would've added functionality for sorting and/or filtering movies by some of their different properties (e.g: release_date, director, country)
- Would've added some tests (unit testing in the back to make sure POST and PUT functionality input matches output; unit test that validators actually stop invalid data (e.g: throw in some invalid properties)). Not familiar with e2e testing yet, wouldn't know where to start.
- Would've added a pop-up modal after hitting submit on new/update show form. Taught concept using window.confirm(), but have been advised there's better ways to do this using features within a UI library
- Try a different UI library like tailwind or chakra. So far, only familiar with some basic bootstrap
- Upgraded it cosmetically by picking a color scheme & font, 
- Refactored (most likely modularizing, examining SOC) and added more descriptive comments along the way, if needed
- Taken screenshots and updated the github with a delicious, descriptive README
- Updated the form to:
-- have dropdowns for Country, Rating, Release Year, and Listed In (would've been nice to have multiple options selectable on Listed In)
-- change date_added to `type="date"` and tested to make sure data travels between front and backend accurately