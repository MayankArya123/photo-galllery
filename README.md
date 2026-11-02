# Photo Gallery Web App
A responsive Photo Gallery application built using **React, Vite, and Tailwind CSS**

## Features

- **Photo Fetching:** Fetches 30 photos from the Picsum Photos API.
- **Loading State:** Displays a loading spinner while photos are being fetched.
- **Error Handling:** Displays an error message if the API request fails.
- **Responsive Gallery:** Displays photos in a responsive grid:
  - Desktop: 4 columns
  - Tablet: 2 columns
  - Mobile: 1 column
- **Search Functionality:** Filters photos by author name in real time without additional API requests.
- **Favourites:** Add or remove photos from favourites using a heart button.
- **Persistent Storage:** Saves favourite photo IDs in localStorage so they remain available after refreshing the page.

## Tech Stack

- React
- Vite
- JavaScript
- Tailwind CSS
- Picsum Photos API
- React Hooks:
  - `useState`
  - `useEffect`
  - `useReducer`
  - `useCallback`
  - `useMemo`
  - Custom Hook (`useFetchPhotos`)

## Project Structure

```text
src/
├── components/
│   ├── Gallery.jsx
│   ├── PhotoCard.jsx
│   └── SearchBar.jsx
├── hooks/
│   └── useFetchPhotos.js
├── reducers/
│   └── favoritesReducer.js
├── App.jsx
├── index.css
└── main.jsx
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/MayankArya123/photo-galllery.git
   ```

2. Navigate to the project directory:

   ```bash
   cd photo-gallery
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the application in your browser at:

   ```text
   http://localhost:5173
   ```

## API Used

**Picsum Photos API**

Endpoint:

```text
https://picsum.photos/v2/list?limit=30
```

The application fetches 30 photos when the Gallery component loads. Search filtering is performed on the already-fetched data.

## React Concepts Used

### Custom Hook – useFetchPhotos

Separates API fetching logic from the UI and returns:

- `photos`
- `loading`
- `error`

### useReducer

Manages the favourites list through a `TOGGLE_FAVORITE` action, allowing users to add and remove favourite photos.

### localStorage

Persists favourite photo IDs across browser refreshes.

### useCallback

Memoizes the search handler function reference to avoid unnecessary function recreation when dependencies remain unchanged.

### useMemo

Memoizes the filtered photo list and recalculates it when the photos or search keyword changes.

## Assignment Scope

This project implements the requirements specified in the Celebrare Frontend React Internship pre-screening assignment.

**Developed by:** Mayank Arya