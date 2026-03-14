const typingElement = document.getElementById("typing-text");

const phrases = [
    "A Data Analyst",
    "A Front-End Web Developer",
    "A Creative Problem Solver",
    "A Passionate Coder",
    "A Tech Enthusiast",
    "An Aspiring Software Engineer"
    
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 80;

function typeText(){
    const currentPhrase = phrases[phraseIndex];

    if(isDeleting){
        typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 40;
    } else {
        typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 80;
    }

    if(!isDeleting && charIndex === currentPhrase.length){
        typingSpeed = 1500;
        isDeleting = true;
    }

    if(isDeleting && charIndex === 0){
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 400;
    }

    setTimeout(typeText, typingSpeed);
}

typeText();

let projects = [
   
    
    {
        title: "Portfolio Website",
        description: "My personal portfolio showcasing projects and skills.",
        image: "images/project1.jpeg",
        link: "https://tamalportfolioproject.vercel.app/"
    },

    {
        title: "Ramadan Calendar 2026 (Dhaka)",
        description: "Auto Sehri & Iftar Timing Prediction.",
        image: "images/project2.jpeg",
        link: "https://ramadancalendar-seven.vercel.app/"
    },

    {
        title: "SmartCalc: Professional Scientific Calculator",
        description: "An Advanced Scientific and Normal Calculator.",
        image: "images/project3.jpeg",
        link: "https://smartcalc-seven.vercel.app/"
    },



    {
        title: "Uthao: Ride Sharing Management System",
        description: "Smart Helicopter Ride-Sharing Management System.",
        image: "images/project4.jpeg",
        link: "https://www.notion.so/Uthao-Ride-Sharing-Management-System-2a9bc6c936638000b1d9f21e26f4130f"
    },

    {
        title: "Uthao: Ride Sharing Management System",
        description: "Smart Helicopter Ride-Sharing Management System.",
        image: "images/project5.jpeg",
        link: "https://www.figma.com/proto/M6fx9iXsS6r9bHIskdz53l/Uthao--Ride-Sharing-Management-System-?node-id=4-2&p=f&t=qCsTjyHf47IMaTsv-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A2&show-proto-sidebar=1"
    },


    {
        title: "Student Management System",
        description: "A web system to manage students using JavaScript DOM.",
        image: "images/project6.jpeg",
        link: "https://studentmanagementsystem-rho.vercel.app/"
    },

    {
        title: "Interactive Web-Based Web Technology Assessment System",
        description: "An Interactive Assessment System for Web Technology Evaluation.",
        image: "images/project7.jpeg",
        link: "https://interactiveweb-basedwebtechnologyas.vercel.app/"
    },
   


   {
        title: "Traffic Signal Control System",
        description: "A Hardware-Based Traffic Signal Control System using 555 Timer IC.",
        image: "images/project8.jpeg",
        link: "https://trafficsignalcontrolsystems.vercel.app/"
    },

    {
        title: "Digital Dice Roller With 7 Segment Display",
        description: "A Hardware-Based Dice Simulation Using 7-Segment Display.",
        image: "images/project9.jpeg",
        link: "https://digitaldiceroller.vercel.app/"
    },
    {
        title: "Digital Dice Roller With Red LED's",
        description: "A Hardware-Based Digital Dice Roller Using Red LEDs.",
        image: "images/project10.jpeg",
        link: "https://digitaldiceroller.vercel.app/"
    },
    {
        title: "Smart Gas Leak Detection and Instant Alert System",
        description: "Real-Time Monitoring with GSM Alerts.",
        image: "images/project11.jpeg",
        link: "https://smartgasleakdetectionsystem.vercel.app/"
    },

    {
        title: "LumoSense: Light and Darkness Detection System",
        description: "Real-Time Detection and Response to Light and Darkness.",
        image: "images/project12.jpeg",
        link: "https://lumosense.vercel.app/"
    },






];

const container = document.getElementById("project-container");

projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <img src="${project.image}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">
            <button>View Project</button>
        </a>
    `;
    container.appendChild(card);
});

const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.onclick = function(){
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark":"light");
}

if(localStorage.getItem("theme")==="dark"){
    document.body.classList.add("dark");
}

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("subjectError").innerText = "";
    document.getElementById("messageError").innerText = "";

    let valid = true;

    if(name === ""){
        document.getElementById("nameError").innerText = "Enter your name";
        valid = false;
    }

    if(!email.match(emailPattern)){
        document.getElementById("emailError").innerText = "Enter valid email";
        valid = false;
    }

    if(subject === ""){
        document.getElementById("subjectError").innerText = "Enter subject";
        valid = false;
    }

    if(message === ""){
        document.getElementById("messageError").innerText = "Enter message";
        valid = false;
    }

    if(valid){
        alert("Message Sent Successfully!");
        form.reset();
    }
});



const messageBox = document.getElementById("message");
const counter = document.getElementById("charCount");

messageBox.oninput = function(){
    counter.innerText = messageBox.value.length + " characters";
};




const topBtn = document.getElementById("topBtn");

window.onscroll = function(){
    if(document.documentElement.scrollTop > 200){
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

topBtn.onclick = function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}