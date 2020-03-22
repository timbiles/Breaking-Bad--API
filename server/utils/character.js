const capitalizeFirstLetter = (string) => {
  return string.split(' ').map( w =>  w.substring(0,1).toUpperCase()+ w.substring(1)).join(' ')
};

module.exports = {
  capitalizeFirstLetter
}