[IPL DASHBOARD](https://ipl-statistics.vercel.app/) is a NextJS project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). For versioning, check all the Pull requests, they're in order of the development.

## Running locally

Firstly, install node modules
```bash
npm i
# or
yarn
```
Secondly, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Page Speed Insights
Page speed is calculated by Google Page Speed Insights <br>
The first contentful paint takes 2.1s and has an average rating of 97/100. <br>

![Homepage](https://github.com/manuarora700/ipl-statistics/blob/master/public/screenshots/pagespeed/1.png?raw=true)

However, caching is done internally by NextJS, so the first hit record a rating of 67/100, subsequent hits are cached and has a rating of 97/100. <br>

This feature of NextJS is powerful since it is a SSG, it feels almost seamless while transitioning from one page to the other.

## Project Structure
The project is majorly structures in Three parts:
1. Components (Here all the reusable components live ex: Navbar, Header, PlayerTable, RunsTable etcetera)
2. Pages (Here all the routes are listed, every route uses components internally)
3. Styles (Basic styling is used for styling the application to make it look minimal and simple).

Entire project is divided into small components which are reusable and easy to understand providing with the capability of scalability without sacrificing on the UI part.


## Screenshots

### Homepage
![Homepage](https://github.com/manuarora700/ipl-statistics/blob/master/public/screenshots/8.png?raw=true)
### Teams Page
![Homepage](https://github.com/manuarora700/ipl-statistics/blob/master/public/screenshots/1.png?raw=true)
### Team statistics
![Homepage](https://github.com/manuarora700/ipl-statistics/blob/master/public/screenshots/2.png?raw=true)
### Player Details
![Homepage](https://github.com/manuarora700/ipl-statistics/blob/master/public/screenshots/3.png?raw=true)
### Individual Players
![Homepage](https://github.com/manuarora700/ipl-statistics/blob/master/public/screenshots/4.png?raw=true)
### Individual Strikerate
![Homepage](https://github.com/manuarora700/ipl-statistics/blob/master/public/screenshots/5.png?raw=true)
### Search Player
![Homepage](https://github.com/manuarora700/ipl-statistics/blob/master/public/screenshots/6.png?raw=true)
### Average Strikerate & Most Runs for all players
![Homepage](https://github.com/manuarora700/ipl-statistics/blob/master/public/screenshots/7.png?raw=true)

## Backend

Backend is hosted on Heroku, I converted the dataset from csv, excel files to JSON and hosted them on Heroku. <br>
[Link for backend](https://young-wildwood-83401.herokuapp.com/)
<br>
Every REST API serves its purpose
- `/teams` for getting individual team details
- `/players` for getting all the players
- `/averageStrikerate` for getting all strikerates
- `/matches` for getting all matches details
- `/most_runs_average_strikerate` for getting most runs and average strike rate for every player
- `/teams_home_and_away_statistics` for teams home and away statistics
## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deployed on Vercel

The project is deployed on Vercel.

