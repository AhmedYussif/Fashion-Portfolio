let Works = document.getElementById('Works'),
    Gallery = document.getElementById('Gallery'),
    Models = document.getElementById('Models'),
    PortfolioContent = '',
    ModelsContent = '',
    Name = document.getElementById("from_name"),
    Email = document.getElementById("Email"),
    subject= document.getElementById("Subject"),
    message = document.getElementById("Message"),
    namealert = document.getElementById("namealert"),
    userEmailAlert = document.getElementById("emailalert"),
    subjectalert = document.getElementById("subjectalert"),
    messagealert = document.getElementById("messagealert");
/**show switch_box************/
const switchToggel =document.querySelector('.style_switch_toggle');
switchToggel.addEventListener('click',() =>{
document.querySelector(".style_switch").classList.toggle('open');

});

/***Hide Switc_box when Scroll*****/
 window.addEventListener('scroll',()=>{
    if(document.querySelector('.style_switch').classList.contains('open')){

        document.querySelector('.style_switch').classList.remove('open');
    }
});
/******Night_mood**************** */
const nightMood = document.querySelector('.night_mood');
nightMood.addEventListener('click' ,() => {
    nightMood.querySelector('i').classList.toggle("fa-sun");
    nightMood.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle('dark');

});
window.addEventListener("load", () =>{
if(document.body.classList.contains('dark')){

    nightMood.querySelector('i').classList.add('fa-sun');

}
else
{   
    nightMood.querySelector('i').classList.add('fa-moon');
}

})

/**save option in Local Storage***/
let theMainSkinColor = localStorage.getItem('color_option');

if( theMainSkinColor !==null){

    document.documentElement.style.setProperty('--skin-color', theMainSkinColor);

       document.querySelectorAll('.colors_list li').forEach(el=> {
        el.classList.remove('A_active');

        if(el.dataset.color===theMainSkinColor){

            el.classList.add('A_active');
        }
    });


}
/***Strat_Color_Switch******/
const colors=document.querySelectorAll('.colors_list li');
colors.forEach(color => {
 color.addEventListener('click', (e) =>{

    document.documentElement.style.setProperty('--skin-color',e.target.dataset.color);
    localStorage.setItem('color_option',e.target.dataset.color);
    e.target.parentElement.querySelectorAll('.A_active').forEach(el=>{

        el.classList.remove('A_active');

    });

    e.target.classList.add('A_active');

 });
 
});

/***End_Color_Switch*******/
/**start_-Animated text Banner**/
let TextAnimation = new Typed('.typing', {
 strings:[ 'Fashion models', 'Fashion producers', 'Fashion designers' , 'Fashion brand'],
 typeSpeed:80,
 BackSpeed:80,
 loop:true

});

/**End_-Animated text Banner**/
/**start_Aside*********/
const nav = document.querySelector('.nav');
const navList = nav.querySelectorAll('.nav li');
const allNavList = navList.length;
allSection = document.querySelectorAll('.section'),
totalSection = allSection.length;
for(let i =0; i<allNavList; i++){

    const a = navList[i].querySelector('a');
    a.addEventListener('click', function(){

        
    for(let i=0; i<totalSection; i++){

        allSection[i].classList.remove('delay-section');
    }
    
     for (let j=0; j<allNavList; j++){

       if(navList[j].querySelector('a').classList.contains('active'))
       {
          allSection[j].classList.add('"delay-secion');
       }
        navList[j].querySelector('a').classList.remove('active')
     }
      this.classList.add('active')
      showSection(this);
      if(window.innerWidth <1200){

        asideSectionToggleBtn();
      }


    } )
}
function showSection(element){

    for(let i=0; i<totalSection; i++){

        allSection[i].classList.remove('active');
    }

    const target = element.getAttribute('href').split('#')[1];
    document.querySelector('#' + target).classList.add('active');
    
}

const navtoggel  = document.querySelector('.nav_toggel'),
aside = document.querySelector('.aside');
        navtoggel.addEventListener('click', () =>{
          
            asideSectionToggleBtn();
            
        })
        function asideSectionToggleBtn(){

            aside.classList.toggle('open');
            navtoggel.classList.toggle('open');
            for(let i =0; i<totalSection; i++ ) {

                allSection[i].classList.toggle('open')
            }
        }



// Portfolio
// portfolioFunction
function Portfolio(value) {
    let doc = document.getElementById(`${value}`)
    for (let i = 1; i < 10; i++) {
    PortfolioContent = `
    <div class="portfolio_item px">
        <div class="portfolio_item_inner shadow_dark">
            <div class="portfolio_img">
                <img src="images/${value}${i}.png" alt="img">
            </div>
        </div>
    </div>
    `;
    doc.innerHTML+=PortfolioContent;
    }
}
Portfolio('Gallery');
// Email.js
function Send() {
    emailjs.send("Clothina--Service-21","template_uibehd7",{
    from_name: document.getElementById('from_name').value,
    subject: document.getElementById('Subject').value,
    message: document.getElementById('Message').value,
    email_to: document.getElementById('Email').value
    });
    document.getElementById('from_name').value =''
    document.getElementById('Subject').value =''
    document.getElementById('Message').value =''
    document.getElementById('Email').value =''
};
// Regux contact inputs

function validName() {
    let regex = /^[a-zA-Z0-9]+$/;
    from_name.addEventListener('focus', function () {
        from_name.classList.add('is-invalid');
        namealert.classList.replace('d-none', 'd-block');
    })
    from_name.addEventListener('input', function () {
        if (regex.test(from_name.value) == true)
        {
            from_name.classList.replace('is-invalid' , 'is-valid');
            namealert.classList.replace('d-block', 'd-none');
            return true;
        }
        else
        {
            from_name.classList.replace('is-valid' , 'is-invalid');
            namealert.classList.replace('d-none', 'd-block');
        }
    })
}
function validEmail() {
    let regex= /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    Email.addEventListener('focus' , function () {
        Email.classList.add('is-invalid');
        emailalert.classList.replace('d-none', 'd-block');
    })
    Email.addEventListener('input', function () {
        if (regex.test(Email.value) == true)
        {
            Email.classList.replace('is-invalid' , 'is-valid');
            emailalert.classList.replace('d-block', 'd-none');
            return true;
        }
        else
        {
            Email.classList.replace('is-valid' , 'is-invalid');
            emailalert.classList.replace('d-none', 'd-block');
        }
    })
}
function validSubject() {
    let regex=/^[a-zA-Z]+$/
    subject.addEventListener('focus' , function () {
        subject.classList.add('is-invalid');
        subjectalert.classList.replace('d-none', 'd-block');
    })
    subject.addEventListener('input', function () {
        if (regex.test(subject.value) == true)
        {
            subject.classList.replace('is-invalid' , 'is-valid');
            subjectalert.classList.replace('d-block', 'd-none');
            return true;
        }
        else
        {
            subject.classList.replace('is-valid' , 'is-invalid');
            subjectalert.classList.replace('d-none', 'd-block');
        }
    })
}
function validMessage() {
    let regex=/^[a-zA-Z0-9~!@#$%^&*()`\[\]{};':,./<>?| ]*$/
    message.addEventListener('focus' , function () {
        message.classList.add('is-invalid');
        messagealert.classList.replace('d-none', 'd-block');
    })
    message.addEventListener('input', function () {
        if (regex.test(message.value) == true)
        {
            message.classList.replace('is-invalid' , 'is-valid');
            messagealert.classList.replace('d-block', 'd-none');
            return true;
        }
        else
        {
            message.classList.replace('is-valid' , 'is-invalid');
            messagealert.classList.replace('d-none', 'd-block');
        }
    })
}

validName();
validEmail();
validSubject();
validMessage();