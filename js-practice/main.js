const myName = "Lin"
function greet(person) {
    console.log(`hi,${myName}!`)
}
greet(myName);

const skills = ["HTML", "CSS", "JavaScript"]
skills.forEach((skill, index) => {
    console.log(`${index + 1}. ${skill}`);
});

const user = {
    name: "小明",
    age: 22,
    isStudent: true
};
console.log(user.name + "是学生吗？", user.isStudent ? "是" : "不是");
