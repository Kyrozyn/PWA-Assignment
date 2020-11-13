import {openDB} from 'idb';

const dbPromise = openDB('kyro-store',1, {
    upgrade(db){
        db.createObjectStore('kyro')
    }
});

export async function save(id, item) {
    dbPromise.then(function (db){
        let tx = db.transaction('kyro', 'readwrite');
        let store = tx.objectStore('kyro');
        store.add(item,id);
        return tx.complete;
    }).then(function (){
        console.log('berhasil disimpan')
    }).catch(function (res){
        console.log('gagal disimpan '+ res)
    })
}

export async function del(id){
    dbPromise.then(function (db){
        let tx = db.transaction('kyro', 'readwrite');
        tx.objectStore('kyro').delete(id);
    }).then(function (){
        console.log('berhasil dihapus')
    })
}

export async function getall(){
    return dbPromise.then(function (db){
        let tx = db.transaction('kyro','readonly')
        let store = tx.objectStore('kyro');
        let data = store.getAll()
        //console.log(data)
        return data;
    })
}

export async function teamexist(id){
    return dbPromise.then(async db => {
        let tx = await db.transaction('kyro', 'readonly')
        let data = await tx.objectStore('kyro').get(id)
        return data == undefined ? false : true
    })


}