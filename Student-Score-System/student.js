const students =[];
function addStudent(name,score) {
    score = Number(score);
    score = score ?? 0;
    name = name.trim().toUpperCase();
    students.push ({name,score})
}

function getGrades(){
    return students.map((student) => {
        let grade ="F";
        if(student.score>=90) grade= "A";
        else if(student.score>=75) grade= "B";
        else if(student.score>=50) grade= "C";
        else if(student.score>=35) grade= "D";
        return {...student, grade}
    })
}

function getTopperScores(){
    return students.filter((student) => student.score>=75)
}

function findStudent(name){
    return students.find((student) => student.name == name)
}

function hasFailures(){
    return students.some((student) => student.score <35)
}

function displayAll(){
    const graded = getGrades();
    console.log("student Data");
    console.log("All students with Grade");
    console.log("Name | Score | Grade");
    graded.forEach((student)=>{
        console.log(`${student.name} | ${student.score} | ${student.grade}`)
    })
}

addStudent("John","91");
addStudent("Jabob","82");
addStudent("Joseph","44");
addStudent("Joames","29");

displayAll();

console.log("\n Top Scores:")
console.log(getTopperScores())
console.log("\n Searching for john:")
console.log(findStudent("JOHN"))

console.log ("\n Any Failures ?")
console.log(hasFailures()? "Yes some students failed": "No failures" )