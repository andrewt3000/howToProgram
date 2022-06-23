### Authentication and Authorization
For user authentication and authorization of a rest api I typically use [jwt](https://jwt.io/) (JSON web token), an open standard ([RFC 7519](https://tools.ietf.org/html/rfc7519)).  
Alternative: Early in web development sites typically used cookies and server side session state. One advantage of jtw is that you can avoid storing state on the server which makes it simpler to do load balancing.  

Here is how I typicaly use jwt to authenticate each rest api call. 
- When the user signs up or changes their password, the password is stored in the database as a one way, cryptographic [hash](https://auth0.com/blog/hashing-passwords-one-way-road-to-security/).  
Best practice: store hashed passwords rather than cleartext passwords.  
Opinion: use a hash algorithm designed for passwords such [bcrypt](https://auth0.com/blog/hashing-in-action-understanding-bcrypt/).  
Best Practice: Use an appropriate cost factor for the hash algorithm.  
Best practice: enforce a password policy with minimum complexity requirements (example minimum number of characters).  

- Require an email address during account creation for password recovery. Validate the user's email address.    
- When the user attempts to login by submiting username and password, the password is hashed and compared to the stored password in the database. If the login information matches, the server signs and returns a jwt token to the client. User authorization claims such as user id or group id are encrypted in the token payload.   
- On the browser client, store the token in sessionStorage or localStorage so the single page app data doesn't lose authtenticaion information if there is a  browser refresh. sessionStorage is chosen when you want logins to persist over multiple browser sessions.  
- On the client side wrap react router's Route object with logic to redirect if the user isn't logged in [Example](https://reacttraining.com/react-router/web/example/auth-workflow). The user's login status, user name, etc. can be stored in a global store. Client side authentication is for convenience, the pages without data are typically not secure assets. Also if the store is empty check localStorage or sessionStorage to restore login infomation after a user refresh.      
- On the client, authenticated api calls are sent through a library function to add the jwt token to all ajax requests in the authorization header using Bearer {token} scheme. 
- The node api has [middleware](http://expressjs.com/en/guide/using-middleware.html) that filter routes to protected data calls. If the request doesn't has a valid authenticated token, the api responds with unauthorized (http error 401). If the token is valid the request for data is continued. User authorization data from the token payload can be trusted and used to authorize or filter database queries based on permission. If the user is authenticated but is requesting information that it doesn't have permission to access respond with http error code 403.    

Here is [documentation](https://github.com/auth0/node-jsonwebtoken) for signing and verifying jwt tokens in node using [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) library.   

Trade off: the jwt tokens have an expiration. The pro of longer expirations is convenience for users. The con is longer sessions are less secure.   

You can implement [refresh tokens](https://auth0.com/learn/refresh-tokens/) or 2 form authentication for additional security.  

Consider security [authentication risks](https://owasp.org/www-project-top-ten/2017/A2_2017-Broken_Authentication).  
Also consider more genreal security risk such as session hijacking, xss, and csrf. [OWASP Top 10 Web Application Security Risks](https://owasp.org/www-project-top-ten/)  
