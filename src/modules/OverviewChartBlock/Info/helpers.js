export const formatData = (dataChart) => {
  return Object.entries(dataChart).map(([key, value]) => {
    let formattedValue = value;

    switch (key) {
      case "Average response time":
        formattedValue = Math.floor(value / 60) + "h " + (value % 60) + "m";
        return [key, formattedValue];
      case "Average first response time":
        if (value >= 60) {
          formattedValue = Math.floor(value / 60) + "h " + (value % 60) + "m";
        } else {
          formattedValue = `${value}m`;
        }
        return [key, formattedValue];
      case "Resolution within SLA":
        formattedValue = `${value}%`;
        return [key, formattedValue];
      default:
        return [key, value];
    }
  });
};
