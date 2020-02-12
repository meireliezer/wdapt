How to make it work (with server)


1. build app
 a. run: ng build
 b. copy the data to serverapp/www or you can leave it at place

2. run server 
  run the server in ./serverapp
	npm run start 
	or 
	node index.js
  It will open a port 3000 

3. brows to  localhost:3000

to work with 4200 & server 
  a.open a unsecure browser 
	chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security
  b. in my-http.service
	mark isDebug = true
	this will add "localhost:3000" to every api




