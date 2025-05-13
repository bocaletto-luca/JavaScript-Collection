# Digital Clock

**Author:** Bocaletto Luca  
**License:** GPL v3

## Overview

This project is a responsive digital clock web application built with HTML5, JavaScript (ES6), and Bootstrap for styling. The clock displays the current time based on your server’s time by fetching a server time value from a configurable endpoint. If the server time cannot be retrieved, the clock gracefully falls back to using the client’s time.

## Features

- **Responsive Design:** Uses Bootstrap to ensure the clock looks great on all devices.
- **Server Time Synchronization:** Fetches the current server time and calculates an offset, so the displayed time is synchronized with the server.
- **Reusable Code:** The digital clock is implemented using a reusable ES6 class (`DigitalClock`) that can be easily extended or integrated into other projects.
- **Fallback Mechanism:** If the server time cannot be fetched, the clock uses the client time.

## Setup and Usage

1. **Open Your MySQL Client or phpMyAdmin:**  
   (Not applicable here—this is a front-end JavaScript project.)

2. **Server Time Endpoint (Optional):**  
   Create a server endpoint (e.g., `servertime.php`) that returns the current server time in JSON format:
   ```php
   <?php
   // servertime.php
   header("Content-Type: application/json");
   // Returns the current server time as an ISO8601 string.
   echo json_encode(["serverTime" => gmdate("c")]);
   ?>
