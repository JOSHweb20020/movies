const sideBar = document.querySelector('.sidebar')
const button = document.getElementById('btn')
const Home = document.querySelector('.container')
const btn = document.getElementById('button')



button.addEventListener('click', function clicked()  {
    if(sideBar.classList.contains('see')){
        sideBar.classList.remove('see')
        sideBar.classList.add('none')
       Home.classList.add('notActive')
    
    }
    else{
        sideBar.classList.add('see')
        sideBar.classList.remove('none') 
        Home.classList.remove('notActive')
    }
})

btn.addEventListener('click', function clicked()  {
    if(sideBar.classList.contains('see')){
        sideBar.classList.remove('see')
        sideBar.classList.add('none')
       Home.classList.add('notActive')
    
    }
    else{
        sideBar.classList.add('see')
        sideBar.classList.remove('none') 
        Home.classList.remove('notActive')
    }
})