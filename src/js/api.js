import {save, teamexist} from "./db";
import {deleteClub} from "./model";

const ligaid = 2001;
const apikey = '34bd7bd813d441578a703b522b305500';
export function getTeams() {
    let urlParams = new URLSearchParams("?" + window.location.hash.split("?")[1]);
    let idParam = urlParams.get("id");
    // console.log("?"+window.location.hash.split("?")[1])
    fetch('https://api.football-data.org/v2/teams/' + idParam, {
        headers: {'X-Auth-Token': apikey}
    })
        .then(function (response) {
            if (response.status !== 200) {
                console.log('Error : ' + response.status);
                handleData(500)
                return;
            }
            response.json().then(function (data) {
                handleData(200, data)
            })
        }).catch(function (error) {
        handleData(500);
    });

    function handleData(status, response) {
        console.log(status)
        if (status === 200) {
            teamexist(idParam).then(function (res) {
                if(res){
                    document.getElementById('button_delete').style.display = "block";
                    document.getElementById('button_fav').style.display = "none";
                }
                else{
                    document.getElementById('button_delete').style.display = "none";
                    document.getElementById('button_fav').style.display = "block";
                }
            })
            console.log(response)
            if (response.crestUrl == null) {
                document.getElementById('image_team').src = 'https://upload.wikimedia.org/wikipedia/en/d/d1/Image_not_available.png';
            } else {
                document.getElementById('image_team').src = response.crestUrl;
            }
            document.getElementById('title_team').textContent = response.name;
            document.getElementById('info_alamat_team').textContent = response.address;
            document.getElementById('info_warna_club').textContent = response.clubColors;
            document.getElementById('info_email_club').textContent = response.email;
            document.getElementById('info_tahun_team').textContent = response.founded;
            document.getElementById('info_telp_club').textContent = response.phone;
            document.getElementById('button_delete').style.display = "none";
            document.getElementById('buttonfav').onclick = function () {
                let data = {
                    id: idParam,
                    image: document.getElementById('image_team').src,
                    name: document.getElementById('title_team').textContent,
                }
                //ASYNC function ALWAYS RETURN PROMISE???????!@@#!!##*@*&*#@*#*&@#*&@*&
                teamexist(idParam).then(function (res) {
                        // console.log(res)
                        if (res) {
                            // alert('Tim sudah ada di favorit tim kamu!')
                            M.toast({html: 'Tim sudah ada di favorit tim kamu!'})
                        } else {
                            save(idParam,data).then(function () {
                                // alert('Tim berhasil ditambahkan ke favorit anda!')
                                M.toast({html: 'Tim berhasil ditambahkan ke favorit anda!'})
                                document.getElementById('button_delete').style.display = "block";
                                document.getElementById('button_fav').style.display = "none";
                            }).catch(function () {
                                alert('Tim gagal ditambahkan ke favorit anda :(')
                            })
                        }

                    }
                ).catch(function () {
                    alert('Gagal mengambil info tim.')
                })
            }
            document.getElementById('buttondelete').onclick = function (){
                deleteClub(idParam).then(function (res){
                    if (res){
                        // alert('Club Berhasil dihapus dari daftar favorit anda')
                        M.toast({html: 'Club Berhasil dihapus dari daftar favorit anda'})
                        document.getElementById('button_delete').style.display = "none";
                        document.getElementById('button_fav').style.display = "block";
                    }
                    else {
                        alert('Club gagal dihapus dari daftar favorit anda')
                    }
                    }
                )
            }
        } else {
            document.getElementById('info').style.display = "none";
            document.getElementById('buttonfav').style.display = "none";
            document.getElementById('title_team').textContent = 'Maaf gagal memuat informasi team..';
        }
    }
}

export function getAllTeams() {
    fetch('https://api.football-data.org/v2/competitions/' + ligaid + '/teams', {
        headers: {'X-Auth-Token': apikey}
    })
        .then(function (response) {
            if (response.status !== 200) {
                console.log('Error : ' + response.status);
                handleData(500)
                return;
            }
            response.json().then(function (data) {
                handleData(200, data)
            })
        }).catch(function (error) {
        handleData(500);
    });

    function handleData(status, response) {
        console.log(status)
        if (status === 200) {
            // $('#image_team').attr('src', response.crestUrl);
            // $('#title_team').text(response.name);
            console.log(response)
            response.teams.forEach(insertRowTeam);

            function insertRowTeam(item, index) {
                let table = document.getElementById('allclub');
                let row = table.insertRow(-1);
                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                cell1.innerText = item.name;
                // console.log(item.crestUrl)
                if (item.crestUrl == null) {
                    cell2.innerHTML = '<a href="#team?id=' + item.id + '"><img src="https://upload.wikimedia.org/wikipedia/en/d/d1/Image_not_available.png" class="responsive-img"></a>';

                } else {
                    cell2.innerHTML = '<a href="#team?id=' + item.id + '"><img src="' + item.crestUrl + '" class="responsive-img"></a>';
                }

            }
        } else {
            document.getElementById('title_team').textContent = 'Maaf gagal memuat informasi team..';
        }
    }
}
