# Image Gallery Project

This is a simple Image Gallery project built using React, Context API, and Tailwind CSS. It fetches images from the Unsplash API and allows users to search for images based on keywords. You can use this project as a starting point for building your own image gallery applications.

## Features

- Fetches images from the Unsplash API.
- Dynamic grid layout for image cards.
- Search functionality to filter images by keywords.
- Responsive design with Tailwind CSS.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

1. **Clone the repository**:

   ```bash
   git clone https://github.com/inishantjain/tars-imageGallery
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Get your Unsplash API Access Key**:

   To fetch images from the Unsplash API, you need to create a developer account on [Unsplash](https://unsplash.com/developers) and obtain an API Access Key.

5. **Set your API Access Key**:

   In the project directory, create a `.env.local` file and add your API Access Key:
   similar to `env.example` file.

6. **Run the application**:

   ```bash
   npm run dev
   ```

The application should start locally at [http://localhost:5173](http://localhost:5173).

## How to Use

- Enter keywords in the search bar to filter images based on your search query.
- Click on the Twitter and Instagram icons in the image cards to visit the respective profiles.

## Project Structure

The project is organized with the following structure:

- `src` - Contains the main source code.
  - `components` - React components used in the project.
  - `context` - Context API for managing global state.
  - `images` - Images and icons used in the project.
  - `styles` - Tailwind CSS styles.
  - `App.js` - The main application component.

## Customization

You can easily customize this project by:

- Modifying the layout and styles in the `index.css` file.
- Adding additional features or functionality to enhance the image gallery.

## Credits

- This project uses the Unsplash API to fetch images. Visit [Unsplash](https://unsplash.com/) for more details on their API.



