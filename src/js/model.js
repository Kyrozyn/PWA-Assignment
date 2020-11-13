import {del, getall, save} from "./db";


export function saveClub(){
    let image = document.getElementById('image_team').src;
    let name = document.getElementById('title_team').textContent = response.name
    let urlParams = new URLSearchParams("?" + window.location.hash.split("?")[1]);
    let id = urlParams.get("id");
    let data = {
        id: id,
        image: image,
        name: name,
    }
    save(data).then(function (){
        // alert('Club ' + name + ' Berhasil ditambahkan ke favorit anda!')
    }).catch(function (){
        // alert('Club gagal disimpan menjadi favorit');
    })
}

export function deleteClub(id){
    return del(id).then(function (){
        // alert('Club ' + name + ' Berhasil dihapus dari daftar favorit anda');
        return true;
    }).catch(function (){
        alert('Club gagal dihapus dari daftar favorit anda');
        return false;
    })
}

export function tampilsemuafav(){
    getall().then(function (res){
        console.log(res);
        if(!res.length==0){
            res.forEach(insertrow)
            function insertrow(item, index){
                let table = document.getElementById('allclub');
                let row = table.insertRow(-1);
                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                cell1.innerText = item.name;
                if (item.image == null) {
                    cell2.innerHTML = '<a href="#team?id=' + item.id + '"><img src="https://upload.wikimedia.org/wikipedia/en/d/d1/Image_not_available.png" class="responsive-img"></a>';
                } else {
                    cell2.innerHTML = '<a href="#team?id=' + item.id + '"><img src="' + item.image + '" class="responsive-img"></a>';
                }
            }
        }
        else{
            document.getElementById('status').innerText = "Club Favorit kamu Kosong!"
        }
    })

}