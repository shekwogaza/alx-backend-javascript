export default function getStudentIdsSum(obj) {
  return obj.reduce((sum, person) => sum + person.id, 0);
}
