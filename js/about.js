const experienceList = document.querySelector('#experience');
function renderExperience(doc){

    let job = document.createElement('div');
    let comp = document.createElement('h1');
    let role = document.createElement('h2');
    let certi = document.createElement('a');
    certi.innerHTML = ' <svg style = "width:10%;height:2%;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M13 21l2-1l2 1v-7h-4m4-5V7l-2 1l-2-1v2l-2 1l2 1v2l2-1l2 1v-2l2-1m1-7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7v-2H4V5h16v10h-1v2h1a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-9 5H5V6h6m-2 5H5V9h4m2 5H5v-2h6z" fill="#ffffff"/></svg>';
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