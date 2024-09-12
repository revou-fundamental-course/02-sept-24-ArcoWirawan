function luasSegitiga() {
    let input1 = document.getElementById('panjang-segitiga').value;
    let input2 = document.getElementById('tinggi-segitiga').value;

    let operationLuas = 0.5 * input1 * input2;

    document.write("Hasilnya adalah " + operationLuas)
}

function kelilingSegitiga() {
    let sisi_01 = document.getElementById('sisi-pertama').value;
    let sisi_02 = document.getElementById('sisi-kedua').value;
    let sisi_03 = document.getElementById('sisi-ketiga').value;

    // Gunakan parseInt(namaVar) jika menggunakan operasi pertambahan
    // jika tidak gunakan fungsi parseInt maka angka akan dibaca setara String
    let operationKeliling = parseInt(sisi_01) + parseInt(sisi_02) + parseInt(sisi_03);

    document.write("Hasil keliling sebuah segitiga adalah " + operationKeliling)
}