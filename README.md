# SocialMedia Bio Link ~ Steps to Follow to Get Started

## Step 1: Clone the Repository

## Step 2: Install the Dependencies
```
$ npm install
```

## Step 3: Modify Data (Important)
Go to data folder and modify linkData, socialData, and userData. Do not change the formatting of the data. However, ensure that you add new ID numbers for each object in socialsData + linkData.

## Step 4: Setup Google Analytics

Head to https://analytics.google.com/analytics/web/ and go through the steps and get the Measurement ID.

Create a .env.local file and put that Measurement ID in it like so:

```
NEXT_PUBLIC_GOOGLE_ANALYTICS= G-XXXXXXXXX

```

## Step 5: Run the Server / Test

```
$ npm run dev
```
You can check if you did everything correctly by going to http://localhost:3000/

## Step 6: Deploy to Vercel

Go to https://vercel.com/. Connect vercel to your Github account and then go to your project and deploy to Vercel.