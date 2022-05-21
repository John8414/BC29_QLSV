function Validation() {
    // *** Kiểm tra rỗng***
    this.kiemTraRong = function (value, errorID, mess) {
        if (value === '') {
            //error
            getEle(errorID).innerHTML = mess;
            getEle(errorID).style.display = "block";
            return false;
        }
        getEle(errorID).innerHTML = '';
        getEle(errorID).style.display = "none";
        return true;
    };
    // *** kiểm tra khoá học
    this.kiemTraKhoaHoc = function (selectId, errorID, mess) {
        if (getEle(selectId).selectedIndex !== 0) {
            //true
            getEle(errorID).innerHTML = '';
            getEle(errorID).style.display = 'none';
            return true;
        }

        //false
        getEle(errorID).innerHTML = mess;
        getEle(errorID).style.display = 'block';
        return false;
    };

    // *** kiem tra do dai ky tu
    this.kiemTraDoDaiKiTu = function (value, errorID, min, max, mess) {
        if (value.trim().length >= min && value.length <= max) {

            //true
            getEle(errorID).innerHTML = '';
            getEle(errorID).style.display = 'none';
            return true;
        }
        //false
        getEle(errorID).innerHTML = mess;
        getEle(errorID).style.display = 'block';
        return false;
    };
    // *** kiểm tra chuỗi ký tự
    this.kiemChuoiKiTu = function (value, errorID, mess) {
        var letter = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
        if (value.match(letter)) {
            //true
            getEle(errorID).innerHTML = '';
            getEle(errorID).style.display = 'none';
            return true;
        }
        //false
        getEle(errorID).innerHTML = mess;
        getEle(errorID).style.display = 'block';
        return false;
    };

    // *** kiểm tra ngày
    // this.kiemTraNgay = function (dateID, errorID, mess) {
    //     var date = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
    //     if (value.match(date)){

    //     }
    // };

    // *** Kiểm tra trùng maSV
    this.kiemTraTrung = function (value, errorID, mess, arr) {
        //flag
        var isStatus = true;
        arr.forEach(function (item) {
            if (item.maSV === value) {
                //MaSV tồn tại
                isStatus = false;
            }
        });

        //check
        if (isStatus) {
            //true
            getEle(errorID).innerHTML = '';
            getEle(errorID).style.display = 'none';
            return true;
        }
        //false
        getEle(errorID).innerHTML = mess;
        getEle(errorID).style.display = 'block';
        return false;
    };
}

