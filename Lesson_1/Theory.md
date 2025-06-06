Что такое HTML?
HTML (HyperText Markup Language) — это язык разметки гипертекста, который используется для создания структуры веб-страниц. HTML описывает содержание веб-страницы с помощью специальных элементов (тегов), которые определяют заголовки, текст, изображения, ссылки, списки и другие элементы интерфейса.

Структура HTML-документа
В приведённом файле представлен базовый HTML-документ. Разберём его основные части:

1. <!DOCTYPE html>

   Это декларация типа документа. Она сообщает браузеру, что используется HTML5, самая актуальная версия языка.

2. <html lang="en">
   Это корневой тег документа, содержащий весь HTML-код. Атрибут lang="en" указывает язык страницы (английский в данном случае).

3. <head> — Заголовочная часть
   Тег <head> содержит метаинформацию, которая не отображается на странице, но важна для работы браузера и SEO.

Внутри <head>:

<meta charset="UTF-8"> — устанавливает кодировку страницы (UTF-8 поддерживает все символы, включая кириллицу).
<meta name="viewport" content="width=device-width, initial-scale=1.0"> — делает страницу адаптивной для устройств разной ширины.
<title> — задаёт заголовок страницы, который отображается на вкладке браузера.
4. <body> — Контентная часть
Всё, что находится внутри <body>, будет отображаться пользователю в браузере.

Основные HTML-теги

1. Заголовки (h1 - h6)
<h1>Главный заголовок</h1>
<h2>Подзаголовок второго уровня</h2>
<h3>Заголовок третьего уровня</h3>
Copy
<h1> – заголовок первого уровня, главный заголовок страницы (должен быть только один).
<h2> - <h6> – подзаголовки от второго до шестого уровней, используются для логического разделения текста.
2. Абзацы (p)
<p>Это абзац текста. Он используется для разделения контента.</p>
Copy
Тег <p> применяется для написания обычного текстового контента.

3. Изображения (img)
   <img src="image.jpg" alt="Описание изображения" width="200">
   Copy
   Атрибуты:

src — ссылка на изображение (может быть локальный файл или URL).
alt — текстовое описание изображения (важно для SEO и доступности).
width, height — задают размеры картинки. 4. Ссылки (a)
<a href="https://example.com" target="_blank">Перейти на сайт</a>
Copy
Атрибуты:

href — адрес ссылки.
target="\_blank" — открывает ссылку в новой вкладке. 5. Списки
Ненумерованный список (ul - unordered list)

<ul>
  <li>Первый элемент списка</li>
  <li>Второй элемент списка</li>
</ul>
Copy
Каждый пункт списка обозначается тегом <li>, а сам список — <ul>.

Нумерованный список (ol - ordered list)

<ol>
  <li>Первый элемент</li>
  <li>Второй элемент</li>
</ol>
Copy
Работает аналогично <ul>, но элементы автоматически нумеруются.

Заключение
HTML является основой любой веб-страницы. Он отвечает за структуру сайта, но для стилизации используется CSS, а для динамических действий JavaScript.
