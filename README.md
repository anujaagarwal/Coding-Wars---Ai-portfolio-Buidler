# AI portfolio builder - (Coding wars)

## 1. Introduction

The AI Portfolio builder aims to provide a simplified user interface for gathering personal and professional information from users to generate a prompt for GPT, which will then be used to create a personalised portfolio website. 

Following are the features, user interface, and technical aspects of the project.

## 2. Features

### 2.1 Template Selection

- Users can select from three template varieties: Professional, Creative, and Academic.
- Layout options include Header Positioning (top, side) and the choice to include a photo in the header. If yes then ask for the image URL.

### 2.2 Information Input

- Add a field for "Professional Summary".
- Update to allow multiple experience entries.
    - Each entry should have fields for:
        - Job Title
        - Company Name
        - Duration
        - Responsibilities (a list of text inputs).
- **Education** section to allow users to input their education details.
    - Relevant Courses (a list of text inputs).
    - Graduation Year
    - Institution Name
    - Degree Title
- **Skills section:** Update to allow a list of skills.
- **Contact** section for contact information with fields for:
    - GitHub URL
    - LinkedIn URL
    - Twitter URL

### 2.3 Template Customization

- Users can customize the primary, secondary, and background colors of the template.
- Font Selection and Font Size Adjustment are available.

### 2.4 Portfolio Generation

- Upon submission, the form data is formatted into a GPT prompt which will be sent to openAI text completion API to generate code for the portfolio website. Users can download this code or copy it from the web app.

## 3. User Interface

- A single-page application with a form layout divided into three sections for Template Selection, Information Input, and Template Customization.
- A submission button labeled "Generate Portfolio" to trigger the portfolio generation process.

## 4. Technical Aspects

### 4.1 Frontend

- The app is built using HTML, Tailwind CSS, and JavaScript. (React is optional)
- Form data is collected using HTML form elements and handled using JavaScript.

### 4.2 GPT Prompt Generation

- A JavaScript function named `createGptPrompt` is used to format the form data into a GPT prompt string.
- The GPT prompt is then sent to openAI text completion API to generate code for the portfolio website.

### 4.3 Accessibility

- Basic accessibility features such as semantic HTML and form labels are implemented to ensure the app is usable by a wide audience.

## 5. Brownie points

- Implementation of the multiple layout styles for Experience, Projects.
- Option to allow custom Image sections/gallery.
- Integration with the Unsplash API for image.
- Node.js server deployed on render/vercel which can take the GPT input and send it to open AI. (refer to the nodejs app built during the 100x lab session https://github.com/Siddhant-Goswami/100xlabs-openai-nodejs-server/tree/main)
- User preview for layout section before making a selection.
