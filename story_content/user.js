window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
    console.log("JavaScript триггер выполнен");

let isCursorInInputField = false;
let longPressTimeout;

// Проверяем наличие поля ввода
var inputField = document.querySelector("input[data-dv_ref='input']");
console.log(inputField);
if (inputField) {
    console.log("Поле ввода с атрибутом data-dv_ref='input' найдено.");
    
    inputField.removeAttribute("readonly");

    // Добавляем обработчик события клика
    inputField.addEventListener("click", function() {
        console.log('click!!');

        if (!isCursorInInputField) {
            console.log("Поле ввода получило первый клик, курсор установлен");
            inputField.removeAttribute("readonly");
            inputField.focus();
        }
    });

    inputField.addEventListener("focus", function() {
        isCursorInInputField = true;
        inputField.removeAttribute("readonly");
        console.log("Курсор установлен в поле ввода");
    });

    inputField.addEventListener("focus", function() {
        isCursorInInputField = true;
        inputField.removeAttribute("readonly");
    });

    inputField.addEventListener("keydown keyup", function() {
        isCursorInInputField = false;
        inputField.setAttribute("readonly", "false");
        console.log("Курсор убран из поля ввода и атрибут readonly установлен");
    });

    // Добавляем обработчик события долгого нажатия
    inputField.addEventListener("touchstart", function() {
        longPressTimeout = setTimeout(function() {
            if (isCursorInInputField) {
                console.log("Поле ввода получило долгое нажатие");
                if (isIOSDevice()) {
                    notifyUserToPaste();
                } else {
                    pasteFromClipboard();
                }
            }
        }, 500); // Время в миллисекундах для распознавания долгого нажатия
    });

    inputField.addEventListener("touchend", function() {
        clearTimeout(longPressTimeout);
    });

    inputField.addEventListener("touchmove", function() {
        clearTimeout(longPressTimeout);
    });
} else {
    console.error("Поле ввода с атрибутом data-dv_ref='input' не найдено.");
}

// Функция для вставки текста в переменную Articulate
function insertText(text) {
    var player = GetPlayer();
    player.SetVar("TextEntry", text);

    // Проверяем значение переменной TextEntry после установки
    var updatedText = player.GetVar("TextEntry");
    console.log("Проверка: Значение переменной TextEntry = " + updatedText);
}

// Функция для копирования текста из буфера обмена
function pasteFromClipboard() {
    navigator.clipboard.readText().then(function(clipText) {
        if (clipText) {
            insertText(clipText);
            console.log("Текст из буфера обмена успешно вставлен: " + clipText);
        } else {
            console.log("Буфер обмена пуст.");
        }
    }).catch(function(error) {
        console.error("Ошибка при чтении из буфера обмена: ", error);
    });
}

// Функция для уведомления пользователя на iOS
function notifyUserToPaste() {
    alert("Чтобы вставить текст, нажмите и удерживайте палец на поле ввода, затем выберите 'Вставить' из контекстного меню.");
    inputField.focus(); // Устанавливаем фокус на поле ввода
}

// Проверка, является ли устройство iOS
function isIOSDevice() {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

// Проверка, является ли устройство мобильным
function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.matchMedia("(min-width: 768px)").matches;
}

console.log("Событие load произошло.");

if (!isMobileDevice()) {
    console.log("Код запускается только на мобильных устройствах.");
    return;
}


    
}

};
