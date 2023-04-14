const ajax = new XMLHttpRequest(); //비동기통신
const videoList = []; //원소가 늘어나는거라 let쓰는거 아니야
const key = "AIzaSyBDEIy9NwR-tkmaC0REb_yWytU9IDrzP9E";
const MOST_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${key}`;
const search_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${key}`;
ajax.open("GET", search_URL, false);
ajax.send();

const most = JSON.parse(ajax.response);
const items = most.items;
console.log(items); //이걸 꺼내서 뿌려보자
console.log(items.length); //25
videoList.push(`<ul class="videos">`);
for (let i = 0; i < items.length; i++) {
  //25번 반복 25개의 li  ul태그로 감싸여있는
  videoList.push(`<li class ="container">`);
  videoList.push(`<div class ="video">`);
  videoList.push(
    `<img class = "thumbnail" src='${items[i].snippet.thumbnails.medium.url}'/>`
  );
  videoList.push("<div>");
  videoList.push(`<p class="title"> ${items[i].snippet.title} </p>`);
  videoList.push(
    `<p class="channelTitle"> ${items[i].snippet.channelTitle}</p>`
  );
  videoList.push(`</div>`);
  videoList.push(`</div>`);
  videoList.push(`</li>`);
  /*   console.log(items[i].snippet.thumbnails.medium.url);
  console.log("내용 : " + items[i].snippet.description);
  console.log("제목 :" + items[i].snippet.title); */
}
videoList.push(`</ul>`);
document.querySelector("#root").innerHTML = videoList.join("");

/* function onkeypress(){

} */
/* const onkeypress = () => {
  console.log("onkeypress가 엔터인지?아닌지?" + event.keyCode);
}; */

const keyword = document.querySelector("#keyword");
keyword.addEventListener("keypress", (event) => {
  console.log("onkeypress가 엔터인지 아닌지" + event.keyCode);
  //사용자가 입력한 검색어를 찾는 함수 호출
  handleSearch();
});
//사용자가 입력한 검색어 읽어오기
const handleSearch = () => {
  const user = document.querySelector("#keyword").value;
  console.log("사용자가 입력한 검색어==>" + user);
  search(user);
};
//사용자가 입력한 검색어로 조건 검색 구현하기
const search = (query) => {
  console.log("사용자가 입력한 bts받음" + query);
};
