## LodgeINN
## Table of Contents 

1. [General Info](#general-info)
2. [Wiki-Documentation](#wiki-documentation)
3. [Technologies](#technologies)
4. [Installation](#installation)
5. [Development](#development)
6. [Images](#images)



### General Info 
***
# LodgeINN
LodgeINN is an application where users can post spots to host or book spots. 
* Link to live  [LodgeInn](https://lodgeinn.herokuapp.com/) project. 


### LodgeINN Login page
![login](https://user-images.githubusercontent.com/80999718/149379610-05f80153-21d8-4c0a-aab6-70036eb28a18.png)


### LodgeINN Sign up page
![signup](https://user-images.githubusercontent.com/80999718/149380404-17edea81-37c0-4ff7-b432-8ba723dfda8e.png)


### LodgeINN Home page
![home](https://user-images.githubusercontent.com/80999718/149380341-a1773700-4a94-4610-a030-c416350e4525.png)



### Spots 
![spots](https://user-images.githubusercontent.com/80999718/149380460-557b3a64-b0e1-47e6-ab52-736f9970d2d8.png)



### Spots Detail 
![Spot](https://user-images.githubusercontent.com/80999718/149380252-6c67be40-8ffc-4a5c-a806-d6116ccac953.png)

### Host Form
![signup](https://user-images.githubusercontent.com/80999718/149381035-0965fcad-ba4e-4eb0-9085-a86347676480.png)



## Wiki Documentation: 
***
* [Home](link)
* [Frontend Routes](link)
* [MVP Feature List](link)

## Technologies 
***
Technologies used within the project:
* [bcryptjs](https://www.npmjs.com/package/bcrypt): Version 2.4.3
* [cookie-parser](https://www.npmjs.com/package/cookie-parser): Version 1.4.4
* [cors]: Version 2.8.5
* [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize): Version 7.0.4
* [csurf](https://www.npmjs.com/package/csurf): Version 1.11.0
* [dotenv]: Version 10.0.0
* [express](https://expressjs.com/en/4x/api.html#express): Version 4.16.1
* [express-async-handler]: Version 1.2.0
* [express-validator](https://express-validator.github.io/docs/): Version  6.14.0
* [helmet]: Version 5.0.1,
* [jsonwebtoken]: Version 8.5.1
* [morgan](https://www.npmjs.com/package/morgan): Version 1.9.1
* [per-env]: Version 1.0.2
* [pg](https://www.npmjs.com/package/pg): Version 2.0.4
* [sequelize](https://sequelize.org/master/class/lib/sequelize.js~Sequelize.html): Version 5.22.3
* [sequelize-cli](https://sequelize.org/master/class/lib/sequelize.js~Sequelize.html): Version 5.5.1
* [dotenv](https://www.npmjs.com/package/dotenv): Version 8.2.0
* [dotenv-cli](https://www.npmjs.com/package/dotenv-cli): Version 4.0.0
* [nodemon](https://www.npmjs.com/package/nodemon): Version 2.0.6
* [js-cookie]: Version 3.0.1
* [react]: Version 17.0.2
* [react-dom]: Version 17.0.2
* [react-redux]: Version: 7.2.6
* [redux]: Version 4.1.2
* [redux-thunk]: 2.4.1
* React
* Redux
* Postgres
* Sequelize
* SQL
* Heroku

## Languages 
***
* JavaScript
* CSS


## Installation 
To install LodgeINN on your local machine please clone the project repository. 
Once the project has been cloned cd into the backend and run ```npm install``` in your terminal to install the backend dependencies.
```
 git clone https://github.com/Eric-Cortez/LodgeINN.git
 cd backend 
 npm install
 npm start
 
```
Once the project has been cloned cd into the frontend and run ```npm install``` in your terminal to install the frontend dependencies.
```
 cd frontend  
 npm install
 npm start
```
To use the application in a development environment use ```npm start``` in the backend and in the frontend to start the application. 


## Development 
This project was developed by a single developer Eric Cortez. Below is a description of the top features of the project and a brief description of challenges faced during the six-day development cycle. 
#### Highlight features: 

* Navigation: Implementation of dynamic navigation across the application with the use of React. This allows for a seamless browsing experience for the user as the page does not reload or refresh. This was also achieved by preventing the default of events such as on submit.

* Redux: All information from database queries received through csurfetch request are stored in the Redux store and accessible to the components across the application. 


#### Challenges:   
* Refreshing Edit Form Page: When implementing the feature to edit forms I had difficulty keeping the state of the input data when refreshing the page. I was able to resolve this problem with the use of local storage. I set the input data to local storage and used a useEffect to set the input values on re-render. 

* Creating and Editing Form: When creating a Spot the payload sent to the database must update three tables. Prior to this project, I had only updated one table at a time. I was unsure of how to implement and through research, I found that I could send the data for all three tables in one payload and destructured it in the backend. I was able to use this technique for both editing and creating Spots.  

* Backend Validation Errors: When using the check method from express-validator I faced a challenge as the validator returned a Bad Request error when creating and editing spots. After tracing the request in the handle validation function I found that the data was entering the validation function, but my payload was nested so it was causing an error. Therefore I had to key into the payload in each check method in order to resolve the issue (ex: .check("image.url"). 
```
//PAYLOAD EXAMPLE

 const payload = {
            amenities: {
                id: spotInfo?.Amenities[0]?.id,
                kitchen,
                privateBeachAccess,
                firePlace,
                parking,
                pool,
                hotTub,
                pets,
            },
            image: {
                id: spotInfo?.Images[0]?.id,
                url
            },
            spots: {
                userId: session.user.id,
                address,
                city,
                state,
                country,
                title,
                description,
                price,
                zipCode,
                guests,
                bedrooms,
                bathrooms
            }
```

## Create Spot (POST) - Route 
#### Updates three tables in the databade 
![eventListener](link)


#### REACT form for the home page of LodgeINN aka question list
![questionListPug](link)


#### Code snippet of the route to post a new question 
![postNewQuestion](link)




