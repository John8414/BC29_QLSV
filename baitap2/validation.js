function Validation() {
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

}