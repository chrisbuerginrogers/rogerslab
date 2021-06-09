## Link

[Future Educational Technology Lab](https://hyejinim.github.io/fetlab)

## Get Started

### How to Add Your Project
1. Add your project information to `assets/data.json`. Copy and paste the code below at the end of project items. [Video tutorial](https://youtu.be/9VoZC-oCWoo)

```javascript
        ,
        {
            "id": "project-id",
            "title": "Project Title",
            "subtitle": "Briefly explain what this project is",
            "authors": "First Last, First Last",
            "teaser": "assets/project-id/teaser.png",
            "tags":["Engineering", "System"],
            "materials": [
                { 
                    "label": "Paper",
                    "path": "assets/project-id/paper.pdf"
                },
                { 
                    "label": "Video",
                    "path": "assets/project-id/video.mp4"
                },
                { 
                    "label": "Demo",
                    "path": "https://hyejinim.github.io/draw2code"
                }
            ],
            "desc": "Describe why you worked on this project and what this project is."
        }
```
* Create a unique project ID for `id`. It will be used to create a project detail page.
  * Make it concise and meaningful
  * Use all lowercase
  * Don't use spaces in the project ID
  * A hyphen is OK for a word separator
* Choose 2 tags among below that represent your project
  * `Robotics, Engineering, Computatioanl Thinking, System, Educational Tool`
* If you don't have materials, delete the relevant code from the materials data. For example, if you have only a paper, the code would be like below.
```javascript
"materials": [
                { 
                    "label": "Paper",
                    "path": "assets/project-id/paper.pdf"
                }
            ],
```
* Make sure there is no syntax error
* Go to the [website](https://hyejinim.github.io/rogerslab) to see the updates after you make changes. It can take up to 20 minutes for changes to the site to publish.
2. Add your project folder that inlcudes all the materials to the assets folder. [Video tutorial](https://youtu.be/R6r7yIguZcE)
* Create your project folder in your local computer, add files to the folder, and then go to the `assets` on Github to upload the folder
* Use the project ID for the folder name
* Use the name below for file names
  * `teaser.png`: A teaser image is necessary for each project
  * `paper.pdf`: Add if you have a relevant paper
  * `video.mp4`: Add if you have a relevant video
 

## Acknowledgement
This website is built and managed by Hyejin Im and Milan Dahal.

Thanks to Nam Wook Kim for the original website templates.
