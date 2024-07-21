document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('birthForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const birthdate = new Date(document.getElementById('birthdate').value);
        const now = new Date();

        const diffInMilliseconds = now - birthdate;
        const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
        const diffInMinutes = Math.floor(diffInSeconds / 60);
        const diffInHours = Math.floor(diffInMinutes / 60);
        const diffInDays = Math.floor(diffInHours / 24);
        const diffInYears = Math.floor(diffInDays / 365.25);
        const diffInMonths = Math.floor(diffInYears * 12);

        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = `
            <p>Has vivido:</p>
            <ul>
                <li><strong>${diffInSeconds}</strong> segundos</li>
                <li><strong>${diffInMinutes}</strong> minutos</li>
                <li><strong>${diffInHours}</strong> horas</li>
                <li><strong>${diffInDays}</strong> días</li>
                <li><strong>${diffInMonths}</strong> meses</li>
                <li><strong>${diffInYears}</strong> años</li>
            </ul>
        `;
    });
});


