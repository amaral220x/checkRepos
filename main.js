var btn = document.getElementById("btnInput");
var divBox = document.getElementById("box");
btn.onclick = function add() {
    var textInput = document.getElementsByName('user')[0].value;
    var gitUrl = 'https://api.github.com/users/' + textInput + '/repos';
    axios.get(gitUrl)
        .then(function(response) {
            var ulList = document.createElement('ul');
            var res = response.data;
            divBox.innerHTML = "";
            for (responses of res) {
                var list = document.createElement('li');
                var repos = document.createTextNode(responses.name);
                var aList = document.createElement('a');
                aList.appendChild(repos);
                aList.setAttribute('href', responses.svn_url);
                list.appendChild(aList);
                ulList.appendChild(list);
            }
            divBox.appendChild(ulList);
        })
        .catch(function(error) {
            console.warn(error);
        });
}