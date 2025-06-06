const buttons = document.querySelectorAll('.accordion-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const expanded = content.style.maxHeight;

        document.querySelectorAll('.accordion-content').forEach(c => {
            c.style.maxHeight = null;
        });

        if (!expanded || expanded === "0px") {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});