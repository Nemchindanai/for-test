export const ConvertDate = (e) => {
  const month_list = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Octr",
    "Nov",
    "Dec",
  ];

  const d = new Date(e);
  let month = month_list[d.getMonth()];
  let day = d.getDay();
  return `${day} ${month}`;
};

export const ConvertTime = (e) => {
  const d = new Date(e);
  let Hours = d.getHours();
  let Minutes = d.getMinutes();

  return `${String(Hours).length === 1 ? "0" + Hours : Hours} : ${
    String(Minutes).length === 1 ? "0" + Minutes : Minutes
  }`;
};
