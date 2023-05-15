export const getValueFromLocalStorage = (key) => {
  try {
    const data = localStorage.getItem("users");
    if (data !== null) {
      const parsedData = JSON.parse(data);
      if (Array.isArray(parsedData) && parsedData.length > 0) {
        const lastItem = parsedData[parsedData.length - 1];
        return lastItem[key];
      } else if (typeof parsedData === "object") {
        return parsedData[key];
      }
    }
  } catch (error) {
    console.log("Error retrieving value from localStorage:", error);
  }
  return undefined;
};
