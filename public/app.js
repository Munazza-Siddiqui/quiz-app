var questionsArray = [
    {
        question: "Q1. A doctor gives you 3 pills telling you to take one every half hour. How many minutes will the pills last?",
        answer: " * &nbsp; &nbsp; 60",
        option: [
            " * &nbsp &nbsp 20",
            "* &nbsp &nbsp 40",
            " * &nbsp &nbsp 60",
            " * &nbsp &nbsp 80"]
    },
    {
        question: "Q2. You are participating in a race. You overtake the 2nd person. What position are you in?",
        answer:"* &nbsp; &nbsp; 2nd",
        option: [
            " * &nbsp &nbsp 1st",
            "* &nbsp &nbsp 2nd",
            " * &nbsp &nbsp 3rd",
            " * &nbsp &nbsp 4th"]
    },
    {
        question: "Q3. Which number logically follows this series?<br>4&nbsp&nbsp6&nbsp&nbsp9&nbsp&nbsp6&nbsp&nbsp14&nbsp&nbsp6&nbsp&nbsp...",
        answer: " * &nbsp; &nbsp; 19",
        option: [
            " * &nbsp &nbsp 6",
            "* &nbsp &nbsp 17",
            " * &nbsp &nbsp 19",
            " * &nbsp &nbsp 21"]
    }
    ,
    {
        question: "Q4. 15 people shake hands with each other. how many will be their in total?",
        answer:  "* &nbsp; &nbsp; 105",
        option: [
            " * &nbsp &nbsp 120",
            "* &nbsp &nbsp 105",
            " * &nbsp &nbsp 60",
            " * &nbsp &nbsp 30"]
    },
    {
        question: "Q5. What relation is your niece's brother to you?",
        answer: " * &nbsp; &nbsp; Nephew",
        option: [
            " * &nbsp &nbsp Son",
            "* &nbsp &nbsp Cousin",
            " * &nbsp &nbsp Uncle",
            " * &nbsp &nbsp Nephew"]
    },
    {
        question: "Q6. Which number is a 1/2 of 1/2 of 1/5 of 200?",
        answer: " * &nbsp; &nbsp; 10",
        option: [
            " * &nbsp &nbsp 10",
            "* &nbsp &nbsp 20",
            " * &nbsp &nbsp 40",
            " * &nbsp &nbsp 100"]
    },
    {
        question: "Q7. Is it legal for a man to marry his widow's sister?",
        answer: "* &nbsp; &nbsp; No",
        option: [
            " * &nbsp &nbsp Yes",
            "* &nbsp &nbsp No",
            " * &nbsp &nbsp Sometime",
            " * &nbsp &nbsp Illegal"]
    },
    {
        question: "Q8. Which number comes next in the series? <br> 2-2-4-6-10-16",
        answer: " * &nbsp; &nbsp; 26",
        option: [
            " * &nbsp &nbsp 20",
            "* &nbsp &nbsp 18",
            " * &nbsp &nbsp 26",
            " * &nbsp &nbsp 24"]
    },
    {
        question: "Q9. Cathy, who is sixteen years old, is four times as old as her brother. How old will Cathy be when she is twice as old as her brother?",
        answer:" * &nbsp; &nbsp; 24",
        option: [
            " * &nbsp &nbsp 20",
            "* &nbsp &nbsp 18",
            " * &nbsp &nbsp 22",
            " * &nbsp &nbsp 24"]
    },
    {
        question: "Q10. Some months have 31 days; how many have 28?",
        answer: "* &nbsp; &nbsp; 12",
        option: [
            " * &nbsp &nbsp 8",
            "* &nbsp &nbsp 12",
            " * &nbsp &nbsp 1",
            " * &nbsp &nbsp 3"]
    },
    {
        question: "Q11. Divide 30 by 1/2 and add 10. What is the answer?",
        answer:  " * &nbsp; &nbsp; 70",
        option: [
            " * &nbsp &nbsp 25",
            "* &nbsp &nbsp 40",
            " * &nbsp &nbsp 70",
            " * &nbsp &nbsp 95"]
    },
    {
        question: "Q12. FRUIT is to TIURF as 46252 is to:",
        answer: " * &nbsp; &nbsp; 25264",
        option: [
            " * &nbsp &nbsp 25624",
            "* &nbsp &nbsp 46252",
            " * &nbsp &nbsp 25264",
            " * &nbsp &nbsp 42562"]
    },
    {
        question: "Q13. Take 1000 and add 40 to it. Now add another 1000. Now add 30. Add another 1000. Now add 20. Now add another 1000. Now add 10. What is the total?",
        answer: "* &nbsp; &nbsp; 4100",
        option: [
            " * &nbsp &nbsp 3080",
            "* &nbsp &nbsp 4100",
            " * &nbsp &nbsp 2500",
            " * &nbsp &nbsp 5200"]
    },
    {
        question: "Q14. Mary's father has 5 daughters:<br> 1. lana, 2. lene, 3. lini, 4. lono.<br> What is the name of the fifth daughter?",
        answer: " * &nbsp; &nbsp; mary",
        option: [
            " * &nbsp &nbsp neni",
            "* &nbsp &nbsp lani",
            " * &nbsp &nbsp mary",
            " * &nbsp &nbsp lunu"]
    },
    {
        question: "Q15. A family is traveling 300 miles from their house.If they plan to stop at parks every two hours, how many parks will they visit before they reach their destination assuming they travel 60 mph?",
        answer: "* &nbsp; &nbsp; 2",
        option: [
            " * &nbsp &nbsp 1",
            "* &nbsp &nbsp 2",
            " * &nbsp &nbsp 3",
            " * &nbsp &nbsp 4"]
    },


]

var ques = document.getElementById('ques');
var opt0 = document.getElementById('opt1');
var opt1 = document.getElementById('opt2');
var opt2 = document.getElementById('opt3');
var opt3 = document.getElementById('opt4');
var num = 0;
var count =0;

function start(e){
    ques.innerHTML = questionsArray[e].question;
    for (var i = 0; i < 4; i++) {
        opt[i].innerHTML = questionsArray[e].option[i];
    }
}

function next() {
    
    var ans=document.getElementsByClassName("active");
   if(ans[0].innerHTML== questionsArray[num].answer){
    count++;
}
    num++;
    if(num== 15){
        var second= document.getElementById("second");
        second.style.display="none"; 
        var third= document.getElementById("third");
        third.style.display="block"; 
        nameSave();
    }
    
    start(num);
    removeActive();
    
    
}

function active(e){
    removeActive();
    e.classList.add("active");
   }

function removeActive(){
    var r=document.getElementsByClassName("active");
    for(var i=0; i<r.length; i++){
    r[i].classList.remove("active");}
}

function nameSave(){
    var name=document.getElementById('name');
    var data=firebase.database().ref('quiz');
    var key=data.push().key;
    var quiz={
        name: name.value,
        score: count,
        key: key
    }
    data.child(key).set(quiz);
}

firebase.database().ref('quiz').on('child_added',function(data){
    var score= document.getElementById("score");
    score.innerHTML=data.val().score;
    var namee=document.getElementById("namee");
    namee.innerHTML=data.val().name;
    var cond= document.getElementById("cond");
    var para =document.getElementById("para");
    if(count<=6){
cond.innerHTML="Below Average!" 
para.innerHTML="NOT BAD!<br> You are in 90% of the people who got less than 7/10";
    }
    else if(count>= 7 && count<=11){
        cond.innerHTML="Average!"
        para.innerHTML="Good Job!<br> You are in those 9% of the people who got more than 6/10 ";
    }
    else if(count>= 12 && count<=15){
        cond.innerHTML="Above Average!"
        para.innerHTML="Awesome!! <br>Only 1% of the people who took the test got more than 11/15 correctly.<br> Way to go !!<br>You thrive on challenges, you feel driven by creative thinking<br> and you're highly insightful. Keep it up!<br> Your scores are truely remarkable!";

    }})

function set(){
    var first= document.getElementById("first");
    first.style.display="none";
    var second= document.getElementById("second");
    second.style.display="block";
    start(0);
}
