Used convertcsv.com to transfer csv data into json data for seeding

Backend: using postgres(via knex), express, & node
Frontend: using React, axios for HTTP calls

NB! Review the recipes app for the frontend UI to copy (User wants to see shows in a table format)

Routes:
- /watchlist --> GET list of shows watched in a table; DELETE content
- /watchlist/:contentId --> PUT update a show or movie
- /watchlist/new --> POST new content


If there was more time: 
- Would've made user stories
- Would've added functionality for sorting movies by different properties
- Would've added test-driven-development
- Upgraded it cosmetically (picked a color scheme, font, etc)