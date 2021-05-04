let contentGridElement = document.getElementById("contentGrid");

let jsonDatabase = [
  {
    "platform": "Youtube",
    "pic": "https://p1.pxfuel.com/preview/386/964/836/youtube-laptop-notebook-online-royalty-free-thumbnail.jpg",
    "link": "youtube.html",
    "para": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus turpis massa tincidunt dui ut. "
  },
  {
    "platform": "Facebook",
    "pic": "https://live.staticflickr.com/65535/51014491501_4ca3ac7f96_b.jpg",
    "link": "facebook.html",
    "para": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus turpis massa tincidunt dui ut. "
  },
  {
    "platform": "Instagram",
    "pic": "https://images.pexels.com/photos/5744248/pexels-photo-5744248.jpeg?cs=srgb&dl=pexels-solen-feyissa-5744248.jpg&fm=jpg",
    "link": "instagram.html",
    "para": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus turpis massa tincidunt dui ut. "
  }
]

for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}


function createElementProper(incomingJSON) {

  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add("contentItem");

  let newContentHeader = document.createElement("DIV");
  newContentHeader.classList.add("contentHeader");
  newContentElement.appendChild(newContentHeader);

  let newContentTitle = document.createElement("H1");
  newContentTitle.classList.add("contentTitle");
  newContentTitle.innerText = incomingJSON["platform"];
  newContentHeader.appendChild(newContentTitle);

  let newContentLink = document.createElement("a");
  newContentLink.setAttribute('href', incomingJSON["link"]);
  // newContentArrow.text = "My anchor text";
  newContentHeader.appendChild(newContentLink);
  var arrow = document.createElement('span');
    arrow.setAttribute("class", "fa fa-arrow-circle-right");
    newContentLink.appendChild(arrow);


  let newContentPic = document.createElement("IMG");
  newContentPic.classList.add("contentPic");
  newContentPic.src = incomingJSON["pic"];
  newContentElement.appendChild(newContentPic);

  let newContentPara = document.createElement("p");
  newContentPara.classList.add("contentPara");
  newContentPara.innerText = incomingJSON["para"];
  newContentElement.appendChild(newContentPara);


  contentGridElement.appendChild(newContentElement);
}
