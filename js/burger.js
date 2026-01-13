document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById('burger');
    const menu = document.getElementById('menu');
    const menuLinks = document.querySelectorAll('.header__link');

    // Проверяем, что элементы вообще есть на странице, чтобы не было ошибок
    if (burger && menu) {
        burger.addEventListener('click', () => {
            menu.classList.toggle('active');
            burger.classList.toggle('active');
            // Блокируем скролл, когда меню открыто
            document.body.classList.toggle('no-scroll');
        });

        // Закрываем меню при клике на ссылки
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
                burger.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        });
    }


    let resizeTimer;
    window.addEventListener("resize", () => {
        document.body.classList.add("resize-animation-stopper");
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            document.body.classList.remove("resize-animation-stopper");
        }, 400);
    });
});