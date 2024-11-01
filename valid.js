const showMenu=(toggleId,navId)=>{
    const toggle =document.getElementById(navId)
    if(toggle && nav){
        toggleEvent.addEventListener('click',()=>{
            nav.classList.toggle('show')
        })
    }
}