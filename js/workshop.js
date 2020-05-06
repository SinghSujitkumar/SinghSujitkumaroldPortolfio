const workshopList = document.querySelector('#workshop');
function renderWorkshop(doc){

    let workshop = document.createElement('div');
    let name = document.createElement('h1');
    let twitter = document.createElement('iframe'); 
    name.textContent = doc.data().name;


    workshop.setAttribute('class','job');

    twitter.setAttribute('src',doc.data().twitter_link);

    workshop.append(name);
    workshop.append(twitter);
    workshopList.appendChild(workshop);
    


}

db.collection('workshops').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderWorkshop(doc);
    });
});