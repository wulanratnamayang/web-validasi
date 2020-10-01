function enter() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;

    if (name == '') {
        Swal.fire('Please fill your name');
        return false;

    } else if (age == '') {
        Swal.fire('Please fill your age');
        return false;

    } else if (age >= 1 && age <= 5) {
        Swal.fire('Terimakasih, Anda Sekarang Masih Bayi');
        return false;

    } else if (age >= 6 && age <= 15) {
        Swal.fire('Terimakasih, Anda Masih Anak-anak');
        return false;

    } else if (age >= 16 && age <= 30) {
        Swal.fire('Terimakasih, Anda Masih Remaja');
        return false;

    } else if (age >= 31 && age <= 60) {
        Swal.fire('Terimakasih, Anda Sudah Dewasa');
        return false;

    } else if (age >= 61) {
        Swal.fire('Terimakasih, Anda Sudah Dewasa');
        return false;

    } else if (age <= 0) {
        Swal.fire('Maaf, Anda Sudah Game Over');
        return false;
    }
}