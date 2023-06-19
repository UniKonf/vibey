# `<Vibey/>`

<p align="center">
<picture >
  <source media="(prefers-color-scheme: dark)"  srcset="/public/static/vibey_banner_dark.png">
  <source media="(prefers-color-scheme: light)" srcset="/public/static/vibey_banner_light.png">
  <img src="/public/static/vibey_banner_dark.png" alt="Fallback image">
</picture>
</p>

[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/mit/) [![Issues](https://img.shields.io/github/issues/UniKonf/vibey)](https://github.com/UniKonf/vibey/issues) [![Contributors](https://img.shields.io/github/contributors/UniKonf/vibey)](https://github.com/UniKonf/vibey/graphs/contributors) ![Forks](https://img.shields.io/github/forks/UniKonf/vibey) ![Stars](https://img.shields.io/github/stars/UniKonf/vibey)

## What is `<Vibey/>`

Vibey is a community driven initiative to find online conferences and events for developers. It is a web app that lets you find online events and conferences that are happening around the world. This project is still in its early stages and we are looking for contributors to make this project a success.

## 👨‍💻 Live

Check out the website: [here](https://www.vibey.live/)

## What stack is `<Vibey/>` built on?

- [React JS](https://reactjs.org/)
- [Nextjs](https://nextjs.org/)
- [Tailwindcss](https://tailwindcss.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Appwrite](https://appwrite.io)

## 👇 Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Git](https://git-scm.com/)
- [yarn](https://yarnpkg.com/)

## 🛠️ Installation

1. Fork the repo. You can find the button on the top.

![image](https://github.com/Shalini469717/vibey/assets/99305545/da165a82-2905-4111-a18b-e4f3ad020306)

2. Clone the repository using the command `git clone https://github.com/<USERNAME>/vibey`
<!-- 3. Run `cd vibey` to change the working directory. -->
3. Open the project in your IDE(eg. VS Code).
4. Create the file name `.env.local` in root directory and paste the content given below.
<!-- 4. Create a file with extension `.env.local`. Add the following data into the file. -->

```
NEXT_PUBLIC_APPWRITE_PROJECT_ID = [Project ID]
NEXT_PUBLIC_APPWRITE_ENDPOINT= [API Endpoint]
```

5. **[Project ID]** and **[API Endpoint]** in the above step are obtained from Appwrite.
6. To obtain them, go to [appwrite](https://appwrite.io/). Create an account in case you are new to the platform.
7. Create `project` using [Appwrite Cloud](https://appwrite.io/docs/getting-started-for-web). Click on create project and enter the project name.

![image](https://github.com/Shalini469717/vibey/assets/99305545/3d6cdbc6-a0e6-46ee-9805-81dd34736149)

<!-- <img src = "https://github.com/Shalini469717/vibey/assets/99305545/99c7411b-28ba-45f6-ab75-e20e8aec309e" width = "800" height = "400"> -->

8. After creating the project, choose webapp in **Add a Platform** section.

<!-- ![image](https://github.com/Shalini469717/vibey/assets/99305545/be186627-10f8-4e14-a069-7ca96f4aa6ce) -->

9. Fill the name as `vibey` and fill Hostname as `localhost`. Keep clicking on next until you are redirected to dashboard.

<img src = "https://github.com/Shalini469717/vibey/assets/99305545/3a9d55dc-556f-494d-bca8-00f479ba3ebe">

10. Go to settings where you can find the `project ID` and `API endPoint`.

![image](https://github.com/Shalini469717/vibey/assets/99305545/6933ced5-b90e-4ad9-9bb6-0914970226bf)

11. Add into NEXT_PUBLIC_APPWRITE_PROJECT_ID = `project_id`
12. Add into NEXT_PUBLIC_APPWRITE_ENDPOINT = `endPoint`
13. Run `yarn install` or `yarn` to install all dependencies
14. Run `yarn dev` to start the application
15. Visit <https://localhost:3000> to view the application

## 🎭 How to contribute

1. Run installation steps
2. Find Issue to work on or create a new issue for feature request or bug
3. Create a new branch for your feature `git checkout -b feature-name`
4. Make your changes
5. Commit your changes `git commit -a -m "Add some feature"`
6. Push to the branch `git push origin feature-name`
7. Create a new pull request

## 👥 Team

- [Deepu](https://github.com/Deepu178)
- [Manish](https://github.com/money8203)
- [Chandra](https://github.com/Chandraprakash-Darji)
- [Kirtika](https://github.com/Kirtikagoyal)

## 🚀 Deployment

## 👥 30 Issues for Contributors

###  Here are thirty issues to work on for GSSoC contributors: 

1. Issue: Update README.md
   Description: Review and update the project's README.md file to provide comprehensive documentation and instructions for developers and 
   contributors.

2. Issue: Refactor codebase to follow coding style guidelines
   Description: Ensure that the entire codebase adheres to the project's coding style guidelines for consistency and maintainability.

3. Issue: Implement contributors authentication using OAuth and custom form
   Description: Integrate OAuth authentication to allow users to sign in with popular platforms such as Google, Facebook, or GitHub.

4. Issue: Improve error handling and error messages
   Description: Enhance error handling throughout the application and provide informative error messages to guide users when errors occur.

5. Issue: Add unit tests for existing code
   Description: Write unit tests to cover critical sections of the codebase and ensure proper functionality and behavior.

6. Issue: Shift the Backend from Appwrite to Node.js
   Description: Remove the backend from Appwrite ( Backend As a Service ) to proper backend built using Node.js and Experss.js, and NoSQL database 
   that is MongoDB.

7. Issue: Add Dashboard for Contributors
   Description: Improve the contributor's profile page by adding additional information and customization options, such as a profile picture or bio 
   and where they can add, update and delete events which they have added to the platform.

8. Issue: Implement a notification system for events
   Description: Develop a notification system to inform users of important updates, such as new events, for saved events, or any kind of evetns
   they have turned on their notification.

10. Issue: Add support for user-generated playlists
   Description: Enable users to create and manage their own playlists within the application, allowing for customized music experiences.

11. Issue: Improve search functionality
    Description: Enhance the search feature to provide more accurate and relevant events, including filtering options and sorting capabilities
    based on Citites, in-person or Online.

13. Issue: Implement a feedback mechanism
    Description: Integrate a feedback form or feature to collect user suggestions, bug reports, and general feedback to improve the application.

14. Issue: Optimize database queries for improved performance
    Description: Analyze and optimize the database queries used by the application to reduce response times and improve overall performance.

15. Issue: Add support for multi-factor authentication
    Description: Implement an additional layer of security by supporting multi-factor authentication methods, such as SMS or authenticator apps.

16. Issue: Improve accessibility for users with disabilities
    Description: Enhance the application's accessibility by implementing features like screen reader compatibility and keyboard navigation.

17. Issue: Add support for user-generated comments on 
    Description: Enable users to leave comments or reviews on songs, creating a sense of community engagement within the application.

18. Issue: Implement a favorites feature
    Description: Allow users to mark songs as favorites and easily access them from a dedicated favorites section.

19. Issue: Integrate social sharing options
    Description: Add social media sharing buttons to enable users to share their favorite songs or playlists on platforms like Twitter or Facebook.

20. Issue: Implement user privacy settings
    Description: Provide users with options to customize their privacy settings, such as controlling who can view their playlists or follow them.

21. Issue: Add support for events recommendations
    Description: Implement a recommendation system to suggest events or conferences based on user preferences and listening history.

22. Issue: Enhance performance for large events
    Description: Optimize the application's performance when dealing with large visiting events to ensure smooth browsing and searching.

23. Issue: Implement a "Recently Added" section
    Description: Add a section that displays the events or conferences recently added to by the contributors for easy access and navigation.

24. Issue: Improve user onboarding experience
    Description: Enhance the onboarding process for new users by providing a guided tour or interactive tutorial to familiarize
    them with the application's features.

25. Issue: Implement an offline mode
    Description: Develop an offline mode that allows users to access previously played songs or playlists even when not connected to the internet.

26. Issue: Add support for music streaming via Chromecast
    Description: Integrate Chromecast support to enable users to stream music from the application to their Chromecast-enabled devices.

27. Issue: Implement companies collaboration
    Description: Enable users to collaborate on events, allowing multiple users to contribute events and manage the event together.

28. Issue: Add support for user-generated tags for events
    Description: Allow users to add custom tags or labels to events for easier organization and discovery.

29. Issue: Implement a "Discover" feature
    Description: Create a "Discover" section that showcases popular events, trending events, or recommended conferences to help users explore new 
    events.

30. Issue: Improve caching mechanisms for faster performance
    Description: Implement caching strategies to store frequently accessed data and minimize database queries, improving overall response times.

31. Issue: Implement a "Favourite event" feature
    Description: Add a event feature option that allows users to set a duration after which the notification will be sent.

32. Issue: Provide detailed documentation for API usage
    Description: Create comprehensive documentation that explains how to utilize the application's API, including authentication, endpoints, and 
    response formats.


The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

Check out their [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 🛡️ License

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE) file for details

## 🙏 Support

This project needs a ⭐️ from you. Don't forget to leave a star ⭐️

## 💪 Thanks to all Contributors

Thanks a lot for spending your time helping vibey grow. Thanks a lot! Keep rocking 🍻

[![Contributors](https://contrib.rocks/image?repo=UniKonf/vibey)](https://github.com/UniKonf/vibey/graphs/contributors)

![Contributers](https://camo.githubusercontent.com/37b009b52b3a9af7886f52e75cd76d1b32fef331ab1dc2108089c0ced0b7635f/68747470733a2f2f7777772e6461746f636d732d6173736574732e636f6d2f33313034392f313631383938333239372d706f77657265642d62792d76657263656c2e737667)

![239682688-0c5debf5-d414-4916-87d8-e1a710773ae3](https://github.com/UniKonf/vibey/assets/68677868/c2bec790-2ad7-4f22-aa3a-e201e7a11324)
