function getEle(id) {
    return document.getElementById(id);
}
//phai mang ra global do neu de trong local se bi push va mang rong
var dssv = new DanhSachSinhVien();
var validation = new Validation();

function layThongTinSV() {
    var _maSV = getEle("txtMaSV").value;
    var _tenSV = getEle("txtTenSV").value;
    var _email = getEle("txtEmail").value;
    var _pass = getEle("txtPass").value;
    var _ngaySinh = getEle("txtNgaySinh").value;
    var _khoaHoc = getEle("khSV").value;
    var _diemToan = getEle("txtDiemToan").value;
    var _diemLy = getEle("txtDiemLy").value;
    var _diemHoa = getEle("txtDiemHoa").value;

    //lag isValid = true => form hop le
    //                      else khong hop le

    var isValid = true;

    // Check validation
    isValid = validation.kiemTraRong(_maSV, "errorMaSV", "(*)Vui lòng nhập mã sinh viên");

    //check isValid
    if (!isValid) return;

    //tao doi tuong sinhVien tu lop doi tuong SinhVien
    var sinhVien = new SinhVien(
        _maSV,
        _tenSV,
        _email,
        _pass,
        _ngaySinh,
        _khoaHoc,
        _diemToan,
        _diemLy,
        _diemHoa
    );
    sinhVien.tinhDTB();

    return sinhVien;
}
//get back data
getLocalStorage();

getEle("btnThemSV").onclick = function () {

    var sinhVien = layThongTinSV();


    if (sinhVien) {
        // dssv.arr.push(sinhVien);
        //v2
        dssv.themSV(sinhVien);

        taoBang(dssv.arr);

        setLocalStorage();
    }

};
//tao bang
function taoBang(data) {
    var content = '';
    data.forEach(function (item) {
        /** Viet bang ES5
              content += '<tr>';
            content += '<td>' + item.maSV + '</td>';
            content += '<td>' + item.tenSV + '</td>';
            content += '<td>' + item.email + '</td>';
            content += '<td>' + item.ngaySinh + '</td>';
            content += '<td>' + item.khoaHoc + '</td>';
            content += '<td>' + item.diemTB + '</td>';
            content += '</tr>';
           */
        //ES6
        content += `
        <tr>
        <td>${item.maSV}</td>
        <td>${item.tenSV}</td>
        <td>${item.email}</td>
        <td>${item.ngaySinh}</td>
        <td>${item.khoaHoc}</td>
        <td>${item.diemTB}</td>
        <td>
        <button class = "btn btn-info" onclick="suaSV('${item.maSV}')">sửa</button>
      <button class = "btn btn-danger" onclick="xoaSV('${item.maSV}')">xóa</button>
      </td>
        </tr>
        `;

    });

    getEle('tbodySinhVien').innerHTML = content;
}

/**
 * Cap nhat SV
 */
getEle('btnCapNhat').onclick = function () {
    var sinhVien = layThongTinSV();

    dssv.capNhat(sinhVien);
    taoBang(dssv.arr);
    setLocalStorage();

};

/**
 * Tim kien SV
 */
getEle('keyword').addEventListener('keyup', function () {
    var keyword = getEle('keyword').value;
    var mangTimKiem = dssv.timKiemSV(keyword);
    taoBang(mangTimKiem);
});

function setLocalStorage() {
    //convert from JSON to String
    var dataString = JSON.stringify(dssv.arr);
    //luu xuong local storage
    localStorage.setItem('DSSV', dataString,);
}

function getLocalStorage() {
    if (localStorage.getItem('DSSV')) {
        var dataString = localStorage.getItem('DSSV');

        //convert string to JSON
        var dataJson = JSON.parse(dataString);
        dssv.arr = dataJson;
        taoBang(dssv.arr);
    }
}

//xoa SV
function xoaSV(id) {
    dssv.xoaSV(id);
    taoBang(dssv.arr);
    setLocalStorage();
}

//sua SV

function suaSV(id) {
    var sv = dssv.suaSV(id);
    if (sv) {
        //dom toi cacs the input ra ngoai
        getEle('txtMaSV').value = sv.maSV;
        getEle('txtTenSV').value = sv.tenSV;
        getEle('txtEmail').value = sv.email;
        getEle('txtPass').value = sv.matKhau;
        getEle('txtNgaySinh').value = sv.ngaySinh;
        getEle('khSV').value = sv.khoaHoc;
        getEle('txtDiemToan').value = sv.diemToan;
        getEle('txtDiemLy').value = sv.diemLy;
        getEle('txtDiemHoa').value = sv.diemHoa;

        //hien thi lai capnhat
        getEle('btnCapNhat').style.display = "inline-block";

        //disable input#txtMaSV
        getEle('txtMaSV').disabled = true;
        //display: none #btnThemSV
        getEle('btnThemSV').style.display = "none";
    }
}
