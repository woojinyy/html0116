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
//칼럼은 배열로 받을 수 있다= 타입이 같아
let videoItem;
const videoShow = (id, title, description, channelTitle) => {
  //<pre> 줄바꿈 그대로 유지하면서 보여준다
  videoItem = `
  <section class="detail">
  <iframe id="player" type="text/html" width="640" height="360"
  src="http://www.youtube.com/embed/${id}"
  frameborder="0"></iframe>
  <h2>${title}<h2>
  <h3>${channelTitle}<h3>
  <pre class="description">${description}</pre>
  <div>
    <a href ="./youtube.html">이전페이지</a>
    &nbsp;
    <a href ="javascript:search('손흥민')">이전페이지2</a>
    </div>
  </section>
  `;
  document.querySelector("#root").innerHTML = videoItem;
};
//사용자가 입력한 검색어로 조건 검색 구현하기
const search = (query) => {
  const ajax = new XMLHttpRequest();
  const videoList = [];
  const key = "AIzaSyBDEIy9NwR-tkmaC0REb_yWytU9IDrzP9E";
   const search_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&q=${query}&key=${key}`;
  //const search_URL = `http://192.168.10.47:5500/google/youtube/step4/sample.json`;
  ajax.open("GET", search_URL, false);
  ajax.send();
  const most = JSON.parse(ajax.response);
  const items = most.items;
  let items2;
  items2 = most.items.map((item) => ({ ...item, id: item.id.videoId }));
  console.log(items2); //
  console.log(items.length); //25
  videoList.push(`<ul class="videos">`);
  //for(let i =0;i<items.length;i++){
  items2.map((video) => {
    //25번 반복 25개의 li  (ul태그로 감싸여있는)
    //자바스크립트에서는 파라미터로 값을 넘길 때 반드시 싱글쿼테이션'' 또는 더블 쿼테이션""을 붙여야 값으로 인정된다.
    //안붙이면 XXX is not defined
    //비디오 제목의 경우 특수문자(괄호문제) 배제하는 정규식을 이용하기
    const reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
    const str = video.snippet.title.replace(reg, "");
    videoList.push(
      `<li class ="container" onclick="videoShow('${video.id}','${str}','${video.snippet.description}','${video.snippet.channelTitle}')">`
    );
    videoList.push(`<div class ="video">`);
    videoList.push(
      `<img class = "thumbnail" src='${video.snippet.thumbnails.medium.url}'/>`
    );
    videoList.push("<div>");
    videoList.push(`<p class="title"> ${video.snippet.title} </p>`);
    videoList.push(
      `<p class="channelTitle"> ${video.snippet.channelTitle}</p>`
    );
    videoList.push(`</div>`);
    videoList.push(`</div>`);
    videoList.push(`</li>`);
    console.log("사용자가 입력한 bts받음" + query);
  }); //end of map
  document.querySelector("#root").innerHTML = videoList.join("");
  videoList.push(`</ul>`);
}; //end of search
