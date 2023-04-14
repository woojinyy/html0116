const requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch("https://api.hnpwa.com/v0/news/1.json", requestOptions)
  .then((response) => response.json()) //이걸 받아주는 게  result
  // .then((result) => console.log(result)) //에러발생하면 catch가 발동
  .then((result) => {
    //ul태그를 js활용해서 생성하기
    const ul = document.createElement("ul"); /* 자바스크립트에서 ul태그 만들기 */ //DOM API 구조가 잘 안보임
    for (let i = 0; i < 10; i++) {
      const li = document.createElement("li"); //li태그를 5개 생성
      //<li>뉴스제목1</li>
      //<li>뉴스제목2</li>
      //<li>뉴스제목3</li>
      //<li>뉴스제목4</li>
      //<li>뉴스제목5</li>
      console.log(result[i].title);
      li.innerHTML = result[i].title; // 해커뉴스에서 반환값으로 제공되는 json에서 title가져오는 코드
      //for문에서 만들어진 li태그를 ul태그에 넣기
      ul.appendChild(li); /* ul태그에 붙이기 */
      //console.log(result[i].title);
    } //end of for
    //news.html문서의 body에 정의된 <div id=root><ul></ul></div>
    document.getElementById("root").appendChild(ul);
  })
  .catch((error) => console.log("error", error));
