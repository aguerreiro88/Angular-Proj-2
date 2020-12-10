# TicketManagementSystem

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.0.
This application has a node server and a mongodb database.

## Versions
- Visual Studio Code - 1.49.2
- Angular - 10.1.0
- body-parser - 1.19.0
- bootstrap - 4.5.2
- cors - 2.8.5
- express - 4.17.1
- jquery - 3.5.1
- mongodb-migrate - 2.0.2
- mongoose - 5.10.7
- mongoose-validator - 2.1.0
- ngx-pagination - 5.0.0
- nodemon - 2.0.4
- rxjs - 6.6.0
- Typescript - 4.0.2   

## Install all packages

Run `npm install` to generate all packages that the project depends on. 

## How To Run The Application

To run this application first we need to start MongoDB service:

- `mongod --config /usr/local/etc/mongod.conf --fork`

On the project Directory run the bellow command to import the data for the first time that the app will be used: 

- `npm run initial-data`

We can also remove all the data by running the command:

- `npm run remove-data`

After the data is loaded we need to start the node server with the command:

- `node server.js`

Open another terminal window and start the Angular application with the command:

- `ng serve`

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Project Structure

### /migrations

Contains the script to load data into the database, in order to have data to use the application.
The script allow to insert and remove data.

### /server.js

Node server

### /src/index.html

Home page for the Ticket Management System

### /app/environment/environment.ts

Configuration for the API URL

### /src/app/app.module.ts

Includes all the dependencies for the Ticket Management System application. Is used to define the needed modules to be imported, the components to be declared and the main component to be bootstrapped.

### /src/app/app.component.ts

Includes the view logic behind the app.component.html.

### /src/app/app.component.html

This file contains the html file related to app component and is where the child components are rendered.

### /src/app/app-routing.module.ts

Defines all the routes to handle the navigation between components.

### /src/components

Contains all components for the Ticket Management System application.

### /src/config

Contains the files that have the Database and Server URL configuration

### /src/controllers

Contains the controllers for the node server

### /src/data-services

Service used to make requests to the node server

### /src/models/index.js

Defines mongoose connection to database

### /src/models/message.model.js

Schema for Message document:
| Element       | Type        |Description                                     | 
| ------------- |:-----------:|:----------------------------------------------:| 
| ticket_id     | Object      |Id for the related ticket                       |
| messageText   | String      |The message                                     |
| userName      | String      |User name for the user that input the message   |
| creationDate  | Date        |Date for the message creation                   |


### /src/models/ticket.model.js

Schema for Ticket document:
| Element       | Type        |Description                                     | 
| ------------- |:-----------:|:----------------------------------------------:| 
| id            | String      |Identifier for ticket                           |
| title         | String      |Title of the ticket                             |
| priority      | String      |Priority of the Ticket                          |
| reason        | String      |Reason for the Ticket creation                  |
| description   | String      |Description for the Ticket                      |
| creationDate  | Date        |Date for the ticket creation                    |
| lastUpdate    | Date        |Date for the ticket update                      |


### /src/routes

Contains the server routes for the requests

## Functionalities

### Create Ticket

- By pressing the "+" (plus) button on the top of the page, a form to create new ticket will be displayed.
- After filling the form will be possible to submit the ticket.
- When submit, a popup is displayed and the user can cancel the ticket creation during 5 sec.
- If user press cancel on the popup, the ticket will not be created.
- After 5 seconds and if the user did not press the cancel on the popup, a new ticket is created.


### Display List

- In the home page the user can see a list of tickets (8 items per page).

### Delete ticket

- In the list of tickets, if the user press the "x" (cross) button the ticket will be removed from the list.

### Display Ticket Details

- In the list of tickets, if the user click in one ticket, he will be redirected to that ticket details page.
- On the tickets details, the user can also see all the messages exchanged regarding the ticket.
- The user can input and submit new messages for that ticket.
