# 2021-2022-Capstone-DB

The following is a guide covering the installation, setup and deployment of the Syllabi Savers application. 
The stack of the application is as follows.
- ReactJS 
- ExpressJS
- NodeJS
- SQLite3

Most of the dependencies for this application are already integrated into the different node modules when the application is cloned onto the filesystem. However, nodejs must be available on the computer in order to run correctly.

## Installation of NodeJS - Windows
1. Install NodeJS if not currently installed.
> [Link to nodejs download, install for respective OS.](https://nodejs.org/en/download/)
2. Run `node -v` in cmd or powershell to verify nodejs is installed properly. 

## Once NodeJS is installed and the repo is cloned 
1. Navigate to the `src` directory within `2021-2022-Capstone-DB`.
2. In a usual React application `npm install` would be used to install dependencies within `node_modules`. If there are dependency issues, you may need to manually delete the `node_modules` folder and run `npm install` in `root`.
3. Navigate to the `src` directory with `cd src` and run `npm run build`. This will help build node within the filesystem.

## To run the program manually
1. Navigate to `root` or `../2021-2022-Capstone-DB`.
2. Running `npm run dev` will run both the React application and the backend server.
## Navigation to the application 
1. When running on your local machine, the application will be located on `http://localhost:3000/`
   1. Note: that when you run the program for the first time, the application will open in the system default browser
2. To close the application, navigate back to the terminal used to open the application and enter `CTRL+C` to end the task.
   1. An alternative is opening `Task Manager`, and locating the task `React` and manually ending that task. 

