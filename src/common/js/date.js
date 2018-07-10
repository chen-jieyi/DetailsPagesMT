const formatDate = function(time) {
  let date = new Date(time * 1000);
  let fmt = 'yyyy.MM.dd';
  //年
  if(/(y+)/.test(fmt)){
    let year = date.getFullYear().toString();
    fmt = fmt.replace(RegExp.$1,year);
  }
  //月
  if (/(M+)/.test(fmt)) {
    let month = date.getMonth() + 1 ;
    month = month >= 10 ? month : '0' + month;
    fmt = fmt.replace(RegExp.$1,month);
  }
  //日
  if (/(d+)/.test(fmt)) {
    let myDate = date.getDate();
    myDate = myDate >= 10 ? myDate : '0' + myDate;
    fmt = fmt.replace(RegExp.$1,myDate);
  }

  return fmt
}

export {
  formatDate
}