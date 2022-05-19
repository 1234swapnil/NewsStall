//let api = '8c258ac1a22c493687598dea0fa9eb89';
//let type = document.getElementsByName('btnradio');
//let selected = Array.from(type).find(radio  => radio);
let source ='bbc-news';
console.log(source);
console.log("new channel");
let button = document.getElementById('showNews');
button.addEventListener('click' , function(){
  let type = document.getElementsByName('btnradio');
      let selected = Array.from(type).find(radio  => radio.checked);
    let source =selected.value;
    console.log(source);
       let newsAccordian = document.getElementById('accordion');
     const xhr = new XMLHttpRequest;
      xhr.open('get',`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=8c258ac1a22c493687598dea0fa9eb89`, true);
     let newsHtml = "";
      xhr.onload = function(){
     if(this.status==200){
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
       // console.log(articles);
         let newsHtml = "";
        articles.forEach(function(element, index) {
             //console.log(element, index)
            let news = `<div class="accordion-item">
            <h2 class="accordion-header" id="heading${index}">
              <button class="accordion-button text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                ${element["title"]}
              </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading${index}" data-bs-parent="#accordion">
              <div class="accordion-body">
               ${element["content"]}<a href="${element['url']}" target="_blank" >Read more here</a>
              </div>
            </div>
          </div>`;
            newsHtml += news;
           
        });
        document.getElementById("accordion").innerHTML =newsHtml;
        //newsAccordian.innerHTML = newsHtml;
       // newsAccordian.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
  
}

xhr.send()

});