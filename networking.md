# Client Server Model
Computer programs often work accross networks using the [Client–server model](https://en.wikipedia.org/wiki/Client%E2%80%93server_model). 
A client typically makes a request over a network to a server. The [server](https://en.wikipedia.org/wiki/Server_(computing))  sends a response back to the client over the network.     

Getting a web page is an example of a client-server architecture. 
Web browsers (chrome, edge, safari, firefox) are http clients. The client makes a request to a url and the request is routed over the network to the server. The web server (IIS, nginx, apache) sends a response that includes an [http response code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) and the web page. The term server is also commonly used to refer to hardware that might run in a data center such as rackable computers with redundant components. For our purposes clients and servers are implemented as software and can run on the same machine for development.  

On unix based systems, such as Mac OS, curl is a command line http client. Run this code from the command line to see it fetch the text of a web page.     
`curl http://www.google.com`

Conversely you can open a local html file in your browser. That is not using the client server architecture. It’s not going through the network. 

## protocols
A protocol is a standard specification for computer networking. 
Here is a list of common client/server protocols: 
1. http - hyper text transfer protocol (gets web pages)
2. https - hyper text transfer protocol (get secure web pages)
3. smtp - simple mail transfer protcol (sends email)
4. pop - post office protocol (gets email)
5. ftp - file transfer protocol 

## url
The [url](https://en.wikipedia.org/wiki/URL) consists of protocol, hostname, optional port number, path, and parameters. 

`protocol://hostname:portNumber/path?param1=1`


### standard port numbers
[port number](https://en.wikipedia.org/wiki/Port_(computer_networking)): channel for communications.  
1. http - 80
2. https - 443
3. smtp - 25
4. pop - 110
5. ftp - 20 

### http status codes
Here are commonly used [http status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status):
1. 200  success 
2. 400 bad request
3. 404 not found
4. 401 not authorized
5. 403 forbidden
6. 500 server error
