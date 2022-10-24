/*
 * Version 1 for data flow graph testing
 */
function calculatePrice() {
    let age = document.getElementById("age").value;
    let hour = document.getElementById("hour").value;
    let output = document.getElementById("output");

    const defaultPrice = 60000;
    const salePrice = 54000;

    if (age < 0) {
        output.textContent = "Số liệu không hợp lệ";
        return;
    }

    if (hour < 0 || hour > 23) {
        output.textContent = "Số liệu không hợp lệ";
        return;
    }

    if (hour < 6) {
        output.textContent = "Giờ rạp chưa mở cửa";
        return;
    }

    if (age < 20) {
        output.textContent = salePrice;
    } else {
        output.textContent = defaultPrice;
    }
}
