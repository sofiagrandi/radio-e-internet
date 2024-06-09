document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
        const answer = question.querySelector('p');
        const button = document.createElement('button');
        button.textContent = 'Leia mais';
        button.classList.add('toggle-button');

        question.appendChild(button);

        button.addEventListener('click', () => {
            if (answer.style.display === 'none' || answer.style.display === '') {
                answer.style.display = 'block';
                button.textContent = 'Leia menos';
            } else {
                answer.style.display = 'none';
                button.textContent = 'Leia mais';
            }
        });

        // Inicialmente esconder as respostas
        answer.style.display = 'none';
    });
});
