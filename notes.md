Used convertcsv.com to transfer csv data into json data for seeding

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
- /shows/new --> POST new show in form on new page
- /shows/:show_id --> PUT update show using same form as create, but populating data already in it


If there was more time: 
- Would've made user stories
- Would've added functionality for sorting movies by different properties
- Would've added test-driven-development
- Upgraded it cosmetically (picked a color scheme, font, etc)
- refactored and added more descriptive comments along the way
- taken screenshots and updated the github with a delicious, descriptive README
- 