### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
JWT stands for JSON web token, it is a way of using a token to check authorization in APIs by using the header, payload and signature to send information but also adding a way to verify its coming from the correct place

- What is the signature portion of the JWT?  What does it do?
Used to verify the token by encrypting the contents(header/payload) of the JWT along with a secret key to make sure the token is valid and not tampered with 

- If a JWT is intercepted, can the attacker see what's inside the payload?
Yes the payload is encoded but not encrypted so the payload can be decoded with the correct decoder 

- How can you implement authentication with a JWT?  Describe how it works at a high level.
client sends data to the server (ex. username/password)
server verifies data and generates JWT 
Server sends JWT to the client
Client stores JWT (local storage/ cookie)
Client sends JWT in header for frequent authentications
Server validates JWT

- Compare and contrast unit, integration and end-to-end tests.
Unit testing is for testing small individual pieces of code or functions on their own. Integration tests ensue that different modules or components work together correctly. Tests how they interact with each other. End-to-end tests verify the code as a whole and simulates a user interaction. End-to-end tests are usually a lot more time consuming to create. 

- What is a mock? What are some things you would mock?
A mock is an object that mimics the behavior of a real object. Allows you to simulate behavior and isolate variables being tested. An example could be simulating interactions with external services that can't easily be controlled. 

- What is continuous integration?
A practice of continuously integrating small changes to code frequently instead of waiting and pushing large changes all at once. Helps to catch issues early before they become larger 

- What is an environment variable and what are they used for?
Used to store configuration information such as secret-keys and database information

- What is TDD? What are some benefits and drawbacks?
A practice where tests are created first before writing the actual code. Typically follows the pattern, write a failing test, write the code necessary for the test to pass, then refactor the code. Benefits could be to make you think about the design of the code upfront, faster debugging and better testing. Some drawbacks could be taking more time upfront when writing the code and time spent updating to the correct tests when changes are made

- What is the value of using JSONSchema for validation?
Helps you more easily define the expected structure and format of JSON data and follows the rules set in the Schema.

- What are some ways to decide which code to test?
Test code that is critical to the function of the app overall, test sections of the code that have higher complexity, sections that expect certain outputs, test for edge cases in the code

- What does `RETURNING` do in SQL? When would you use it?
Returning helps to retrieve the data that has been inserted or updated into the database and eliminates the need for an additional query to retrieve this information.

- What are some differences between Web Sockets and HTTP?
HTTP is stateless where each request is an individual transaction, while sockets establish a persisting connection between the the client and server and allow for real time communication. HTTP follows the request-response model where client sends a request and the server responds, but web sockets allow for the server to send information without a request first.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
I personally feel like I caught on to the flask section faster and understood it easier than the express section that I found a little more challenging to get the hang of. But it seems like there was more customizability available with what we learned with express that I liked. Overall I didn't dislike either one, but if I had to pick just based on ease of use I would lean more toward flask. 