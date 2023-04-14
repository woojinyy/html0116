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
//뉴스목록 가져오기
function newsList() {
  const news = getData(NEWS);
  //태그를 담을 배열선언
  const getList = [];
  //태그 담기전에  ul태그 먼저 담기
  getList.push(`<ul>`);
  for (let i = 0; i < 10; i++) {
    const div = document.createElement("div");
    getList.push(`
    <li>
    <a href='#${news[i].id}'></a>
    ${news[i].title}(${news[i].comments_count})
    </li>
    `);
    getList.push("</ul>");
    container.innerHTML = getList.join("")
  }
}

//뉴스 상세 내용 보기
function newDetail() {
  const id = this.location.hash.substring(1);
  const newsContent = getData(CONTENT.replace("@id", id));
  container.innerHTML = `
<h1> ${newsContent.title}</h1>
<div>
<a href="#">목록</a>;
</div>
  `;
}
//라우터에서 화면 전환하기
function router() {
  //글 목록의 링크는# 그러면 location.href에 #이 들어왔을 텐데
  //왜 참???? location.href에 #만 들어오면 빈값을 반환
  //그래서 작동
  const routePath = location.hash;
  //첫 진입일 때는 newsList를 호출
  if (routePath === "") {
    newsList();
  } else {
    newsDetail();
  }
} //end of router
window.addEventListener("hashchange", router);
router();
