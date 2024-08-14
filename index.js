
function get_all_users_titles(){
  let request = new XMLHttpRequest();
  request.open('GET',"https://jsonplaceholder.typicode.com/users");
  request.responseType="json";
  request.send();
  request.onload = function(){
    let response=request.response
    document.getElementById("post").innerHTML+='';
    for(post of response){
      document.getElementById("title").innerHTML+= `<button class="user-button" onclick="handleUserClick(${post.id},this)">${post.name}  <p>${post.email}</p> <p>${post.id} </p></button><br>`;
    }
  }
}
get_all_users_titles();


function get_all_bodies(userid)
{
  let request = new XMLHttpRequest();
  request.open('GET',`https://jsonplaceholder.typicode.com/posts?userId=${userid}`);
  request.responseType="json";
  request.send();
  request.onload = function(){
    let response=request.response
    document.getElementById("post").innerHTML='';
    for(let post of response){
      document.getElementById("post").innerHTML+= `<p>${post.title}</p> <p>${post.body}</p> <p>${post.userId}</p> <hr>`;
      userid=post.userId;
    }
  }
}

get_all_bodies(1);

function handleUserClick(userid, button) {
  get_all_bodies(userid); // Fetch posts for the selected user
  get_selected(button); // Highlight the clicked button
}

function get_selected(button){
  const buttons = document.querySelectorAll('.user-button'); 
  buttons.forEach(btn => btn.style.border = ''); 
  button.style.border = "2px solid red"; 
}