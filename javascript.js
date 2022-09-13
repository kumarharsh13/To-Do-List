    // Creating a close button
    let listItems = document.getElementsByTagName('li');
    for (let i = 0; i < listItems.length; i++) {
        let span = document.createElement('span');
        let txt = document.createTextNode('\u00D7');
        span.className = 'close'; // sets or return class attribute
        span.appendChild(txt);
        listItems[i].appendChild(span);
    }

    // Adding Feature to remove Items
    let close = document.getElementsByClassName('close');
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let x = this.parentElement;
            x.style.display = "none";
        }
    }
    // Adding Checked feature
    let list = document.querySelector('ul');
    list.addEventListener('click', function(ele) {
        console.log(ele.target.tagName);
        if(ele.target.tagName === 'LI') ele.target.classList.toggle('checked');
    }, false);

    function addItems() {
        let item=document.getElementById('addItem').value;
        let li = document.createElement('li');
        let text = document.createTextNode(item); // Converts the input to string
        li.appendChild(text);
        if(item === '') alert("Please Enter Something.....!!!!!");
        else document.getElementById('displayList').appendChild(li);
        document.getElementById('addItem').value = "";
        //console.log(item);

        let span = document.createElement('span');
        let txt = document.createTextNode('\u00D7');
        span.className = 'close'; // sets or return class attribute
        span.appendChild(txt);
        li.appendChild(span);
        
        for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
                let x = this.parentElement;
                x.style.display = "none";
            }
        }
    }