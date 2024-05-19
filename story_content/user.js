window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
    // Функция для проверки, работает ли код на мобильном устройстве
function isMobile() {
    return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
}

// Функция для вставки из буфера обмена
function pasteFromClipboard(event) {
    // Проверка, что длительное нажатие (1 секунда)
    setTimeout(function() {
        navigator.clipboard.readText().then(function(text) {
            // Найти поле ввода и вставить текст из буфера обмена
            var inputField = document.querySelector('input'); // Замените 'input' на ваш селектор
            if (inputField) {
                inputField.value = text;
                // Обновить переменную Articulate
                SetPlayerVariable("TextEntry", text);
            }
        }).catch(function(err) {
            console.error('Failed to read clipboard contents: ', err);
        });
    }, 1000); // 1 секунда
}

// Добавление обработчика событий на поле ввода
document.addEventListener('DOMContentLoaded', function() {
    if (isMobile()) {
        var inputField = document.querySelector('input'); // Замените 'input' на ваш селектор
        if (inputField) {
            inputField.addEventListener('touchstart', pasteFromClipboard);
        }
    }
});

    
}

};
