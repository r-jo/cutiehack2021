# CutieHack 2021
> Author: J.S. Pescasio

This is the codebase for CutieHack 2021. Below is a guide for setting up a local environment to run the website locally for development purposes.

## Prerequisites
#### Windows
- **[Windows Terminal](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701):** This is used to navigate through the project/repo and to run the development server.
- **[Ubuntu WSL](https://www.microsoft.com/en-us/p/ubuntu/9nblggh4msv6) (Recommended):** This is to use the bash terminal found in Linux. I recommend using a WSL to use Linux commands for developing this project. Follow [this guide](https://docs.microsoft.com/en-us/windows/wsl/install-win10) to install.

#### Mac
- **Terminal:** This is used to navigate through the project/repo and to run the development server.
- **[Homebrew](https://brew.sh/):** This is a package manager for Mac. Run the following command in a terminal to install:
  - `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

#### All OSes
- Install **[Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)**
- Install **[Node.JS](https://nodejs.org/en/)**
- Install **[Yarn](https://yarnpkg.com/getting-started/install)**
  - Run the following command to install: `npm install yarn`
- Install a code editor of your choice (e.g [VScode](https://code.visualstudio.com/), [Atom](https://atom.io/), [Sublime](https://www.sublimetext.com/), etc.)
- Install at least two popular browsers (e.g. Chrome, Firefox, Safari, etc.). This is for testing for cross compatibility for different browsers.

## Setting Up Your Local Environment
Run the following commands in a terminal.
### Clone the Project
- `git clone https://github.com/citrushack/CitrusHack2021.git`
- `cd CitrusHack2021`
  - This is to navigate into the directory generated for the cloned repo.
- If you are using VScode, run `code .` to open the current directory in VScode (this is mainly for easier navigation)
  - You may need to install **code** so run `sudo apt install code`

### Install Necessary Packages
- `yarn` or `yarn install`
  - This will install all necessary packages for the project. 

### Run the Development Server
- `yarn dev`
- Go to http://localhost:3000/
  - This is the port where the development server is run on. Any changes you make to the code will reflect almost instantly while the server is running.

## Contributing to the Project
### Making Your Own Git Branch
> Create your own branch to develop on.
- Make your own branch: `git branch <branch-name>`
- Switch to your branch: `git checkout <branch-name>`
- Check what branch you are on (and also view other branches): `git branch`
  - I recommend using this before making changes to ensure that you're developing on the right branch.

### Committing Changes
- Check what files you edited: `git status`
- Adding files to commit: `git add <file-name>` or `git add .` to commit all files
- Commit files: `git commit -m <useful-message>`
  - Try committing frequently and writing useful messages to describe the changes you made.
- Push your changes: `git push`
  - If it's your first time pushing changes from a new branch, you may need to run `git push -u origin <branch-name>`

### Creating Pull Requests
> Make a pull request when you have code to merge.
- Go to the repo on Github and open the "Pull Requests" tab. 
  - Click `New Pull Request`.
  - Compare your branch to the main branch.
  - Assign the webdev lead to review your code (see the righthand side).
  - Click `Open Pull Request`.
  - **Do not click `Merge`.** Only the webdev leads should be responsible for merging pull requests.

### Assigning Yourself to Issues
> Issues are tasks to be done for the project.
- Go to the repo on Github and open the "Issues" tab.
  - This acts as a taskboard for what needs to be done for the project.
- Click on an issue to read more information about it.
- If you want to work on an issue, assign yourself to the issue (see the righthand side).

## Tech Stack
- **[NextJS](https://nextjs.org/)**: This is the frontend framework for this project.