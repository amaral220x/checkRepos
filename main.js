var btn = document.getElementById("btnInput");
var divBox = document.getElementById("box");
btn.onclick = function add() {
    var textInput = document.getElementsByName('user')[0].value;
    textAux = textInput.split('+');
    for (var i = 0; i < textAux.length; i++) {
        textAux[i] = textAux[i].trim()
    }
    if (textAux.length < 2) {
        var gitUrl = 'https://api.github.com/users/' + textInput + '/repos';
        axios.get(gitUrl)
            .then(function(response) {
                var ulList = document.createElement('ul');
                var res = response.data;
                divBox.innerHTML = "";
                var img = document.createElement('img');
                var aImg = document.createElement('a');
                img.setAttribute('src', res[0].owner.avatar_url);
                aImg.setAttribute('href', res[0].owner.html_url);
                aImg.appendChild(img);

                divBox.appendChild(aImg);
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

    } else {
        divBox.innerHTML = "";
        for (var i = 0; i < textAux.length; i++) {
            textAux[i] = 'https://api.github.com/users/' + textAux[i] + '/repos';
        }
        for (var i = 0; i < textAux.length; i++) {
            axios.get(textAux[i])
                .then(function(response) {

                    var ulList = document.createElement('ul');
                    var res = response.data;
                    var img = document.createElement('img');
                    var aImg = document.createElement('a');
                    console.log(res[0])
                    img.setAttribute('src', res[0].owner.avatar_url);
                    aImg.setAttribute('href', res[0].owner.html_url);
                    aImg.appendChild(img);

                    divBox.appendChild(aImg);
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
                    console.log('.')
                })
                .catch(function(error) {
                    console.warn(error);
                });

        }
    }
}