
import MainPage from './components/MainPage.js';
import ProjectPage from './components/ProjectPage.js';
import Navbar from './components/Navbar.js';
import People from './components/People.js';



Promise.all([
      d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vSDp2eohTdft9FqTUidRuLgD675fvlOm653imLF6lS5oAfjGZFkNzYmREdS5cu0yQvUeEhlqaD4TffR/pub?output=csv"),
      d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vTU27Jgb4L1K2x0BIIj_1ykcwRYBk7HYthA8dy5vqRgyxsj519xImlZAck34ju4hrDKJl0lhM5SDQM7/pub?output=csv"),
      d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vQka0KPDQVSEPrSg9So_KLygCMEzDKTY0zNPJJiK2zqQbN4ykQeNFkOl85DAs9l-xi3r0hMz9_qa1Ix/pub?output=csv"), 
      d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vRKR6OxmqVtY4axluhHwRsS7igl1X37l1Ect5g56zn_lBw9--L_I0OSc8yu-n5M6uPHA7FaN_bJuDdI/pub?output=csv") 
      ])
      .then(([about, websites, projects, people]) => {
        const data = {about, websites, projects, people};
        console.log(data);

    // determine what page to render
    let params = new URLSearchParams(window.location.search);
    if (params.get('project')==null){
        MainPage(data);
    }else{
        let project = data.projects.find(d=>d.id===params.get('project'));
        Navbar('project')
        ProjectPage(project, about);
    }    
});



