const projectList = document.querySelector('.projects');

// create element & render project


function renderProject(doc){

    let item = document.createElement('div')
    let aytb = document.createElement('a'); 
    let ytbl = document.createElement('iframe'); 
    let namep = document.createElement('h2');
    namep.innerHTML = "<i class='fas fa-eye'></i>";
    let github_link = document.createElement('a');
    github_link.innerHTML=  "<i class='fab fa-2x fa-github'></i>";

    // let youtube_link = document.createElement('a');
    let descript  = document.createElement('a');

    namep.textContent = doc.data().Name;
    // github_link.textContent = doc.data().git;
    // ytb.textContent = doc.data().ytb;
    // descript.textContent = doc.data().des;
    aytb.setAttribute('href',doc.data().ytb);
    ytbl.setAttribute('src',doc.data().ytb);
    item.setAttribute('class','item');
    namep.setAttribute('class','btn-light');
    github_link.setAttribute('class','btn-dark');
    github_link.setAttribute('href',doc.data().git);
    
    // let ytb2 = doc.data().ytb
    // console.log(ytb)

    



    // item.appendChild(ytb);
    aytb.append(ytbl);
    item.appendChild(aytb);
    item.appendChild(namep);
    
    item.appendChild(github_link);
    // li.appendChild(descript);

    projectList.appendChild(item);
}

// getting Projects data
db.collection('Projects').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderProject(doc);
    });
});

