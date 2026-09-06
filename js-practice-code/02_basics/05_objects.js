// destructuring

const course = {
    courseName: "js-basics",
    coursePrice: "999",
    courseInstructor: "Hitesh"
}

const {courseInstructor} = course

console.log(courseInstructor)

const {courseInstructor: instructor} = course
console.log(instructor)