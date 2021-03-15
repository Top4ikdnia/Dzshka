
let comments = [];
Comments();
document.getElementById('com-end').onclick = function(){
    event.preventDefault();
    let commentName = document.getElementById('one');
    let comment = {
        name: commentName.value,
       
    }
    commentName.value = ''
    comments.push(comment)
   saveComments();
   showComments();
}
function saveComments(){
    localStorage.setItem('comments',JSON.stringify(comments));
}
function Comments(){
    if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
    showComments();
}
function showComments(){
    let commentField = document.getElementById('hax')
    let out = '';
    comments.forEach(function(item){
        out += `<p class ="alert alert-success">${item.name}</p>`
    })
    commentField.innerHTML = out;
}