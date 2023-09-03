# Reading List App

## Description

This is a simple app that allows users to create a reading list. Users can add
books to the list, and mark them as read or unread. Users can also delete books
from the list.

## Last Version

![bookmarks](public/v2dark-bookmarks.png)

### Light Mode

![v2light](public/v2light.png)

### Dark Mode

![v2dark](public/v2dark.png)

## Technologies and Tools Used

![Next.js](https://img.shields.io/badge/-Next.js-000000?style=flat&logo=next.js)
![React](https://img.shields.io/badge/-React-000000?style=flat&logo=react)
![Tailwind
CSS](https://img.shields.io/badge/-Tailwind%20CSS-000000?style=flat&logo=tailwind-css)
![NextUI](https://img.shields.io/badge/-NextUI-000000?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/-TypeScript-000000?style=flat&logo=typescript)
![EsLint](https://img.shields.io/badge/-EsLint-000000?style=flat&logo=eslint)

## More Information

This app is part of the challenge from [***Pruebas Técnicas de
Programación***](https://pruebastecnicas.com/) from
[***@midudev***](https://midu.dev/). The goal of this challenge is to design and
implement a small web application for a reading list using the tools of your
choice. The app should have the following features:

- [X] **Book List View**: The app should show a list of books that the user
    can review.
- [X] **Reading List Creation**: The user should be able to create a reading
- [X] **Book Filtering by Genre**: Users should be able to filter the list of
    available books by genre, and a counter will be displayed with the number of
    available books, the number of books in the reading list and the number of
    books available in the selected genre.
- [X] **State Synchronization**: There must be a global state synchronization
- [X] **Data Persistence**: The app should persist the reading list data in the
    browser's local storage. When reloading the page, the reading list should be
    maintained.
- [X] **Tab Synchronization**: If the user opens the app in two different tabs,
    the changes made in one tab should be reflected in the other. No need to use
    Backend.
- [X] **Deployment**: The app should be deployed on some free hosting service
- [X] **Test**: The app should have AT LEAST one test. Do the test you consider
    most important for your app.

You can find the original challenge in the following
[link](https://github.com/midudev/pruebas-tecnicas/tree/main/pruebas/01-reading-list)

## Additional Features Implemented (and TODOs)

- [X] **Dark Mode**: The app should have a dark mode.
- [X] **Responsive Design**: The app should be responsive.
- [ ] **Bilingual**: The app should be bilingual (English and Spanish).
- [ ] **Accessibility**: The app should be accessible.
- [ ] **Search**: The app should have a search bar to search for books by title,
    author, etc.
- [ ] **More Filters**: The app should have more filters, such as author, year,
    etc.

## How to Run

### Clone the Repository

```bash
git clone git@github.com:jamerrq/reading-list-app.git
```

### Install Dependencies

```bash
pnpm install
```

### Run the App

```bash
pnpm dev
```

### Run Tests

```bash
pnpm test
```

### Build the App

```bash
pnpm build
```

Important: The app is configured to use the `pnpm` package manager. In case you
want to do it this way include the following in the `.npmrc` file:

```bash
public-hoist-pattern[]=*@nextui-org/*
```

Otherwise, you can use `npm` or `yarn` to install the dependencies.

Copyrigth © 2023 [jamerrq](https://www.github.com/jamerrq)
