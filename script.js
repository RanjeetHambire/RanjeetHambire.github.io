const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


// mouseover event 

// var skill = document.getElementById('skills');
// skill.addEventListener('mouseover', function(){
//     location.reload();
// });

function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Start the animation when the element enters the viewport
            entry.target.style.animationPlayState = 'running';
            observer.unobserve(entry.target);
        }
    });
}

// Create an Intersection Observer
var observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5 // Adjust the threshold as needed
});

// Get the target element by class or ID
var targetElement = document.querySelector('.progress-bar');

// Observe the target element
observer.observe(targetElement);
