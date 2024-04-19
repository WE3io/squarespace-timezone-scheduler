document.addEventListener("DOMContentLoaded", function () {
  YUI().use("node", function (Y) {
    function formatSessionTime(utcTimeStr) {
      const [hour, minute] = utcTimeStr
        .split(":")
        .map((num) => parseInt(num, 10));
      const date = new Date();
      date.setUTCHours(hour, minute, 0, 0);

      const options = {
        hour: "numeric",
        minute: "2-digit",
        timeZoneName: "short",
        hour12: true,
      };

      const formattedTime = new Intl.DateTimeFormat("en-GB", options).format(
        date
      );
      return formattedTime.replace(":00", "");
    }

    Y.on("domready", function () {
      const daysOfWeek = [
        "Mondays",
        "Tuesdays",
        "Wednesdays",
        "Thursdays",
        "Fridays",
        "Saturdays",
        "Sundays",
      ];
      daysOfWeek.forEach((day) => {
        Y.all("p").each(function (node) {
          if (node.getContent().includes(day)) {
            const daySchedule = scheduleData[day];
            const timeElement = node.next("p"); // Assuming the time element follows directly
            if (daySchedule.status === "cancelled") {
              timeElement.setContent("<em>Cancelled</em>");
              timeElement.setStyle("color", "red");
            } else {
              const sessionTime = formatSessionTime(daySchedule.time);
              timeElement.setContent(sessionTime);
            }
          }
        });
      });
    });
  });
});
