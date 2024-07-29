export default function getListStudentIds(objs) {
  if (Array.isArray(objs)) {
    // let ids = [];
    // for (let i = 0; i < objs.length; i++){
    //     ages.push(objs[i].id);
    // }
    // return objs.map(person=>person.id);
    // objs.forEach(person => { ids.push(person.id); });
    return objs.map((person) => person.id);
  }
  return [];
}
