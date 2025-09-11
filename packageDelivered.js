//was the package received the day before it was sent?
function was_package_received_yesterday(tz_from, tz_to, start, duration) {
  //first start to duration time in tz_from world.
  // start + duration comes first

  let x = start + duration
  let y = tz_from + tz_to
  let localTimeReceived = x + y

  //if tz_to is - and tz_from is positive then ... stopping here

  console.log(tz_from, tz_to, start, duration)
  
  
  return true ;
}

was_package_received_yesterday(1, 2, 3, 4)