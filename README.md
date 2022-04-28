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

## To run the program 
1. Navigate to `root`.
2. Running `npm run dev` will run both the React application and the backend server.