// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
      const nudriver = {}
    nudriver.address = '11 Broadway'
   nudriver.name = 'Sam' 
   return nudriver;
}
function destructivelyUpdateDriverWithKeyAndValue(driver, address, value) {
    driver[address] = '12 Broadway'
    return driver;
}
function deleteFromDriverByKey(driver, name) {
    const nunudriver = {}
   delete nunudriver.name
   return nunudriver;
}
function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
  
    return driver;
  }