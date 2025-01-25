document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('popup');
    const popupContent = document.querySelector('.popup-content');

    // Show popup on page load with animation
    popup.classList.add('show');
    setTimeout(() => {
        popup.classList.remove('show');
        popupContent.style.opacity = '1';
    }, 2000);

    // Close popup after 2 seconds
    setTimeout(() => {
        popupContent.style.opacity = '0';
        setTimeout(() => {
            popup.classList.add('hidden');
        }, 2000);
    }, 4000);
});

function switchTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-button');

    tabs.forEach(tab => tab.classList.remove('active'));
    buttons.forEach(button => button.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    document.querySelector(`.tab-button[onclick="switchTab('${tabId}')"]`).classList.add('active');
}

function openCategory(category) {
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    popupTitle.innerText = category;
    popup.classList.remove('hidden');
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.add('hidden');
}

function updateDateTime() {
    const now = new Date();
    const dateTimeElement = document.getElementById('date-time');
    dateTimeElement.textContent = now.toLocaleString('fa-IR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}

setInterval(updateDateTime, 1000);
updateDateTime();