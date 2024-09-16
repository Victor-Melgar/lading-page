function initAnimaScroll () {
    const sections = document.querySelectorAll('.xd')
    const windowMetade = window.innerHeight * 0.3;
    function animaScroll () {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top - windowMetade
            const isSectionVisible = sectionTop < windowMetade 
            console.log(sectionTop) 
            if(isSectionVisible) {
                section.classList.add('ativo');
            } else {
                section.classList.remove('ativo')
            }
        })
    }

    animaScroll();
    window.addEventListener('scroll', animaScroll);
}

initAnimaScroll();
