export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeUpdate = newGrades.find((grade) => grade.studentId === student.id);
      if (gradeUpdate) {
        return { ...student, grade: gradeUpdate.grade };
      }
      return { ...student, grade: 'N/A' };
    });
}
