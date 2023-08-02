This is a Application project bootstrapped for `GOTO [Technical Test]: Anime Collections Project Assignment`
You can find the final result in : [https://nextanime-stanley.vercel.app/](https://nextanime-stanley.vercel.app/)


## Getting Started
### How does this conform with the Technical requirements ?
- Utilizes Typescript.
- Build React.js
- SPA (single page application), you can find the main code in `/src/pages/index.tsx`
- Use GraphQL, with AniList GraphQL API to get anime list and anime detail
- Use CSS in Js (emotion css).
- Collection data (list of collections with its anime added) is persistent, not be removed/reset on page reload. 
- Utilizes Web Storage API to store the data (Didn’t use the Anilist Graphql mutation).


### Then what about the functionality?
Open this link:  [https://nextanime-stanley.vercel.app/](https://nextanime-stanley.vercel.app/)

#### Anime List Page (Homepage at /src/pages/home.tsx)
1. Anime List
As a user, you can see 10 anime on initial page load.
- For each anime, it shows info like anime title and anime cover/banner.
- Each anime item are clickable, and will redirect to Anime Detail page when clicked.
- Anime List page has pagination functionality.

2. Bulk add to the collection
As a user, you can add multiple anime to the collection at once.
- On the page, click `Bulk add to collection` on any card
- User can select multiple anime item/card to be added into a collection via Modal/PopUp form.
- If user want to bulk add anime to collection but there is no collection yet, user can set collection name as new collection.


#### Anime Detail Page (Page at /src/pages/anime/[id].tsx)
1. Anime detail info (just Click any Anime on the homepage)
- Show anime cover/banner.
- Show anime title.
- Show other anime details (description, number of episodes, genres, rating, etc).

2. Add to the collection
As a user, you can the anime to the collection. Simply click the `Add to Collection button` on the page
- User can add anime to an existing collection.
- If user want to add anime to collection but there is no collection yet, user can set collection name as new collection.
- User can add an Anime to many collection

3. Collection info
- User can see list of collection names where the anime already added.
- User can click the collection name, and will redirect to Collection Detail page.

#### Collection List Page (Page at /src/pages/collection/index.tsx)
1. Collection list info (click `My Collection` button on top navbar)
As a user, you can see list of collection that is already added.
- Show all collections at once on initial load page.
- Each collection item shows collection name.
- Each collection item shows anime cover/banner from the firstly added anime. If no anime added yet, the default image will be cover/banner.
- User can click the collection item, and will redirect to Collection Detail page.
- The collections in this list persist even after a full page reload.

2. Crud Functionality
- Shown “Remove” button on each collection item/card.
- There is confirmation modal/popup when user click Remove button, with collection name info.
- Shown “Add a Collection” button on top of Collection List page. 
- When button clicked, show modal/popup to fill collection name and submit as new collection.
- Shown “Edit” button on each collection item/card.
- Added modal/popup when user click Edit button, with collection name input field, and submit button.
- After edit, add, or remove finished, collection list is updated without reloading the page.

#### Collection Detail Page (Page at /src/pages/collection/[id].tsx)
1. Collection detail info
As a user, you can see list of anime that is already added.
- Show all animes at once on initial load page.
- Each anime item shows anime name and other details.
- User can click the anime item, and will redirect to anime Detail page.
- The animes in this list persist even after a full page reload.

2. Crud Functionality
- Shown “Remove” button on each collection item/card.
- There is confirmation modal/popup when user click Remove button, with collection name info.
- After remove finished, collection list is updated without reloading the page.

### Additional Requirement
1. Automated test via Github Action
2. React with React Hooks
3. GraphQL using Apollo Client
4. Unit Test using Jest
5. SSR (Universal Rendering)
