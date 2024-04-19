# Squarespace Schedule Manager

This project provides a simple yet dynamic scheduling system for Squarespace websites, enabling easy timezone conversion and display of weekly schedules.

## Features

- Dynamic loading of weekly schedules
- Timezone conversion for user-specific local times
- Easy integration with Squarespace sites

## Installation

To integrate the Squarespace Schedule Manager into your Squarespace site, follow these steps:

1. Copy and paste the `schedule-data.js` contents to the footer in your Squarespace custom scripts area inside a script tag.
2. Copy and paste the `scheduleData` variable from `index.html` into the header of your Squarespace custom scripts area inside a script tag.

## Configuration

Modify `scheduleData` data to fit your schedule needs. The format is as follows:

```js
var scheduleData = {
  Mondays: { time: "6:30", status: "active" },
  Tuesdays: { time: "20:00", status: "cancelled" },
  Wednesdays: { time: "8:00", status: "active" },
  Thursdays: { time: "6:30", status: "active" },
  Fridays: { time: "12:00", status: "active" },
  Saturdays: { time: "9:00", status: "active" },
  Sundays: { time: "10:00", status: "active" },
};
```

## Usage

Once installed, the script automatically converts the schedule times to the visitor's local timezone and updates the schedule display accordingly.

## Contributing

Contributions are welcome. Please fork the repository and submit a pull request with your changes.
