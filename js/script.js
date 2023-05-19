const hamburger =document.querySelector(".hamburger");
const navMenu =document.querySelector(".nav-menu");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach(n =>n.addEventListener("click",()=>{
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}))




var form = document.getElementById("myForm")
let allrepo = document.querySelector(".repo-with-title")
let dot = document.querySelector(".dot")

form.addEventListener('submit', function(e){
    e.preventDefault()
    var search = document.getElementById("search").value;

    var originalName = search.split(" ").join("")
    let token ='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'
    fetch(`https://api.github.com/users/${originalName}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    .then((result) => result.json())
    .then((data) =>{
        console.log(data);
        document.getElementById("profile-img").setAttribute('src',data.avatar_url )
        document.getElementById("name").innerHTML = data.name
        document.getElementById("username").innerHTML = data.login
        document.getElementById("followers").innerHTML =
         `<i class="fa-regular fa-user mt-1 mx-1" style="color:
        #7a818c;""></i> ${data.followers} followers . ${data.following} following`
        //calling location
        if (data.location != null){
            document.getElementById("location").innerHTML =`<i class="fa-solid fa-location-dot"  style="color:
            #7a818c;"></i> ${data.location}` 
        }
        else{
            document.getElementById("location").innerHTML=""
        }

    })
    //calling the repo

    
    fetch(`https://api.github.com/users/${originalName}/repos`,{
            headers: {
              Authorization:`Bearer ${token}`
            }
          })

        .then((response)=> response.json())
        .then((repositories)=>{

          for (let i = 1; i <= 6; i++){
            let repos = document.createElement('div')
            repos.className = "repos";
            document.getElementById(`repo${i}`).innerHTML =`<i class="fa-solid fa-laptop-code" style="color: #7d8590;"></i> ${repositories[i-1].name}`
            if (repositories[i-1].language != null){
                document.getElementById(`language${i}`).innerHTML =`${repositories[i-1].language}`
                if (repositories[i-1].language === "HTML"){
                    document.getElementById(`dot${i}`).style.backgroundColor="red"
                }
                else if (repositories[i-1].language === "JavaScript"){
                    document.getElementById(`dot${i}`).style.backgroundColor="#f1e05a"
                }
                else if (repositories[i-1].language === "CSS"){
                    document.getElementById(`dot${i}`).style.backgroundColor="#563d7c"
                }
                else if (repositories[i-1].language === "PHP"){
                    document.getElementById(`dot${i}`).style.backgroundColor="#4f5d95"
                }
                else if (repositories[i-1].language === "Hack"){
                  document.getElementById(`dot${i}`).style.backgroundColor="#878787"
                }
                else if (repositories[i-1].language === "Pug"){
                  document.getElementById(`dot${i}`).style.backgroundColor="#a86454"
                }
                  else if (repositories[i-1].language === "Java"){
                    document.getElementById(`dot${i}`).style.backgroundColor="#b07219"
                }
                else if (repositories[i-1].language === "Python"){
                  document.getElementById(`dot${i}`).style.backgroundColor="#3572a5"
              }
              

            }
            else{
                document.getElementById(`language${i}`).innerHTML=""
                //remove the dot
                var element = document.getElementById(`dot${i}`);
                element.parentNode.removeChild(element);
            }
            
            allrepo.appendChild(repos)
          }
        })
    })

//this one make only desktop moon icon working
// document.querySelector(".moon-btn").addEventListener("click", () => {
//   document.body.classList.toggle("dark")
// })


document.addEventListener('DOMContentLoaded', function() {
  var moonButtons = document.querySelectorAll('.moon-btn');
  moonButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      document.body.classList.toggle('dark');
    });
  });
});
  
   

   

