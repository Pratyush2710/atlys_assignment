# Social Feed Application

## Overview

This is a social feed application where users can share their thoughts, view posts from others, and interact with a community. The application is built with React and TypeScript and features a modular design using reusable atomic components. The UI is styled using SCSS modules for better maintainability and scalability.

Demo : [https://drive.google.com/file/d/1HYk0GbJxuXRZAkgyPvyLIjTHsm0GRqjC/view?usp=sharing](https://drive.google.com/file/d/1HYk0GbJxuXRZAkgyPvyLIjTHsm0GRqjC/view?usp=sharing)

## Features

- **Feed List:** Display a list of posts from different users.
- **Create Post:** Users can share their thoughts via a post.
- **Login/Register:** Users need to log in or register to create a post. This is handled through a modal with a blurred background.
- **Responsive Design:** The application is fully responsive and works across various devices.
- **Comments Section:** Users can comment on posts (implementation details pending).
- **Actions Menu:** Each post has an actions menu with options (specific actions pending).
- **Form Validation:** Form validation using Yup.
- **Context API:** Manages authentication state using Context API.

## Pages

- **FeedHomePage:** Renders the title, post box, feed list, and the modal with login/register for unauthenticated users to post.
- **LoginAndRegisterPage:** Displays the auth form with onLogin to close the modal and redirect to the posts page if coming from the login screen.
- **NotFoundPage:** Displays a 404 error message for unmatched routes.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/social-feed-app.git
    cd social-feed-app
    ```

2. Install dependencies:
    ```sh
    npm install
    ```
    or
    ```sh
    yarn install
    ```

3. Start the development server:
    ```sh
    npm start
    ```
    or
    ```sh
    yarn start
    ```

    The application will be available at `http://localhost:3000`.

## Project Structure

The project follows a modular structure with reusable components. Below is an overview of the main directories and files:

### Components

#### `AuthForm`

Handles user authentication with login and register forms.

- **AuthForm.tsx:** Contains the form logic and state management.
- **AuthForm.module.scss:** Styles specific to the AuthForm component.

#### `FeedList`

Displays a list of posts.

- **FeedList.tsx:** Fetches and renders the list of posts.
- **FeedList.module.scss:** Styles specific to the FeedList component.
- **CommentSection.tsx:** Manages comments within each post.
- **FeedItem.tsx:** Contains the UI and logic for displaying a post.
- **PostBox.tsx:** Handles the UI for creating a new post.

#### `InputComponent`

Reusable input components for forms.

- **InputComponent.tsx:** Contains the input logic and state management.
- **InputComponent.module.scss:** Styles specific to the InputComponent.

#### `ModalComponent`

Handles the modal logic for displaying the login/register form.

- **ModalComponent.tsx:** Contains the modal logic and structure.
- **ModalComponent.module.scss:** Styles specific to the Modal component.

### Context

#### `authContext.ts`

Manages the authentication state using Context API.

- **authContext.ts:** Stores login token and user data to `localStorage`, handles logout, and checks if the user is authenticated.

### Hooks

#### `useToggleOpen.ts`

Custom hook to manage the state of the modal.

- **useToggleOpen.ts:** Exposes `isOpen`, `open`, `close`, and `toggle` to manage the state of the modal.

### Pages

#### `FeedHomePage`

Renders the homepage with the feed list.

- **FeedHomePage.tsx:** Includes the title, post box, feed list, and modal for unauthenticated users to post.

#### `LoginAndRegisterPage`

Renders the login and register page.

- **LoginAndRegisterPage.tsx:** Contains the auth form with onLogin to close the modal and redirect to the posts page if coming from the login screen.

#### `NotFoundPage`

Renders a 404 error page for unmatched routes.

- **NotFoundPage.tsx:** Displays a message indicating the page was not found.

### Data

#### `data.json`

Contains dummy data for the feed list.

## Routes

- **/** and **/posts**: Homepage of the application with feeds. Feeds can be accessed as a guest user.
- **/auth/login**: The sign-in and sign-up page to help users onboard to the application. Sets a random token post-validation errors resolution and marks the user as authenticated.

## Form Validation

Forms are validated using [Yup](https://github.com/jquense/yup) for schema validation.

## Usage

- To view the feed as a guest, simply navigate to the homepage.
- To create a post, log in or register via the modal that appears on clicking the "Post" button.
- Use the actions menu on each post for further interactions (specific actions pending).
- Comments can be added by clicking the comment section icon on each post ( pending ).
