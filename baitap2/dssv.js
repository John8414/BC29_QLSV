function DanhSachSinhVien() {
    this.arr = [];

    this.timViTriSV = function (maSV) {
        /**
         * tìm vị trí
         * 0. tạo bien index= -1
         * 1 duyet mang arr
         * neu maSV ===object.maSV
         * => cap nhat lai gia tri cua index
         */

        var index = -1;
        this.arr.forEach(function (item, i) {
            if (item.maSV === maSV)
                index = i;
        });

        return index;
    };

    this.themSV = function (sv) {
        this.arr.push(sv);
    };

    this.xoaSV = function (maSV) {
        var index = this.timViTriSV(maSV);

        //action delete
        if (index !== -1) {
            this.arr.splice(index, 1);
        }
    };

    this.suaSV = function (maSV) {
        var index = this.timViTriSV(maSV);
        if (index !== -1) {
            return this.arr[index];
        }
        return null;
    };

    this.capNhat = function (sv) {
        //tim vi tri sv muon cap nhat
        var index = this.timViTriSV(sv.maSV);
        if (index !== -1) {
            this.arr[index] = sv;
        }
    };

    this.timKiemSV = function (keyword) {
        /**
         * 0. tao mangTimKiem = []
         * 1. duyet mang arr
         * 2. neu item.tenSV trung voiw keyword
         *  => them sv dc tim thay vao mangTimKiem
         * 3. Tra ve mangTimKiem
         */

        var mangTimKiem = [];
        this.arr.forEach(function (item) {
            // if (item.tenSV === keyword) {
            //v2
            if (item.tenSV.toLowerCase().includes(keyword.toLowerCase())) {
                mangTimKiem.push(item);
            }
        });
        return mangTimKiem;
    };
}
