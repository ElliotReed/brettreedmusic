import React from "react"

const Calendar = () => {
  return (
    <div
      style={{ textAlign: "center", maxwidth: "1080px", margin: "50px auto" }}
    >
      <iframe
        title="calendar"
        src="https://calendar.google.com/calendar/embed?wkst=2&amp;bgcolor=%23ffffff&amp;ctz=America%2FDenver&amp;src=ZWxsaW90X2RldkBlbGxpb3RyZWVkLm5ldA&amp;src=cjZlZzU4dGdvY2hzbjB0bXV2OGZjMGhwYmtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23039BE5&amp;color=%23F09300&amp;showTitle=0&amp;showCalendars=0&amp;mode=AGENDA&amp;showNav=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showTz=1"
        style={{ borderWidth: "0px" }}
        width="100%"
        height="500"
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div>
  )
}
export default Calendar
