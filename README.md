This is a weather forecast app in NextJS. It uses OpenWeatherMap API.

How it works:

- 3 pages
- Search page
Initial landing page where you can make first weather forecast request

- ResultsPage
After makeing initial API request routed to results page which shows minimal information regarding the weather forecast for next 5 days for place you have requested. Able to click on a day a navigate to third page

- DetailedForecast
This is the third page which reveals more detailed information reagerding the forecast for the the specific day you clicked on in results

- All three pages have a search form in the navbar to perform a new weather search. This will take you to the 5 day results pahge for that new location searched.

- You are currently not able to return to the main search landing page via the other pages, you must manual update the URL.



Each page has a few reusable components that you can find in the Components folder.

I decided to use NextJs as it's considered best practice from the React docs, however my previous experience was from CreateReactApp.

I attempted to test the components in the **tests** folders. I did encountered a couple of challenges for testing. 

Another challange was in regard to the open weather API which is different to that given in the challange documentation. The new forecast endpoint didn't accept city as a param rather coordinates hence why I required 2 API calls to be able to return the 5day forcast. 

If I had more time:

- Fix the tests so it ignores CSS files
- Create end to end test to test the interaction between the components
- Get current location would be cool
- Improve test coverage
-add a route back to the main search page from both result pages
- Have done some but maybe tidy up CSS a little bit more as I'm sure there is some duplicate styling still
- would improve experience if input is incorrect(eg not a city)
- Include ability to press enter to triggger API with input data

I'm open to any feedback and hope to have the opportunity to talk this through with you

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
