


export const isBetweenStartAndEnd =(startMinutes,endMinutes) => {
  const nowTime = getMinutesFromCurrentTime();
  return  nowTime >= startMinutes || nowTime < endMinutes
}

export const getMinutesFromCurrentTime = () => {
  const now = new Date();
  return now.getHours() * 60 + now.getMinutes()
}