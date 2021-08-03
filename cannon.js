var getnum = prompt("학생수를 입력해 주십시오.");
while (getnum != getnum * 1 || getnum > 999 || getnum < 2) {
	getnum = prompt("3~999 의 값을 입력하여 주십시오.");
}
getnum = Number(getnum);

var arr = [];

for (var i = 1; i <= getnum; i++) {
	arr.push(i);
}

for (var i = 1; i <= getnum; i++) {
	var idx = Math.floor(Math.random() * (getnum - 1));
	var tmp = arr[idx];
	arr[idx] = arr[i - 1];
	arr[i - 1] = tmp;
}

var cnt = 0;
var node = [];
var text, id;
var txt, num;

var mystyle = "position: absolute; left: 50%; top: 30%; transform: translateX(-50%) translateY(-50%); height: 30rem; width: 30rem; background: linear-gradient(135deg, rgb(59, 255, 59), rgb(24, 122, 24)); border-radius: 100%; text-align: center; vertical-align: 50%; color: white; font-size: 156px; padding: 0 auto; animation: boooom; animation-duration: .75s;";

function launch() {
	if (cnt < getnum) {
		text = document.createTextNode(String(arr[cnt]));
		node.push(document.createElement("div"));
		node[cnt].style = mystyle;
		node[cnt].appendChild(text);
		document.getElementById("sky").appendChild(node[cnt]);

		txt = document.createTextNode('[' + String(cnt + 1) + '] : ' + String(arr[cnt]));
		num = document.createElement('div');
		num.appendChild(txt);
		document.getElementById('list').appendChild(num);

		let objDiv = document.getElementById("list");
		objDiv.scrollTop = objDiv.scrollHeight;

		if (cnt > 0) {
			node[cnt - 1].remove();
		}
		cnt++;
	} else {
		alert("모든 공을 발사하였습니다. 재시작 하시려면 F5를 눌러주십시오.");
	}
}

function reload(){
	window.location.reload();
}