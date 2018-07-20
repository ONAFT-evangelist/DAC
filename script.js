var users = ["Ivan", "Stepan", "Petro"];
var rights = [1, 2, 3, 9];
var matr = [];
var l;

/****************************
*generate matrix of rights: *
* 0 - root                  *
* 9 - no rights             *
* 1 - read                  *
* 2 - write                 *
* 3 - read-write            *
****************************/
function generate_matrix () {
    console.log("start generate matrix");
    var a = arguments[0];
    var d = 5;
    var item;
    for (var i = 0; i < users.length; i++) {
        matr[i] = [];
        for (var j = 0; j < d; j++) {
        item = rights[Math.floor(Math.random() * rights.length)];
        if (i == a){
            matr[i][j] = 0;
        }
        else {matr[i][j] = item;}
    }    }
    console.log("matrix generated");
    console.log(matr);
    }
/********************************
* function to check user access *
********************************/
function check_rights () {
    var inpt = document.getElementById("inpt").value;
    var flag;
    var c;
    for (var i = 0; i < users.length; i++) {
         if (inpt == users[i]){
        flag = 1;
             c = i;
             break;
                      }
    else {
        flag = 0;
    }
    }
    if (flag == 1){
        alert("Hello, "+inpt);
        console.log("user "+inpt+" logged in.");
        load_main(c);
                              }
    else {
        alert("GO AWAY");
    }
}

function choose_root () {
    return Math.floor(Math.random() * users.length);
}

function load_main() {
    var c = arguments[0];
    var div = document.getElementById('init');
    div.style.display="none";
    if (c != l){
    usr_part(c);
    }
    if (c == l){
    admin_part();
    }
}

function create_quit () {
        var quit = document.createElement('input');
        var adm = document.getElementById('admin');
        var usr = document.getElementById('usr');
        quit.setAttribute('type','button');
        quit.setAttribute('value','Quit');
        quit.setAttribute('class','btn btn--primary');
        quit.onclick = function() {
            console.log('user logged out.');
            var div = document.getElementById('init');
            div.style.display="flex";
            adm.style.display="none";
            usr.style.display="none";
        }
    usr.appendChild(quit);
    adm.appendChild(quit);
}

function admin_part() {
    var adm = document.getElementById('admin');
    var adm_contenet = document.getElementById('adm_content');
    var table = document.createElement('table');
    for (var i = 1; i < 6; i++){
    var tr = document.createElement('tr');   

    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');

    var read_btn = document.createElement('input');
        read_btn.setAttribute('type','button');
        read_btn.setAttribute('value','READ');
        read_btn.setAttribute('class','btn btn--primary');
    var write_btn = document.createElement('input');
        write_btn.setAttribute('type','button');
        write_btn.setAttribute('value','WRITE');
        write_btn.setAttribute('class','btn btn--primary');
    var delete_btn = document.createElement('input');
        delete_btn.setAttribute('type','button');
        delete_btn.setAttribute('value','DELETE');
        delete_btn.setAttribute('class','btn btn--primary');
    var file1 = document.createTextNode('File '+i);

    td1.appendChild(file1);
    td2.appendChild(read_btn);
    td3.appendChild(write_btn); 
    td4.appendChild(delete_btn);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    table.appendChild(tr);
}
    adm_contenet.appendChild(table);
    adm.style.display="flex";
}

function usr_part() {
    var usr = document.getElementById('usr');
    var c = arguments[0];
    var conn = '';
    var con = '';
    for(var i = 0; i < 6; i++) {
       if(matr[c][i] == 1) {
            conn = 'r'+(i+1);
           document.getElementById(conn).style.display="block";

       }
       if(matr[c][i] == 2) {
            con = 'w'+(i+1);
           document.getElementById(conn).style.display="block";

       }
        if(matr[c][i] == 3) {
             conn = 'r'+(i+1);
           document.getElementById(conn).style.display="block";

        con = 'w'+(i+1);
           document.getElementById(con).style.display="block";

       }
        else {
            
        }
    }    
    
    usr.style.display="flex";
}

window.onload = function () {
    console.log("document is ready");
    console.log("selected users as 3");
    console.log("selected documents as 5");
    l = choose_root();
    console.log("admin is choosed: "+users[l]);
    generate_matrix(l);
    create_quit();
}
