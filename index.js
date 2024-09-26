async function checkboxlocalStorage(){
class Stogage {
    constructor(name){
      this.name = name;
      this.hash = {};
      
      let text = localStorage.getItem(this.name);
      if(text)
        this.hash = JSON.parse(text);
      
      this.save();  
    }
  
    get(id){
      return this.item.find(item=>item.id===id)
    }
  
    add(id, data){
      this.hash[id] = data;
      this.save();
    }
  
    del(id){
      delete this.hash[id];
      this.save();
    }

    save(){
      this.list = Object.values(this.hash);
      
      const text = JSON.stringify(this.hash);
      
      localStorage.setItem(this.name, text);      
    }
    
}

const checkbox_store = new Stogage('checkbox_store');

checkbox_store.list.forEach(item=>{
  if( item.state === "on" )
     return $('#' + item.id).prop('checked', item.state);
  checkbox_store.del(item.id);
});

$('body').on('change', '.check', function(event){
  let id = $(this).attr('id');
  let state = event.currentTarget.checked?"on":undefined;
  checkbox_store.add(id, {
    id: id,
    state: state
  });
});
}
checkboxlocalStorage()

///////////////////////////////////////////////////////////////////////////////////// 
async function addCheckboxUrl(){
const settings = [];

document.querySelector(".data").addEventListener("click", function () {
  settings.splice(0, settings.length);

  document
    .querySelectorAll('.data input[type="checkbox"]:checked')
    .forEach((el) => {
      settings.push(el.getAttribute("data-select"));
    });

  getLink(settings);
});

function getLink(param) {
  let blacklistFlags = "";

  if (param.length > 0) {
    blacklistFlags = `blacklistFlags=${param.join()}&`;
  }

  let url = `https://sv443.net/jokeapi/v2/joke/Any?${blacklistFlags}type=twopart`;

  localStorage.setItem('url', url);
}
}
addCheckboxUrl()

async function init(){
  let url1 = localStorage.getItem('url');

const container = document.getElementById('results');
NProgress.start();
NProgress.configure({ trickleSpeed: 500 });
const xhr = new XMLHttpRequest();
    xhr.open('GET', url1, true);
    xhr.send(null);
    xhr.onload = function() {
            const data = JSON.parse(xhr.responseText);
            NProgress.done();
            for (let [one, two] of Object.entries(data)) {
                container.insertAdjacentHTML('beforeend', `
                <div id="${one}" onselectstart="return false" onmousedown="return false">
                <div onselectstart="return false" onmousedown="return false">${two}</div>
                <hr/>
                </div>
            `);
      }
  };


let favorit = document.getElementById('favorit');
let drophistory = JSON.parse(localStorage.getItem("shutka")) || [];

const liMaker = (text) => {
    const li = document.createElement('div');
    li.textContent = text;
    favorit.prepend(li);
  }

drophistory.forEach(item => {
    liMaker(item);
  });
}
init()

async function showFavorit(){
  let show = document.getElementById("show_favorit");
  show.addEventListener('click', function (e){
    adddd = document.getElementById('favorit');
    adddd.style = "display: block";
  })
}
showFavorit()

async function FavoritLength(){
  var out = JSON.parse(localStorage.shutka).length;
 $('#lengthFavorit').html(out);
}
FavoritLength()

async function clearFavorit(){
let clear = document.getElementById("clear");
clear.addEventListener('click', function (e){
  favorit.innerHTML = '';
  localStorage.removeItem('shutka');
  var out = JSON.parse(localStorage.shutka).length;
  $('#lengthFavorit').html(out);
})
}
clearFavorit()

click = document.getElementById('results');
click.addEventListener('click', function (e) {
    click1 = document.getElementById('delivery');
        click1.style = "display: block";
    click2 = document.getElementById('zvezda');
        click2.style = "display: block";
    click2.addEventListener('click', add_localStorage, false);
        function add_localStorage() {
            let myList = document.getElementById('setup').textContent;
            let myList1 = document.getElementById('delivery').textContent;
            let favorit = document.getElementById('favorit');
            let myList2 = myList + " {} " + myList1;
            let drophistory = JSON.parse(localStorage.getItem("shutka")) || [];
                drophistory.push(myList2);
                localStorage.setItem("shutka", JSON.stringify(drophistory));

            const liMaker = (text) => {
                const li = document.createElement('li');
                li.textContent = text;
                favorit.prepend(li);
            }

            favorit.innerHTML = ``;

            drophistory.forEach(item => {
                liMaker(item);
            });
            
        
            click2.removeEventListener('click', add_localStorage, false);
            let show = document.getElementById("show_favorit");
            show.innerHTML = '';
            var out = JSON.parse(localStorage.shutka).length;
             $('#lengthFavorit').html(out);
        }
    click3 = document.getElementById('setup');
    click3.addEventListener('click', function (e) {
        location.reload()
    })
})
////////////////////////////////////////////////////////////////////////////////////////////////

