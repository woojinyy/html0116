


const xhr = new XMLHttpRequest();
const NEWS = "https://api.hnpwa.com/v0/news/1.json";
//@id 게시물마다의 키값
const CONTENT = "https://api.hnpwa.com/v0/item/@id.json";
xhr.open("GET", NEWS, false);
xhr.send();

const news = JSON.parse(xhr.responseText);
const ul = document.createElement("ul");

//해시이벤트처리
//해시값이 변경되면 호출된다
window.addEventListener("hashchange", function () {
  console.log("해시가 변경됐습니다.");
  console.log(location.hash); //#34577246
  const id = this.location.hash.substring(1);
  xhr.open("GET", CONTENT.replace("@id",id), false);
  console.log("before"+CONTENT);
  console.log("after"+CONTENT.replace("@id",id));
  xhr.send();
  const content = JSON.parse(xhr.responseText)
  console.log(content);
});
for (let i = 0; i < 10; i++) {
  const li = document.createElement("li");

  const a = document.createElement("a");
  a.href = `#${news[i].id}`;
  a.innerHTML = `${news[i].title} (${news[i].comments_count}${news[i].id});`;

  li.appendChild(a);
  ul.appendChild(li);
} //end of for

document.querySelector("#title").appendChild(ul);
const title = document.querySelector("#title");
