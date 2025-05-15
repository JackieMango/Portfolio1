// update to top for background dia
document.getElementById('btnOpen1').addEventListener('click', function(){
    const dialog =  document.getElementById('dialog-default1');
    dialog.showModal();
    dialog.scrollTop = 0;

});

// update to top for about me dia
document.getElementById('btnOpen').addEventListener('click', function(){
    const dialog1 =  document.getElementById('dialog-default');
    dialog1.showModal();
    dialog1.scrollTop = 0;

});

// update to top for project/work dia
document.getElementById('btnOpen2').addEventListener('click', function(){
    const dialog2 =  document.getElementById('dialog-default2');
    dialog2.showModal();
    dialog2.scrollTop = 0;

});

/*if(document.body.animate)
{
    document.querySelector('#btnOpen').addEventListener('click', pop);

}
function pop(e)
{
    const bbox = 
    document.querySelector('#btnOpen').getBoundingClientRect();
    const x= bbox.left + bbox.width /2;
    const y = bbox.right + bbox.height /2;
    for(let i = 0; i < 2; i++)
    {
        createParticle(x,y);
    }
    
}
function createParticle(x,y)
{
    const particle = document.createElement('particle');
    document.body.appendChild(particle);

    const size = Math.floor(Math.random() * 20 + 5);
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    particle.style.background = `hsl(${Math.random() * 90 + 100}, 10%,
    10%)`;

    const destinationX = x + (Math.random() - .5) * 2 * 75;
    const destinationy = y + (Math.random() - .5) * 2 * 75;

    const animation = particle.animate([
        {
            transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
            opacity: 1
        }
    ],{
        duration: Math.random() * 1000 + 500,
        easing: 'cubic-bezier(0,.9,.57,1)',

        delay:Math.random() * 200
    });
    animation.onfinish = () =>{
        particle.remove();
    };
}*/