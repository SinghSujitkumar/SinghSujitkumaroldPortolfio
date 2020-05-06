const experienceList = document.querySelector('#experience');
function renderExperience(doc){

    let job = document.createElement('div');
    let comp = document.createElement('h1');
    let role = document.createElement('h2');
    let certi = document.createElement('a');
    certi.innerHTML = "<i class='fas fa-2x fa-file-pdf'></i>";
    certi.setAttribute('target','_blank');
    certi.setAttribute('href',doc.data().certi);
    let duration = document.createElement('h4')
    let des  = document.createElement('p');
    // role.insertAdjacentText= doc.data().role;
    comp.textContent = doc.data().company;
    role.textContent = doc.data().role;
    duration.textContent = doc.data().duration;
    des.textContent = doc.data().des;
    job.setAttribute('class','job');
    // comp.setAttribute('style','color: #eece1a;');
    // job.setAttribute('style','text-align:center;');
    // des.setAttribute('style','text-align:center;')
    job.append(comp);
    job.append(role);
    job.append(duration);
    job.appendChild(certi);
    job.append(des);
    experienceList.appendChild(job);
    
    // var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    // d.setUTCSeconds(doc.data().start['seconds']);
    // console.log(d.getFullYear());

}
// getting Experience data
db.collection('Experience').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderExperience(doc);
    });
});