export default function getStudentsByLocation(obj, location) {
  // let foundLocations = [];
  // for (let i = 0; i < obj.length; i++) {
  //   if (obj[i].location === location) {
  //     foundLocations.push(obj[i]);
  //   }
  // }
  // return foundLocations;
  // return obj
  //   .map((person) => person.location === location ? person : null)
  //   .filter((person) => person !== null);
  return obj.filter((person) => person.location === location);
}
