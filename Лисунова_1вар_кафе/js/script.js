// Функция для форматирования имени (сделать первую букву заглавной, остальные - маленькие)
function formatName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

// Функция для подсчета суммы заказа на базе выбранных блюд и количества
function calculateTotal() {
    var dishes = document.getElementById("dishes").value;
    var quantity = document.getElementById("quantity").value;
    var total;
    switch (dishes) {
        case "Стейк":
            total = 500 * quantity;
            break;
        case "Салат":
            total = 200 * quantity;
            break;
        case "Суп":
            total = 150 * quantity;
            break;
    }
    document.getElementById("total").value = total + " руб.";
}

// Функция для открытия модального окна с подтверждением заказа
function openModal() {
    var manager = document.getElementById("manager").value;
    document.getElementById("manager-summary").innerHTML = formatName(manager);
    var surname = document.getElementById("surname").value;
    var name = document.getElementById("name").value;
    var patronymic = document.getElementById("patronymic").value;
    var customer = formatName(surname) + " " + formatName(name) + " " + formatName(patronymic);
    document.getElementById("customer-summary").innerHTML = customer;
    var dishes = document.getElementById("dishes").value;
    document.getElementById("dishes-summary").innerHTML = dishes;
    var quantity = document.getElementById("quantity").value;
    document.getElementById("quantity-summary").innerHTML = quantity;
    var total = document.getElementById("total").value;
    document.getElementById("total-summary").innerHTML = total;
    var time = document.getElementById("time").value;
    document.getElementById("time-summary").innerHTML = time;
    var payment = document.querySelector('input[name="payment"]:checked').value;
    document.getElementById("payment-summary").innerHTML = payment;
    document.getElementById("order-summary").style.display = "block";
}

// Функция для закрытия модального окна с подтверждением заказа
function closeModal() {
    document.getElementById("order-summary").style.display = "none";
}

// Функция для проверки заполнения формы заказа перед отправкой
function validateOrder() {
    if (document.getElementById("surname").value == "" ||
        document.getElementById("name").value == "" ||
        document.getElementById("dishes").value == "" ||
        document.getElementById("time").value == "" ||
        (document.getElementById("cash").checked == false && document.getElementById("card").checked == false)) {
        alert("Пожалуйста, заполните все обязательные поля.");
    } else {
        openModal();
    }
}

// Функция для подтверждения заказа и вывода данных заказа в консоль браузера
function confirmOrder() {
    console.log("Заказ подтвержден.");
    console.log("Менеджер: " + document.getElementById("manager-summary").innerHTML);
    console.log("ФИО: " + document.getElementById("customer-summary").innerHTML);
    console.log("Блюдо: " + document.getElementById("dishes-summary").innerHTML);
    console.log("Количество: " + document.getElementById("quantity-summary").innerHTML);
    console.log("Сумма заказа: " + document.getElementById("total-summary").innerHTML);
    console.log("Время приготовления:" + document.getElementById("time-summary").innerHTML);
    console.log("Способ оплаты: " + document.getElementById("payment-summary").innerHTML);
    closeModal();
}

// Вызов функции calculateTotal() при изменении выбора блюда или количества
document.getElementById("dishes").addEventListener("change", calculateTotal);
document.getElementById("quantity").addEventListener("change", calculateTotal);