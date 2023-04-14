const ajax = new XMLHttpRequest(); //비동기통신
const videoList = []; //원소가 늘어나는거라 let쓰는거 아니야
const key = "AIzaSyBDEIy9NwR-tkmaC0REb_yWytU9IDrzP9E";
const MOST_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${key}`;

ajax.open("GET", MOST_URL, false);
ajax.send(null);

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
