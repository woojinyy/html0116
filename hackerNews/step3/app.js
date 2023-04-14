const xhr = new XMLHttpRequest();
const NEWS = "https://api.hnpwa.com/v0/news/1.json";
xhr.open("GET", NEWS, false);
xhr.send();

//console.log(xhr.responseText);
const news = JSON.parse(xhr.responseText);
console.log(news);
//let element = document.createElement(tagName[, options]);
const ul = document.createElement("ul");
for (let i = 0; i < 10; i++) {
  //생성한 ul태그안에 li태그를 배열길이 만큼 반복
  const li = document.createElement("li");
  //제목 클릭 상세페이지 이동 링크 추가
  const a = document.createElement("a");
  a.href="#"
  //  li태그에 기사제목 붙이기
  a.innerHTML =`${news[i].title} (${news[i].comments_count});`
  //ul 태그 하위에 li태그 붙이기 위해 appendChild 사용 append 화면분리X
  //var aChild = element.appendChild(aChild);
  li.appendChild(a)
  ul.appendChild(li);
} //end of for
//console.log(ul);
document.querySelector("#title").appendChild(ul);
/* document.write(xhr.responseText);//document는 html전체를 받는객체여서 js에서 사용못해 */
//div HTML.Elemenet받기
const title = document.querySelector("#title");
//console.log(title);
//요청으로 반환되는 타입은 이미 text이므로
// JSON.stringify 는 사용할 필요가 없음
//JSON.parse사용해서 구조 분해 하면 된다.
//title.innerText= xhr.responseText
