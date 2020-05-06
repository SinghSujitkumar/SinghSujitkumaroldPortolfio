const aboutList = document.querySelector('.bio');
function renderaboutme(doc){

    let aboutme = document.createElement('p');
    aboutme.textContent = doc.data().bio;
    aboutList.appendChild(aboutme);
    
    // var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    // d.setUTCSeconds(doc.data().start['seconds']);
    // console.log(d.getFullYear());

}
// getting Bio data
db.collection('Bio').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderaboutme(doc);
    });
});