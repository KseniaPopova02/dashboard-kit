import { StyledHeaderWrapper, StyledSubtitle, StyledTitle } from "./style";

function formatDate(date) {
  function getDayOrdinal(day) {
    if (day > 3 && day < 21) {
      return `${day}th`;
    }
    switch (day % 10) {
      case 1:
        return `${day}st`;
      case 2:
        return `${day}nd`;
      case 3:
        return `${day}rd`;
      default:
        return `${day}th`;
    }
  }

  function formatTime(time) {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const amPm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = String(minutes).padStart(2, "0");
    return `${formattedHours}:${formattedMinutes} ${amPm}`;
  }

  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();
  const time = formatTime(date);

  return `as of ${getDayOrdinal(day)} ${month} ${year}, ${time}`;
}

export const Header = () => {
  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);

  return (
    <StyledHeaderWrapper>
      <StyledTitle>Today’s trends</StyledTitle>
      <StyledSubtitle>{formattedDate}</StyledSubtitle>
    </StyledHeaderWrapper>
  );
};
