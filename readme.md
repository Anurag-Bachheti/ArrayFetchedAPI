# Multi API Display

## Overview
This project fetches data from three different APIs in sequence and displays the results in a table format. The APIs used are:
1. Posts API
2. Products API
3. To-Do API

Each API call is executed one after another, ensuring the next API call is only made if the previous one succeeds.

## Features
- Fetches and displays data from multiple APIs in sequence.
- Uses Promises to handle API calls.
- Error handling to catch failed requests.
- Displays data in a tabular format.

## Technologies Used
- JavaScript
- Fetch API
- Promises
- HTML & CSS (for displaying data)

## How It Works
1. The user clicks the "Fetch Data" button.
2. The first API (`https://dummyjson.com/posts`) is called.
3. If successful, the second API (`https://dummyjson.com/products`) is called.
4. If successful, the third API (`https://dummyjson.com/todos`) is called.
5. The data from all three APIs is displayed in a table.

## Installation & Usage
1. Clone the repository or download the project files.
2. Open `index.html` in a browser.
3. Click the "Fetch Data" button to load and display API data.