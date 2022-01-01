const labelEmailSpan = document.querySelectorAll('#labelEmail span');
const labelPassSpan = document.querySelectorAll('#labelPassword span');
const emailInput = document.getElementById('email');
const passInput = document.getElementById('password');


emailInput.addEventListener('focusin', () => {
    labelEmailSpan.forEach((span, idx) => {
        span.style.transitionDelay = `${idx/10}s`;
        span.style.transform = 'translateY(-1.5rem)';
    });
});

emailInput.addEventListener('focusout', () => {
    if(!emailInput.value){ 
        labelEmailSpan.forEach(span => {
            span.style.transform = 'translateY(0)';
        });
    }
});

passInput.addEventListener('focusin', () => {
    labelPassSpan.forEach((span, idx) => {
        span.style.transitionDelay = `${idx/10}s`;
        span.style.transform = 'translateY(-1.5rem)';
    });
});

passInput.addEventListener('focusout', () => {
    if(!passInput.value){ 
        labelPassSpan.forEach(span => {
            span.style.transform = 'translateY(0)';
        });
    }
});
