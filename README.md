# Server Side Rendering NodeJS test

## Requirements

Build a node server which;

- Serves up the SPA
- Server renders the SPA to support non-JS clients
- Saves user inputed data to the server as they switch between form fields
- Saves completed form data on user submission
- On page reload, populates the form fields with the values previous saved
- Is stateless, to support auto-scaling

## Steps to run the application

- clone the repository from the git
- Open the project in visual studio and execute this command `npm i`
- Execute command 'npm start' in project directory terminal
- The app will by default load on PORT:8000
- Access the application by using URL 'http://localhost:8000'

## Open Issues

- On blur, the update api call is not triggered

## Time Taken

- 5.5 hrs

## Tasks for improvement

- Write test cases
- Validation of data before save
