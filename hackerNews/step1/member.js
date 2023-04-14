const requestOptions = {
  method: "GET",
  redirect: "follow",
};
//var사용하지 않습니다 - 호이스팅
fetch(
  "http://192.168.10.78:9000/member/jsonMyBatisMemberList.jsp",
  requestOptions
)
  .then((response) => response.text())
  .then((result) => {
    const jsonDoc = JSON.parse(result);
    //console.log(jsonDoc.length);
    for (let i = 0; i < jsonDoc.length; i++) {
      document.write(
        `번호 : ${jsonDoc[i].MEM_NO} 아이디 : ${jsonDoc[i].MEM_ID}`
      );
    }
  })
  .catch((error) => console.log("error", error));
