![Vibey Banner](https://github.com/UniKonf/vibey/assets/68677868/e9679005-91e3-4ded-8ee4-d99a9943298f)

[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/mit/)
[![Issues](https://img.shields.io/github/issues/UniKonf/vibey)](https://github.com/UniKonf/vibey/issues)
[![Contributors](https://img.shields.io/github/contributors/UniKonf/vibey)](https://github.com/UniKonf/vibey/graphs/contributors)
![Forks](https://img.shields.io/github/forks/UniKonf/vibey)
![Stars](https://img.shields.io/github/stars/UniKonf/vibey)

<div align="center">

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Gilroy&weight=700&size=40&pause=1000&color=F7F7F7&center=true&width=600&height=120&lines=Welcome+to+%3CVibey%2F%3E+%F0%9F%8C%9F)](https://git.io/typing-svg)

</div>

<div style="text-align: justify" align="center">
  
Vibey is a community-driven initiative to find conferences, meetups and workshops for developers. Our web app is designed to empower developers like you to explore a multitude of captivating online events, right at your fingertips. <br/> <br/> While <Vibey/> is still in its early stages, we are fueled by the collective ambition and expertise of our contributors. Together, we strive to transform this project into a resounding success. Whether you're an experienced developer or just starting your coding journey, we welcome your valuable contributions with open arms.  <br /> <br /> <b> Join us on this exhilarating mission to revolutionize the way developers discover and engage online/offline conferences and events.</b>!

</div>
<br>

## 🛠️ Technologies Used

`<Vibey/>` is built using the following technologies:

- [React JS](https://reactjs.org/) - A popular JavaScript library for building user interfaces.
- [Next.js](https://nextjs.org/) - A powerful React framework for server-side rendering and static site generation.
- [Tailwind CSS](https://tailwindcss.com/) - A highly customizable CSS framework for rapid UI development.
- [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript that enhances development experience and code quality.
- [MongoDB](https://www.mongodb.com/) - A flexible and scalable NoSQL database for storing application data.

## 👇 Prerequisites

Before getting started with `<Vibey/>`, make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/en/) - A JavaScript runtime environment for executing server-side and build scripts.
- [Git](https://git-scm.com/) - A distributed version control system for managing your source code.
- [pnpm](https://pnpm.io/) - A fast and efficient package manager for Node.js projects.

## 🚀 Quick start

### 🛠️ Installation

#### 1. Fork this repository by clicking on the `fork` button as shown below, at the top right section of this page

![image](https://github.com/UniKonf/vibey/assets/89864818/a95e5d68-98f6-492f-ae70-2f19ed284099)

else fork directly from [here](https://github.com/suzy-g38/vibey/fork)

#### 2. Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/<YOUR_USERNAME>/vibey
```

#### 3. Navigate to the project directory in your IDE or terminal.

```bash
cd vibey
```

#### 4. Install the project dependencies by running the following command:

```bash
pnpm i
```

> **Note**: If you don't have pnpm installed in your system then run this command `npm i -g pnpm` to install pnpm.

**Start Client**

#### 5. Create a `.env.local` file and copy-paste the credentials from `.env.example` into it

#### 7. Start the application using the following command:

```bash
pnpm dev
```

**Start Server**

#### 8. Go to the server folder inside the project.

#### 9. Create a `.env` file inside the server and add the following

```bash
PORT=5000
UI_ENDPOINT=http://localhost:3000
DB='YOUR_MONGO_CREDENTIALS'
```

> **Note**: Get your Mongodb credentials from [here](https://www.mongodb.com/products/platform/cloud)

#### 10. Open a new terminal and naviagte to the server folder

```bash
cd vibey/server
```

#### 11. Run the below command to install the server dependencies:

```bash
pnpm i
```

#### 12. Now run the below command to start the server:

```bash
pnpm dev
```

Visit https://localhost:3000 in your web browser to access the <Vibey/> application 🎉.

## 👥 Issues for Contributors

Are you looking for ways to contribute to `<Vibey/>`? Here are few issues you can work on as part of the GSSoC (GirlScript Summer of Code) program:

### Level 3 Issues

- [x] 1. **Update README.md**: Review and update the project's README.md file to provide comprehensive documentation and instructions for developers and contributors.

- [x] 2. **Shift the Backend from Appwrite to Node.js**: Remove the Appwrite backend and build a backend using Node.js, Express.js, and MongoDB.

- [x] 3. **Implement contributors authentication using OAuth**: Integrate OAuth authentication to allow users to sign in using popular platforms like Google, Facebook, or GitHub.

- [ ] 4. **Add Dashboard for Contributors for adding events on the client side**: Create a dashboard where contributors can add, update, and delete events they have added to Vibey. Include customization options such as profile pictures and contributor details.

- [ ] 5. **Add Dashboard for Contributors for adding events on the server side using MongoDB database**: Develop a server-side dashboard for contributors to manage events using MongoDB as the database.

- [ ] 6. **Add Custom form for adding events on the client side in the dashboard**: Enhance the contributor's dashboard by adding a custom form for adding events, CFPs (Call for Papers), and hackathons.

- [x] 7. **Add server-side code for events**: Implement server-side code for adding, updating, deleting, and fetching events, hackathons, and CFPs on the client side.

- [x] 8. **Add client-side code for fetching events in the Events Page**: Enhance the Events Page by adding client-side code to fetch and display events fetched from the server side.

- [x] 9. **Add client-side code for fetching CFPs in the CFP Page**: Improve the CFP Page by adding client-side code to fetch and display CFPs fetched from the server side.

- [x] 10. **Add client-side code for fetching Hackathons in the Hackathon Page**: Enhance the Hackathon Page by adding client-side code to fetch and display hackathons fetched from the server side.

More will be added soon.

## 💪 Contributions

- Submit bugs and feature requests, and help us verify as they are checked in
- Review the documentation and make pull requests for anything from typos to additional and new content
- If you are interested in fixing issues and contributing directly to the code base, please go through the [CONTRIBUTING.md](https://github.com/UniKonf/vibey/blob/main/CONTRIBUTING.md) file, where all the guidelines have been mentioned that will guide you to make your contribution.

> **Note**: New to open source contributions? check out [how-to-contribute](https://opensource.guide/how-to-contribute/) guide by Github

## 👥 Core Team

The core team members working on `<Vibey/>` are:

- [Deependra Kumar](https://github.com/Deepu178)
- [Manish Tyagi](https://github.com/money8203)
- [Chandraprakash Darji](https://github.com/Chandraprakash-Darji)
- [Kirtika Goyal](https://github.com/Kirtikagoyal)

## Code of Conduct

Make sure to follow the project's [code of conduct](/CODE_OF_CONDUCT.md).

## 🛡️ License

This project is licensed under the MIT License. See the [LICENSE.md](./LICENSE) file for more information.

## 🙏 Support

Please show your support for the `<Vibey/>` project by leaving a ⭐️ star on our GitHub repository.

## 💪 Thanks to all Contributors

A big thank you to all the contributors who have dedicated their time and effort to help `<Vibey/>` grow. We appreciate your contributions and support! Keep rocking! 🍻

[![Contributors](https://contrib.rocks/image?repo=UniKonf/vibey)](https://github.com/UniKonf/vibey/graphs/contributors)

![239682688-0c5debf5-d414-4916-87d8-e1a710773ae3](https://github.com/UniKonf/vibey/assets/68677868/c2bec790-2ad7-4f22-aa3a-e201e7a11324)
