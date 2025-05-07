document.addEventListener('DOMContentLoaded', function () {
    // Проверяем, если мы на странице FAQ, то аккордеон всегда работает
    const isFaqPage = document.body.classList.contains('faq');
    
    // Если страница не "о нас", "прайс-лист" или FAQ, то аккордеон не работает
    if (!document.body.classList.contains('about') && 
        !document.body.classList.contains('price') && 
        !isFaqPage) {
        return;  // если не страница "о нас" или "прайс-лист", или FAQ — выключаем аккордеон
    }

    // Активируем аккордеон для секций "о нас", "прайс-лист" и "FAQ"
    const toggles = document.querySelectorAll('.accordion-toggle');
    
    toggles.forEach(function (toggle) {
        toggle.addEventListener('click', function (event) {
            event.stopPropagation();
            const item = toggle.closest('.accordion-item');
            const content = item.querySelector('.accordion-content');

            const isOpen = item.classList.contains('open');

            // Закрываем все другие аккордеоны
            document.querySelectorAll('.accordion-item').forEach(function (el) {
                el.classList.remove('open');
                el.querySelector('.accordion-toggle').classList.remove('open');
            });

            // Если этот аккордеон не открыт, открываем его
            if (!isOpen) {
                item.classList.add('open');
                toggle.classList.add('open');
            }
        });
    });

    // FAQ: обработка вопросов и ответов
    if (isFaqPage) {
        const faqQuestions = document.querySelectorAll('.faq-question');

        faqQuestions.forEach(function (question) {
            question.addEventListener('click', function () {
                const answer = this.nextElementSibling;

                // Переключаем класс "active" на вопрос
                this.classList.toggle('active');

                // Переключаем видимость ответа
                answer.classList.toggle('active');
            });
        });
    }
});
