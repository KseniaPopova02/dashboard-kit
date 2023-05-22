// export const formatData = (dataChart) => {
//   return Object.entries(dataChart).map(([key, value]) => {
//     let formattedValue = value;

//     switch (key) {
//       case "Average response time":
//         formattedValue = Math.floor(value / 60) + "h " + (value % 60) + "m";
//         return [key, formattedValue];
//       case "Average first response time":
//         if (value >= 60) {
//           formattedValue = Math.floor(value / 60) + "h " + (value % 60) + "m";
//         } else {
//           formattedValue = `${value}m`;
//         }
//         return [key, formattedValue];
//       case "Resolution within SLA":
//         formattedValue = `${value}%`;
//         return [key, formattedValue];
//       default:
//         return [key, value];
//     }
//   });
// };

export const formatData = (data) => {
  return data.map((item) => {
    let formattedValue = item.number;

    switch (item.label) {
      case "Average response time":
        formattedValue =
          Math.floor(item.number / 60) + "h " + (item.number % 60) + "m";
        return { ...item, number: formattedValue };
      case "Average first response time":
        if (item.number >= 60) {
          formattedValue =
            Math.floor(item.number / 60) + "h " + (item.number % 60) + "m";
        } else {
          formattedValue = `${item.number}m`;
        }
        return { ...item, number: formattedValue };
      case "Resolution within SLA":
        formattedValue = `${item.number}%`;
        return { ...item, number: formattedValue };
      default:
        return item;
    }
  });
};
