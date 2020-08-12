var questionsArray = [
    {
        question: "Q2. A doctor gives you 3 pills telling you to take one every half hour. How many minutes will the pills last?",
        answer: 60,
        option: [
           " * &nbsp &nbsp 20",
            "* &nbsp &nbsp 40",
           " * &nbsp &nbsp 60",
           " * &nbsp &nbsp 80"]
    },
    {
        question: "Q3. You are participating in a race. You overtake the 2nd person. What position are you in?",
        answer: "2nd",
        option: [
            "1st",
            "2nd",
            "3rd",
            "4th"]
    },
    {
        question: "Q4. Which number logically follows this series?<br>4  &nbsp &nbsp   6   &nbsp &nbsp    9    &nbsp &nbsp   6   &nbsp &nbsp    14  &nbsp &nbsp     6  &nbsp &nbsp      ...",
        answer: 19,
        option: [
            6,
            17,
            19,
            21]
     }//,
    // {
    //     question: "A doctor gives you 3 pills telling you to take one every half hour. How many minutes will the pills last?",
    //     answer: 60,
    //     option: [
    //         20,
    //         40,
    //         60,
    //         80]
    // },
    // {
    //     question: "A doctor gives you 3 pills telling you to take one every half hour. How many minutes will the pills last?",
    //     answer: 60,
    //     option: [
    //         20,
    //         40,
    //         60,
    //         80]
    // },
    // {
    //     question: "A doctor gives you 3 pills telling you to take one every half hour. How many minutes will the pills last?",
    //     answer: 60,
    //     option: [
    //         20,
    //         40,
    //         60,
    //         80]
    // },
    // {
    //     question: "A doctor gives you 3 pills telling you to take one every half hour. How many minutes will the pills last?",
    //     answer: 60,
    //     option: [
    //         20,
    //         40,
    //         60,
    //         80]
    // },
    // {
    //     question: "A doctor gives you 3 pills telling you to take one every half hour. How many minutes will the pills last?",
    //     answer: 60,
    //     option: [
    //         20,
    //         40,
    //         60,
    //         80]
    // },
    // {
    //     question: "A doctor gives you 3 pills telling you to take one every half hour. How many minutes will the pills last?",
    //     answer: 60,
    //     option: [
    //         20,
    //         40,
    //         60,
    //         80]
    // },
    // {
    //     question: "A doctor gives you 3 pills telling you to take one every half hour. How many minutes will the pills last?",
    //     answer: 60,
    //     option: [
    //         20,
    //         40,
    //         60,
    //         80]
    // },
    // {
    //     question: "A doctor gives you 3 pills telling you to take one every half hour. How many minutes will the pills last?",
    //     answer: 60,
    //     option: [
    //         20,
    //         40,
    //         60,
    //         80]
    // },
    // {
    //     question: "A doctor gives you 3 pills telling you to take one every half hour. How many minutes will the pills last?",
    //     answer: 60,
    //     option: [
    //         20,
    //         40,
    //         60,
    //         80]
    // },
    // {
    //     question: "A doctor gives you 3 pills telling you to take one every half hour. How many minutes will the pills last?",
    //     answer: 60,
    //     option: [
    //         20,
    //         40,
    //         60,
    //         80]
    // },
    // {
    //     question: "A doctor gives you 3 pills telling you to take one every half hour. How many minutes will the pills last?",
    //     answer: 60,
    //     option: [
    //         20,
    //         40,
    //         60,
    //         80]
    // },
    // {
    //     question: "A doctor gives you 3 pills telling you to take one every half hour. How many minutes will the pills last?",
    //     answer: 60,
    //     option: [
    //         20,
    //         40,
    //         60,
    //         80]
    // },


]
var ques=document.getElementById('ques');
var opt0=document.getElementById('opt1');
var opt1=document.getElementById('opt2');
var opt2=document.getElementById('opt3');
var opt3=document.getElementById('opt4');
num=0;
//console.log(opt1[1]);
function next(){
    ques.innerHTML=questionsArray[num].question;
    opt0.innerHTML=questionsArray[num].option[0];
    // for(var i=0; i<4; i++){
        
    //     var op='opt'+i;
       
    // opt0.innerHTML=questionsArray[num].option[i];
    // console.log(op.innerHTML);}
    num++;
}