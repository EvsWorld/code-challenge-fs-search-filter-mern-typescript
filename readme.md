# Code Challenge Requirements

Create a simple React application that shows a list of construction companies, each with the
following information:

- Company name
- Logo (you may use a placeholder image, e.g. using https://placekitten.com/)
- Specialties (e.g. Excavation, Plumbing, Electrical)
- City
  The following should be possible:
- Search for a company by typing into a search field. The search term gets matched only
  against the company name and the list of companies is filtered based on the search term
  in real time as the user is typing.
- Filter the list using a set of checkboxes to include only those companies which offer a
  particular speciality (e.g. only Plumbing).
  Create a simple API based on Node.js that returns the list of companies to the frontend. The
  API can read the data from a simple JSON source, no database setup is required.
  In addition, make a list of ideas on how you would improve this application if you had more time
  to work on it.

---

## Operation

First install the packages by going to `src/api` and `src/client` and running `npm install` in each.

To run backend, go to `src/api` and run `npm start`

To run frontend, go to `src/client` and run `npm start`

## Notes

I used mockaroo.com for the dummy data. However it didn't give an array of multiple specialties per company, so I made a little script to randomly assign specialties to each company. That script is in `src/api/utilities/makeCompanyWithArrays.js`. It takes in the file `src/api/db/companyDataFromMockeroo.json` and writes to `src/api/db/companiesWithArrays.json`, which is used as the database for the backend.

The front end is in typescript and the back is just in javascript. If I were going to spend more time on it, I would have done the backend in typescript, added pagination, implemented some debouncing/throttling mechanism and more complex regex considerations for the search filter. In coding the filter, I did it in such as way that it would be easy to layer additional filters onto it later. Also if this were a production app, I would want to have all the filter components in their own file location/component, and then imported into App.tsx. But I had to leave it here. I hope this provides you with an idea of how I would tackle this type of problem.
