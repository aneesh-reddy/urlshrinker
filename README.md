# urlshrinker
This is a short readme note for the project.

The project is built using ejs, nodejs, expressjs, mongodb styled with bootstrap.
The home page after loading will show an input text field to paste the full url that is to 
be shortened and button to submit.
The home page also consiste of a table that shows the full url, short url and no of clicks
The link that is pasted in input text field is then posted and stored in database and short 
url is generated using "shortid" package from npm and the user is redirected to home page 
which now shows the table of all the urls shortened.
When the shortened url is clicked it will first go the requested route and the database is 
searched for the requsted short url if it found then result will be redirected to the full url
linked to shorturl . If the short url entered is invalid then result will send response as 404 Not found


