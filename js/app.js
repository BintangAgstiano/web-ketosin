document.addEventListener('DOMContentLoaded', () => {

const jam=document.querySelector('#jam')
const menit=document.querySelector('#menit')
const detik=document.querySelector('#detik')
setTimeout(() => {
    
   const interval= setInterval(() => {
        detik.innerHTML--
        if(detik.innerHTML<10){
            detik.innerHTML=`0${detik.innerHTML}`
        }
       
       
        if(detik.innerHTML=='00'){
            detik.innerHTML='60'

        menit.innerHTML--
        if(menit.innerHTML<10){
            menit.innerHTML=`0${menit.innerHTML}`
        }
        if(menit.innerHTML=='00'){
            menit.innerHTML='60'
            
            if(jam.innerHTML<10){
                jam.innerHTML=`0${jam.innerHTML}`
            }
            jam.innerHTML--
            if(jam.innerHTML<10){
                jam.innerHTML=`0${jam.innerHTML}`
            }
            if(jam.innerHTML=='00'){
                clearInterval(interval)
                jam.innerHTML='00'
                menit.innerHTML='00'
                detik.innerHTML='00'
            
            }
        }
    }
    }, 1000);
}, 3000);






    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseover', function () {
            const active = document.querySelector('.card.active');
            const boxNameActive = document.querySelector('.box-name.active-box-name');
            const boxNameRightActive = document.querySelector('.box-name-right.active-box-name-right');
            const decorationActive = document.querySelector('.decoration.active-decoration');
            const boxName = card.querySelector('.box-name');
            const boxNameRight = card.querySelector('.box-name-right');
            const decoration = card.querySelector('.decoration');

            if (active) {
                active.classList.remove('active');
            }
            if (boxNameActive && boxNameRightActive) {
                boxNameActive.classList.remove('active-box-name');
                boxNameRightActive.classList.remove('active-box-name-right');
            }
            if (decorationActive) {
                decorationActive.classList.remove('active-decoration');
            }
            if (boxName && boxNameRight) {
                card.classList.add('active');
                boxName.classList.add('active-box-name');
                boxNameRight.classList.add('active-box-name-right');
                decoration.classList.add('active-decoration')
            }
        });
    });
    const arrowRight = document.querySelector('.col-arrow i')
    const card1 = document.querySelector('.right .card:nth-child(1)');
    const card2 = document.querySelector('.right .card:nth-child(2)');
    const boxName1 = document.querySelector(' .right .card:nth-child(1) .box-name');
    const boxNameRight1 = document.querySelector(' .right .card:nth-child(1) .box-name-right');
    const decoration1 = document.querySelector(' .right .card:nth-child(1) .decoration');
    const boxName2 = document.querySelector(' .right .card:nth-child(2) .box-name');
    const boxNameRight2 = document.querySelector(' .right .card:nth-child(2) .box-name-right');
    const decoration2 = document.querySelector(' .right .card:nth-child(2) .decoration');
  
    let currentCardRight = 1;

    arrowRight.addEventListener('click', function () {
        card1.classList.remove('active');
        card2.classList.remove('active');
       
        boxName1.classList.remove('active-box-name');
        boxNameRight1.classList.remove('active-box-name-right');
        decoration1.classList.remove('active-decoration');
        boxName2.classList.remove('active-box-name');
        boxNameRight2.classList.remove('active-box-name-right');
        decoration2.classList.remove('active-decoration');
        
        if (currentCardRight === 1) {

           
            card1.style.display = 'none';
            card2.style.display = 'flex';
            card2.classList.add('active');
            setTimeout(() => {

                boxName2.classList.add('active-box-name');
                boxNameRight2.classList.add('active-box-name-right');
                decoration2.classList.add('active-decoration')
            }, 100);
            currentCardRight = 2;
        } else if (currentCardRight === 2) {
            card1.style.display = 'flex';
            card2.style.display = 'none';
            card1.classList.add('active');
            setTimeout(() => {

                boxName1.classList.add('active-box-name');
                boxNameRight1.classList.add('active-box-name-right');
                decoration1.classList.add('active-decoration')
            }, 100);

            currentCardRight = 1;
        }
    });


const textLogo=document.querySelector('.text-logo')
const chatLogo=document.querySelector('.chat-logo')
const lineLogoDecoration=document.querySelector('.line-logo-decoration')
const colLoading=document.querySelector('.col-loading')
setTimeout(() => {
    textLogo.classList.add('active')
}, 500);
setTimeout(() => {
    chatLogo.classList.add('active')
}, 700);
setTimeout(() => {
    lineLogoDecoration.classList.add('active')
}, 900);
setTimeout(() => {
    colLoading.style.opacity='0'
    colLoading.style.zIndex='-3'
    
}, 3000);



    const angka1 = document.querySelector('.angka1');
    const angka2 = document.querySelector('.angka2');
    let index = 0
    let index2 = 0
    function incrementAngka() {
        if (index <= 1325) {
            angka1.innerHTML = index
            index = 100 + index
            setTimeout(incrementAngka, 50)
        }
    }
    incrementAngka()

    setInterval(() => {

        incrementAngka()
        index = 0
    }, 1500);

    function incrementAngka2() {
        if (index2 <= 2) {
            angka2.innerHTML = index2
            index2++
            setTimeout(incrementAngka2, 100)
        }
    }
    incrementAngka2()

    setInterval(() => {

        incrementAngka2()
        index2 = 0
    }, 1500);


});

const btnCariKelas = document.querySelector('.btn-cari-kelas');
const iconArrowDown = document.querySelector('.icon-arrow-down');
const teksAjakan2 = document.querySelector('.text-ajakan2');

btnCariKelas.addEventListener('mouseover', function () {
    btnCariKelas.classList.add('active')
    iconArrowDown.classList.add('active')
    teksAjakan2.classList.add('active')
})
btnCariKelas.addEventListener('mouseout', function () {
    btnCariKelas.classList.remove('active');
    iconArrowDown.classList.remove('active');
    teksAjakan2.classList.remove('active');
})
iconArrowDown.addEventListener('mouseover', function () {
    btnCariKelas.classList.add('active')
    iconArrowDown.classList.add('active')
    teksAjakan2.classList.add('active')
})
iconArrowDown.addEventListener('mouseout', function () {
    btnCariKelas.classList.remove('active');
    iconArrowDown.classList.remove('active');
    teksAjakan2.classList.remove('active');
})





const links = document.querySelectorAll('.col-link a');
links.forEach(link => {
    link.addEventListener('click', function () {
        const linkActive = document.querySelector('.col-link a.active');
        if (linkActive) {
            linkActive.classList.remove('active')
        }
        link.classList.add('active');
    })
});


const navLinkEls = document.querySelectorAll('.col-link a');
const sectionEls = document.querySelectorAll('section');


function updateActiveLink() {
    let currentSection;

    sectionEls.forEach(sectionEl => {
        const sectionTop = sectionEl.offsetTop;
        if (pageYOffset >= sectionTop - 50) {
            currentSection = sectionEl.getAttribute('id');
        }
    });

    navLinkEls.forEach(navLinkEl => {
        navLinkEl.classList.remove('active');
        if (navLinkEl.getAttribute('href').includes(currentSection)) {
            navLinkEl.classList.add('active'); 
        }
    });
}


window.addEventListener('scroll', updateActiveLink);




const hamburger = document.querySelector('.hamburger')
const iconXSidebar = document.querySelector('.header-sidebar i')
const sidebar = document.querySelector('.sidebar')
hamburger.addEventListener('click', function () {
    sidebar.classList.toggle('active');
})
iconXSidebar.addEventListener('click', function () {
    sidebar.classList.remove('active')
})

const linksSidebar = document.querySelectorAll('.col-link-sidebar a')

linksSidebar.forEach((link) => {
    link.addEventListener('click', function () {
        const linkSidebarActive = document.querySelector('.col-link-sidebar a.active')
        if (linkSidebarActive) {
            linkSidebarActive.classList.remove('active')
        }
        link.classList.add('active');
        setTimeout(() => {

            sidebar.classList.remove('active')
        }, 200);

    })
})
// const iconSendMessage=document.querySelector('.footer-box-chat img');
// const chatContainer = document.querySelector('.content-box-chat');
// const selectMessage = document.querySelector('#select-message');
// iconSendMessage.addEventListener('click',function(){
    
//    const value=selectMessage.value
//         const newChatMessage = document.createElement('div');
//         newChatMessage.classList.add('box-chat2-content-box-chat');
        
//         newChatMessage.innerHTML = `
//             <div class="icon-caret2-box-chat">
//                 <i class='bx bx-caret-right'></i>
//             </div>
//             <span>${value}</span>
//         `;
//         chatContainer.appendChild(newChatMessage);

//     if(value=='Bagaimana cara membeli kelas ?'){
//         const newChatMessage2 = document.createElement('div');
//         newChatMessage2.classList.add('box-chat-content-box-chat');
        
//         newChatMessage2.innerHTML = `
//             <div class="icon-caret-box-chat">
//                 <i class='bx bx-caret-left'></i>
//             </div>
//             <span>Pencet tombol detail lalu klik bergabung pada kelas yang di inginkan</span>
//         `;
//         chatContainer.appendChild(newChatMessage2);

//     }
//     if(value=='Bagaimana cara login ?'){
//         const newChatMessage2 = document.createElement('div');
//         newChatMessage2.classList.add('box-chat-content-box-chat');
        
//         newChatMessage2.innerHTML = `
//             <div class="icon-caret-box-chat">
//                 <i class='bx bx-caret-left'></i>
//             </div>
//             <span>Buka bagian menu lalu klik tombol masuk</span>
//         `;
//         chatContainer.appendChild(newChatMessage2);

//     }
//     if(value=='Dimana tombol membeli kelas ?'){
//         const newChatMessage2 = document.createElement('div');
//         newChatMessage2.classList.add('box-chat-content-box-chat');
        
//         newChatMessage2.innerHTML = `
//             <div class="icon-caret-box-chat">
//                 <i class='bx bx-caret-left'></i>
//             </div>
//             <span>Di dalam halaman detail dan klik tombol bergabung</span>
//         `;
//         chatContainer.appendChild(newChatMessage2);

//     }
   
// })
