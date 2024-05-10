## Setup Instructions
Please follow the following setup instructions:

1. clone mern-infrastructure repository as a project starter source code, rename the project: 
    `git clone https://github.com/<username>/mernstack-starter-repo.git tic-tac-toe`

2. Move into the project folder: 
    `cd tic-tac-toe`

3. Start with a "fresh" local repo with these commands:

Delete the existing local repo: `rm -rf .git`
Initialize a new repo: `git init`
Make the first commit: `git add -A, then git commit -m "Set up boilerplate"`

4. On your personal GitHub account, create a new public repo with a name matching your project folder's name, for example: tic-tac-toe

5. Let's create the origin remote link:  `git remote add origin <PASTE THE COPIED GH URL>`

6. Push the initial commit to the new repo:  `git push -u origin main`


Open the project in VS Code.

7. Install the Node modules listed as dependencies the package.json: `npm install`

8. Create a .env file: `touch .env`

9. add MongoDB database connection string and the SECRET into the .env file 

    `DATABASE_URL=mongodb+srv://username:password@cluster0-oxnsb.azure.mongodb.net/tic-tac-toe?retryWrites=true&w=majority `
    `SECRET=<secret>`

IMPORTANT: If you use a different SECRET than the most recent project developed using localhost:3000, be sure to delete any JWT token from local storage. Also, note that special characters can be difficult to set on Heroku

10. The Express server won't run unless the React app's production code exists. Create the build folder by running:  `npm run build`

11. In a terminal session, test that the Express server starts up without error: `nodemon server`

12. In another terminal session, test that the React app starts up and displays in the browser without error: `npm run start`

13. Cleanup (update, delete, etc.) the existing mern-infrastructure code... For example, be sure to update the <title> in public/index.html, delete extra components you don't want/need, remove the checkToken stuff from the users router/service/api/controller modules, etc. However, DON'T REMOVE the checkToken middleware from server.js.

14. Change the name of the project in the package.json.

15. Congrats, your project is all set up and ready for user stories to be implemented!