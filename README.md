## Links
* [Website](https://ceeoinnovations.github.io/fetlab)
* [Data (Google Drive)](https://drive.google.com/drive/folders/14_Pz8O_YQauf5cpMfGmqNgqhk9FnoIfN?usp=sharing)

## How to Add Your Data
1. Go to the [FET Lab Google Drive](https://drive.google.com/drive/folders/14_Pz8O_YQauf5cpMfGmqNgqhk9FnoIfN?usp=sharing). To access this folder, you should use CEEO Google account (FirstName.LastName@tuftsceeo.org)
2. Add data
- Add personal information to the `people` spreadsheets
- Add project information to the `projects` spreadsheets  
- You can find tips that you can refer to fill out the data if you **hover cells on top**  
- **Grey columns** are necessary, white columns are optional, and blue columns are for a website manager
3. Upload files (e.g., images, videos, gifs) to the `assets` folder, get a sharable link, and paste to the spreadsheets
- Upload your headshot image to the `assets/people` folder
- Create your project folder with your project id under the `assets` folder and upload images/videos of your projects

## Google Drive Structure
.   
|-- Links: doc that contains links to the website and GitHub page  
|-- about: spreadsheets that contain basic information about the website  
|-- people: spreadsheets that contain personal information of the lab members  
|-- projects: spreadsheets that contain project information created at the lab  
|-- websites: spreadsheets that contain partner website informatiion   
|-- assets: directory with any images/videos needed  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- people: headshot images    
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- project-id: images/videos for a specific project  

## Source Code Directory Structure
.  
|-- README.md  
|-- index.html: main html file  
|-- index.js: main javascript file that loads the .csv files and populate the data into the webpage automatically  
|-- main.js: generate the main page (home)  
|-- style.css  
|-- components: folder contains modular javascript files which we will import later into the the main page  
|-- assets: directory with any files  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- global: logos and icons that are used across the site  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-- project-id: images/videos for a specific project (alternative of GDrive if necessary)

## Acknowledgement
This website is built and managed by [Hyejin Im](https://hyejinim.github.io).
Thanks to [Nam Wook Kim](https://www.namwkim.org) for the idea of [data-driven website](https://github.com/namwkim/namwkim.github.io) and the [original source code](https://www.notion.so/Lab-Modules-0bf0039f4b224ac0bfec6b2bd49010c0).
