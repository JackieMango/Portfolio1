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

})