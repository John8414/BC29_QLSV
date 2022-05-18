// { Oop}
// [array]
//     (function);
function docQue(id) {
    return document.querySelector(id);
}
function getEle(id) {
    return document.getElementById(id);
}

function hienThiThongTin() {
    /**
        * dom tơi các thẻ input lấy value
        */
    var _maSV = getEle("txtMaSV").value;
    var _tenSV = getEle("txtTenSV").value;
    var _loaiSV = getEle("loaiSV").value;
    var _diemToan = getEle("txtDiemToan").value * 1;
    var _diemVan = getEle("txtDiemVan").value * 1;
    //tạo đối tượng sinh viên
    /** var sinhVien = {
        //key: value
        //property
        maSV: _maSV,
        tenSV: _tenSV,
        loaiSV: _loaiSV,
        diemToan: _diemToan,
        diemVan: _diemVan,
        diemTB: 0,

        //method
        tinhDTB: function () {
            this.diemTB = (parseFloat(this.diemToan) + parseFloat(this.diemVan)) / 2;
        },
        xepLoai: function () {
            if (8 <= this.diemTB && this.diemTB <= 10) {
                return "Giỏi";
            } else if (7 <= this.diemTB && this.diemTB < 8) {
                return "Khá";
            } else if (6 <= this.diemTB && this.diemTB < 7) {
                return "TB";
            } else {
                return "Yếu";
            }
        },
    }; */



    //tạo thể hiện (đối tượng) từ lớp đối tượng SinhVien
    var sinhVien = new SinhVien(_maSV, _tenSV, _loaiSV, _diemToan, _diemVan);


    //truy suất vào thuộc tính bên trong object
    /** console.log(sinhVien.maSV);
    console.log(sinhVien.loaiSV);
    console.log(sinhVien.tenSV);
    console.log(sinhVien.diemToan);
    console.log(sinhVien.diemVan);
     */

    // gọi tới phương thức tinhDTB
    sinhVien.tinhDTB();
    // gọi tới phương thức xepLoai
    var loai = sinhVien.xepLoai();

    getID("spanMaSV").innerHTML = sinhVien.maSV;
    getID("spanTenSV").innerHTML = sinhVien.tenSV;
    getID("spanLoaiSV").innerHTML = sinhVien.loaiSV;
    getID("spanDTB").innerHTML = sinhVien.diemTB;
    getID("spanXepLoai").innerHTML = loai;

}