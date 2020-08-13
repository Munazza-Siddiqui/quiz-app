var questionsArray = [
    {
        question: "Q1. A doctor gives you 3 pills telling you to take one every half hour. How many minutes will the pills last?",
        answer: 60,
        option: [
            " * &nbsp &nbsp 20",
            "* &nbsp &nbsp 40",
            " * &nbsp &nbsp 60",
            " * &nbsp &nbsp 80"]
    },
    {
        question: "Q2. You are participating in a race. You overtake the 2nd person. What position are you in?",
        answer: "2nd",
        option: [
            " * &nbsp &nbsp 1st",
            "* &nbsp &nbsp 2nd",
            " * &nbsp &nbsp 3rd",
            " * &nbsp &nbsp 4th"]
    },
    {
        question: "Q3. Which number logically follows this series?<br>4&nbsp&nbsp6&nbsp&nbsp9&nbsp&nbsp6&nbsp&nbsp14&nbsp&nbsp6&nbsp&nbsp...",
        answer: 19,
        option: [
            " * &nbsp &nbsp 6",
            "* &nbsp &nbsp 17",
            " * &nbsp &nbsp 19",
            " * &nbsp &nbsp 21"]
    }
    ,
    {
        question: "Q4. 15 people shake hands with each other. how many will be their in total?",
        answer: 105,
        option: [
            " * &nbsp &nbsp 120",
            "* &nbsp &nbsp 105",
            " * &nbsp &nbsp 60",
            " * &nbsp &nbsp 30"]
    },
    {
        question: "Q5. What relation is your niece's brother to you?",
        answer: " Nephew",
        option: [
            " * &nbsp &nbsp Son",
            "* &nbsp &nbsp Cousin",
            " * &nbsp &nbsp Uncle",
            " * &nbsp &nbsp Nephew"]
    },
    {
        question: "Q6. Which number is a 1/2 of 1/2 of 1/5 of 200?",
        answer: 10,
        option: [
            " * &nbsp &nbsp 10",
            "* &nbsp &nbsp 20",
            " * &nbsp &nbsp 40",
            " * &nbsp &nbsp 100"]
    },
    {
        question: "Q7. Is it legal for a man to marry his widow's sister?",
        answer: "No",
        option: [
            " * &nbsp &nbsp Yes",
            "* &nbsp &nbsp No",
            " * &nbsp &nbsp Sometime",
            " * &nbsp &nbsp Illegal"]
    },
    {
        question: "Q8. Which number comes next in the series? <br> 2-2-4-6-10-16",
        answer: 26,
        option: [
            " * &nbsp &nbsp 20",
            "* &nbsp &nbsp 18",
            " * &nbsp &nbsp 26",
            " * &nbsp &nbsp 24"]
    },
    {
        question: "Q9. Cathy, who is sixteen years old, is four times as old as her brother. How old will Cathy be when she is twice as old as her brother?",
        answer: 24,
        option: [
            " * &nbsp &nbsp 20",
            "* &nbsp &nbsp 18",
            " * &nbsp &nbsp 22",
            " * &nbsp &nbsp 24"]
    },
    {
        question: "Q10. Some months have 31 days; how many have 28?",
        answer: 12,
        option: [
            " * &nbsp &nbsp 8",
            "* &nbsp &nbsp 12",
            " * &nbsp &nbsp 1",
            " * &nbsp &nbsp 3"]
    },
    {
        question: "Q11. Divide 30 by 1/2 and add 10. What is the answer?",
        answer: 70,
        option: [
            " * &nbsp &nbsp 25",
            "* &nbsp &nbsp 40",
            " * &nbsp &nbsp 70",
            " * &nbsp &nbsp 95"]
    },
    {
        question: "Q12. FRUIT is to TIURF as 46252 is to:",
        answer: 25264,
        option: [
            " * &nbsp &nbsp 25624",
            "* &nbsp &nbsp 46252",
            " * &nbsp &nbsp 25264",
            " * &nbsp &nbsp 42562"]
    },
    {
        question: "Q13. Take 1000 and add 40 to it. Now add another 1000. Now add 30. Add another 1000. Now add 20. Now add another 1000. Now add 10. What is the total?",
        answer: 4100,
        option: [
            " * &nbsp &nbsp 3080",
            "* &nbsp &nbsp 4100",
            " * &nbsp &nbsp 2500",
            " * &nbsp &nbsp 5200"]
    },
    {
        question: "Q14. Mary's father has 5 daughters:<br> 1. lana, 2. lene, 3. lini, 4. lono.<br> What is the name of the fifth daughter?",
        answer: "mary",
        option: [
            " * &nbsp &nbsp neni",
            "* &nbsp &nbsp lani",
            " * &nbsp &nbsp mary",
            " * &nbsp &nbsp lunu"]
    },
    {
        question: "Q15. A family is traveling 300 miles from their house.If they plan to stop at parks every two hours, how many parks will they visit before they reach their destination assuming they travel 60 mph?",
        answer: 2,
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

function start(e){
    ques.innerHTML = questionsArray[e].question;
    for (var i = 0; i < 4; i++) {
        opt[i].innerHTML = questionsArray[e].option[i];
    }
}

function next() {
    num++;
    start(num);
}