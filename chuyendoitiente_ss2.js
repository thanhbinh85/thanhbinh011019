function convert() {
    let amount = Number(document.getElementById("amount").value);
    let From_Curency = document.getElementById("FromCurrency").value;
    let To_Curency = document.getElementById("ToCurrency").value;
    let x=0;
    if(From_Curency=='USD'&&To_Curency=='VNĐ'){
        x=amount*23000 + 'VNĐ';
    }
    else {
        if (From_Curency == 'VNĐ' && To_Curency == 'USD') {
            x = amount / 23000 + 'USD';
        } else {
            x = 'Nhập lại'
        }
    }
document.getElementById('KẾT QUẢ').innerText = x;
}