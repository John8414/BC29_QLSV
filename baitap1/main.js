function docQue(id) {
    return document.querySelector(id);
}
function getEle(id) {
    return document.getElementById(id);
}
//click button "Hiển thị thông tin"
function hienThiThongTin() {
    /**
     * dom tơi các thẻ input lấy value
     */
    var maSV = getEle("txtMaSV").value;
    var tenSV = getEle("txtTenSV").value;
    var loaiSV = getEle("loaiSV").value;
    var diemToan = getEle("txtDiemToan").value * 1;
    var diemVan = getEle("txtDiemVan").value * 1;

    getEle("spanTenSV").innerHTML = tenSV;
    getEle("spanMaSV").innerHTML = maSV;
    getEle("spanLoaiSV").innerHTML = loaiSV;

    /**
     * truyền thong tin vao ham
     */
    var dtb = tinhDTB(diemToan, diemVan);
    var loai = xepLoai(dtb);
    getEle("spanDTB").innerHTML = dtb;
    getEle("spanXepLoai").innerHTML = loai;
}

/**
 * Viết hàm tính dtb
 */

function tinhDTB(toan, van) {
    return (parseFloat(toan) + parseFloat(van)) / 2;
}
/**
 * Viết hàm sếp loại
 */
function xepLoai(dtb) {
    if (8 <= dtb && dtb <= 10) {
        return "Giỏi";
    } else if (7 <= dtb && dtb < 8) {
        return "Khá";
    } else if (6 <= dtb && dtb < 7) {
        return "TB";
    } else {
        return "Yếu";
    }
}