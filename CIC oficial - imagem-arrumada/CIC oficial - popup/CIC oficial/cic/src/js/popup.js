document.addEventListener('DOMContentLoaded', function() {
    const popupContainers = document.querySelectorAll('.popup-container');

    popupContainers.forEach(container => {
        const infoIcon = container.querySelector('.lucide-info');
        const popup = container.querySelector('.popup');

        infoIcon.addEventListener('mouseenter', () => {
            popup.style.display = 'block';
        });

        container.addEventListener('mouseleave', () => {
            popup.style.display = 'none';
        });
    });
});