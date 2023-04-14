//선언적 함수로 만들 수 있는 반복부분은?
/* 
xhr.open("GET", NEWS, false);
xhr.send(); 
*/
const divcontent = document.createElement("div"); //제목에 대한 상세내용
const xhr = new XMLHttpRequest();
const container = document.querySelector("#title");
const NEWS = "https://api.hnpwa.com/v0/news/1.json";
//@id 게시물마다의 키값
const CONTENT = "https://api.hnpwa.com/v0/item/@id.json";

//아래 함수의 사용처는 두군데
//요청 URL만 바뀌고 나머지는 같다 파라미터에 url을 줬기때문에

function getData(url) {
  xhr.open("GET", url, false);
  xhr.send();
  return JSON.parse(xhr.responseText);
}

const news = getData(NEWS);
const ul = document.createElement("ul");

//해시이벤트처리
//해시값이 변경되면 호출된다
window.addEventListener("hashchange", function () {
  const id = this.location.hash.substring(1);
  const newsContent = getData(CONTENT.replace("@id", id));
  const h1 = this.document.createElement("h1");
  container.innerHTML = `
  <h1>${newsContent.title}</h1>
  <div>
    <a href="#">목록</a>
  </div>
  `;
}); //end of hashchange

for (let i = 0; i < 10; i++) {
  const div = document.createElement("div");
  div.innerHTML = `
  <li>
  <a href='#${news[i].id}'>
  ${news[i].title}(${news[i].comments_count})
  </a>
  </li>
  `;
  ul.appendChild(div.firstElementChild);
} //end of for

container.appendChild(ul);
container.appendChild(divcontent);
