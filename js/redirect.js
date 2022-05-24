function movie1(){
    localStorage.setItem("movieName","RRR");
    window.location.href="movie1.html";
}
function movie2(){
    localStorage.setItem("movieName","K.G.F: Chapter 2");
    window.location.href="movie2.html";
}
function movie3(){
    localStorage.setItem("movieName","Pushpa: The Rise");
    window.location.href="movie3.html";
}
function movie4(){
    localStorage.setItem("movieName","Spider-Man: No Way Home");
    window.location.href="movie4.html";
}
function showAmount(np,radio,d){
    if(np=="" || !radio || d==""){
        makepayment();
    }
    else{
        localStorage.setItem("date",d)
        document.getElementById("amount").innerHTML=np*80;
        if(document.getElementById("r1").checked){
            localStorage.setItem("time","09:00 AM")
        }
        else{
            localStorage.setItem("time","06:00 PM")
        }
        let s=document.getElementById("main-container2");
        s.style.display="block";
    }
}
function makepayment(){
    window.location.href="makepayment.html";
}
function submitNP(){
    n=document.getElementById("n").value;
    d=document.getElementById("d").value;
    radio=document.getElementById("r1").checked
    if(!radio){
        radio=document.getElementById("r2").checked;
    }
    localStorage.setItem("np",n)
    showAmount(n,radio,d)
}
function ticket(){
    window.location.href="ticket.html";
}
function gbt(){
    localStorage.removeItem("np");
    localStorage.removeItem("movieName");
    localStorage.removeItem("time")
    window.location.href="home.html";
}