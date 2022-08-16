// medicalList에서 검색 눌렀을 때

const requestMedical = new XMLHttpRequest();
const onclickMedical = () => {
  requestMedical.open("POST", "/medicals/", true);
  requestMedical.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded"
  );
  var location = document.getElementById("location");
  var loc = location.options[location.selectedIndex].text;
  var query = document.getElementById("query-loc").value;
  console.log(loc, query);
  requestMedical.send(JSON.stringify({ loc: loc, query: query }));
};

requestMedical.onreadystatechange = () => {
  if (requestMedical.readyState === XMLHttpRequest.DONE) {
    if (requestMedical.status <= 400) {
      const { list, query, loc } = JSON.parse(requestMedical.response);
      console.log(query, loc);
    }
  }
};
