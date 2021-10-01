<h1 align="center">CTF-Backend</h1>
<h3 align="center">Backend Repository for IIITV-CTF</h3>
<p align="center">
<a href="https://github.com/iiitv/CTF-Backend/issues"><img src="https://img.shields.io/github/issues/iiitv/CTF-Backend?style=for-the-badge"></a> <img src="https://img.shields.io/github/repo-size/iiitv/CTF-Backend?style=for-the-badge">
<img src="https://img.shields.io/github/license/iiitv/CTF-Backend?style=for-the-badge">
<img src="https://img.shields.io/github/forks/iiitv/CTF-Backend?style=for-the-badge">
</p>

# Setup📝

## Requirements☕

<li>Nodejs v14+</li>
<li>NPM v6+</li>
<li>Git</li>

## Installation💻
Firstly, clone the repository from github by running the following command:<br>
```sh
git clone https://github.com/iiitv/CTF-Backend.git
```

Enter the working directory by running the following command:
```sh
cd CTF-Backend
```

Install the required dependencies by running the following command:
```sh
npm install
```

## Configuration⚙️

Create a file named ``.env`` in the config folder of the root directory. This file will store the environment variables. Do not commit this file or remove it from gitignore when pushing to github.

### Environment Variables

| Variable | Description |
| :------: | :----------: |
| ``PORT`` | Port number to run the server on |
| ``DATABASE_URL`` | Connection string of the database |

## Running the Server⚡

Run the following command to start the server:
```sh
npm start
```

