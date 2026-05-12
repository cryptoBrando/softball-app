# 12U Softball Team Manager

Welcome to the 12U Softball Team Manager app! This repository contains a progressive web application designed to help coaches manage game itineraries, team rosters, schedules, and a library of modern drills.

## Repository Structure
- \softball-app/\: Contains the Next.js React application.
- \pregameitinerary\: The original text draft of the 45-minute modern pre-game warmup.

## How to Run Locally
1. Open a terminal and navigate to the application folder:
   \cd softball-app\
2. Install dependencies (if you haven't already):
   \
pm install\
3. Run the development server:
   \
pm run dev\
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to GitHub Pages
Because the app is located in the \softball-app\ subfolder, when you set up the GitHub Action for GitHub Pages, make sure to specify the working directory or use a custom Next.js deployment workflow that points to \./softball-app\.
