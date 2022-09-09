Seeding:
1. Tried convertcsv.com to transfer csv data into json file; transferred json file into project; parsing error
2. Used `knex-csv-seeder`: old/unused package, so not optimistic; added csv to project and copied over syntax included in package docs; wasn't working; potentially because of the import syntax?
3. Used `knex-csv-transformer`: more used than previous package, but not by much; didn't seem to work either, minimal troubleshooting
4. Started using Google for searches instead of DuckDuckGo
5. Found `convert-csv-to-json` package; newer and used frequently; issue with keeping multiple items contained to their right property (i.e. two directors meant director 1 -> `director`, director 2 -> `country`, country -> `date_added`, etc; also `listed_in` was only ever showing the first item in the list; tipped off by `date_added` (str) showing up in `release_year` (set to int at the time))
6. Tried using knex's .bulkInsert() feature as well to try and split the seed file into multiple insertions; wouldn't work because of the broken structure of the above JSON object in item 5
7. Thanks to googling instead of duckduckgo, found a way to just seed database from csv straight through dBeaver. Phew.

Backend: using postgres(via knex), express, & node
Frontend: using React, axios for HTTP calls

NB! Review the recipes app for the frontend UI to copy (User wants to see shows in a table format)

Backend routes:
- /shows --> GET list of shows watched
        --> POST new show
- /shows/:show_id --> PUT update a show or movie
            --> DELETE show by show_id

Frontend routes:
- /shows --> GET list of shows rendered in table format    --> DELETE show by clicking on a button associated with it
- /shows/new --> POST new show in form on new page,
- /shows/:show_id --> PUT update show using same form as create, but populating data already in it


If there was more time: 
- Would've added functionality for sorting movies by different properties
- Would've added more tests (aligning it to user stories, unit testing in the back, React Testing Library in the frontend)
- Would've added a pop-up modal after hitting submit on new/update show form
- Try a different UI library like antdesign, chakra
- Upgraded it cosmetically (picked a color scheme, font, etc)
- Refactored (most likely modularizing, examining SOC) and added more descriptive comments along the way, if needed
- Taken screenshots and updated the github with a delicious, descriptive README
- 