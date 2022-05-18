//dinh nghia lop doi tuong
function SinhVien(_maSV, _tenSV, _loaiSV, _diemToan, _diemVan) {
    //Ham khởi tạo (constructor)
    this.maSV = '';
    this.tenSV = '';
    this.loaiSV = '';
    this.diemToan = 0;
    this.diemVan = 0;
    this.diemTB = 0;

    this.tinhDTB = function () {
        this.diemTB = (parseFloat(this.diemToan) + parseFloat(this.diemVan)) / 2;
    };

    this.xepLoai = function () {
        if (8 <= this.diemTB && this.diemTB <= 10) {
            return "Giỏi";
        } else if (7 <= this.diemTB && this.diemTB < 8) {
            return "Khá";
        } else if (6 <= this.diemTB && this.diemTB < 7) {
            return "TB";
        } else {
            return "Yếu";
        }
    };
}