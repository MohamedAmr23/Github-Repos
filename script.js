let theInput=document.querySelector(".get-repo input")
let getBtn=document.querySelector(".get-repo .get-btn")
let showDate=document.querySelector(".show-data")

getBtn.onclick=function(){
    get_repo()
}


function get_repo(){
    if(theInput.value==""){
       showDate.innerHTML='<span>Please Write Github Username.</span>'
    }else{
        fetch(`https://api.github.com/users/${theInput.value}/repos`)
        .then((response)=>response.json())

        .then((repos)=>{ showDate.innerHTML=''
        //loopon repos
        repos.forEach(repo => {
            //create main div
            let mainDiv=document.createElement("div")

            //create text to main div
            let repoName=document.createTextNode(repo.name)

            //append text to main div
            mainDiv.appendChild(repoName)

            //create link
            let url=document.createElement("a")

            //create text to main link
            let urlText=document.createTextNode("visit")

            //appnend text to main div
            url.appendChild(urlText)

            //add link
            url.href=`https://github.com/${theInput.value}/${repo.name}`

            //set attribute
            url.setAttribute("target","_blank")

            //append link to maindiv
            mainDiv.appendChild(url)
            //create starts
            let starSpan=document.createElement("span")
            //create number of star
            let starNumber=document.createTextNode(`Stars ${repo.stargazers_count}`)

            starSpan.appendChild(starNumber)

            mainDiv.appendChild(starSpan)

            mainDiv.className='repo-box'
            //append main div to container
            showDate.append(mainDiv)
        });
    
    
    
    
    
    })

       
    }
}