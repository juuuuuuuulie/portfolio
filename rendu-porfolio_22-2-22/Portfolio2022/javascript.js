    // ici mon parallax stars

    const starsspan = document.querySelector('#stars')

    starsspan.style.height = (document.body.offsetHeight + 400) + 'px';

    let stars = '';
    for(let i = 0; i < 200; i++) {

        const left = Math.random() * window.innerWidth + 'px';
        const top = Math.random() * (document.body.offsetHeight * 2) + 'px';
        const size = 5 + Math.random() * 20;

        stars += `<span class="parallax star" data-speed="${size}" style="opacity:${.8}; left:${left}; top:${top}; width:${size}px; height:${size}px;"><img src="ressources/test-star.png"></span>`;
    }

    starsspan.innerHTML = stars;

    const spans = document.querySelectorAll('span');
    const spanList = [];

    spans.forEach(span => {
        spanList.push({
            span,
            parallax : span.querySelectorAll('.parallax')
        });
    })

    console.log('spans',spanList);

    document.addEventListener('scroll', () => {

        spanList.forEach(item => {

            const infos = item.span.getBoundingClientRect();
            const offset = infos.y / infos.height;

            item.parallax.forEach(parallax => {
                const speed = parallax.dataset.speed || 1;
                const type = parallax.dataset.type || 'translate';
                const positionY = (offset * 200) * speed;

                if(type === 'translate') {
                    parallax.style.transform = 'translate(0,' + (positionY) + 'px)';
                }else if(type === 'rotate') {
                    parallax.style.transform = 'rotate(' + positionY + 'deg)';
                }else if(type === 'scale')  {
                    parallax.style.transform = 'scale(' + Math.abs(Math.max(positionY, .5)) + ')';
                }
            });
        });
    });

    // ici mon header

    const header = document.getElementById('header');
    var lastScrollY = 0;

    window.addEventListener('scroll', function (){
    var currentScrollY = window.scrollY;

    if (currentScrollY > 1) {
        if (currentScrollY > lastScrollY) {
            header.classList.add('header--scroll-down');
            header.classList.remove('header--scroll-up');
        } else {
            header.classList.remove('header--scroll-down');
            header.classList.add('header--scroll-up');
        }
            lastScrollY = currentScrollY;
        } else {
            header.classList.remove('header--scroll-up');
        }
    });

    // ici mon smooth scroll

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // ici mon scroll-to-top

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // ici scroll sections couleurs

    const anim = document.querySelectorAll('.violet, .rose, .rouge');

    window.addEventListener('scroll', e => {
    
    anim.forEach(anim => {
        const offset = .5;
        const infos = anim.getBoundingClientRect();
        const hasEntered = window.innerHeight * offset - infos.top > 0;
        
        anim.classList.toggle('active', hasEntered);
        });
    });


// ici boulesmagiiiiiiiques

const btn = document.querySelector('.boulemagique-bleue, .boulemagique-jaune, .boulemagique-verte');
const span = document.querySelector('.boulejaune, .bouleverte, .boulebleue');
const p = document.querySelector('.texteboulemagique');
console.log('btn', btn);

document.addEventListener('mousemove', (event) => {
  const infos = btn.getBoundingClientRect();
  
  const distance = calculateDistance(btn, event.pageX, event.pageY);
  
  const distanceX = infos.left - event.pageX + infos.width/2;
  const distanceY = infos.top - event.pageY + infos.height/2;

  if(distance <100) {
    span.style.transform = `translate(${-distanceX}px, ${-distanceY}px)`;
    span.classList.toggle('inside', true);
    p.classList.toggle('inside', true);
  }else {
    span.style.transform = `translate(0, 0)`;
    span.classList.toggle('inside', false);
    p.classList.toggle('inside', false);
  }
});

const calculateDistance = (elem, mouseX, mouseY) => {
   const infos = elem.getBoundingClientRect();
   return Math.floor(Math.sqrt(Math.pow(mouseX - (infos.left + (infos.width / 2)), 2) + Math.pow(mouseY - (infos.top + (infos.height / 2)), 2)));
}


// ici animapparition sections

const titresanim = document.querySelectorAll('.animapparition');

window.addEventListener('scroll', e => {
  
    titresanim.forEach(titresanim => {
    
    const offset = .5;
    const infos = titresanim.getBoundingClientRect();

    const hasEntered = window.innerHeight * offset - infos.top > 0;
    const hasLeaved = infos.top + infos.height * offset < 0;

    titresanim.classList.toggle('active', hasEntered && !hasLeaved);
    
    });
});

