# FootRadar ⚽

## 📌 About the project

FootRadar is a modern online platform for soccer fans that provides quick access to the most important league information. The application allows you to view league tables, top scorer ratings and detailed club profiles, including squad, coach and match schedule. In the future, there are plans to expand the functionality with a full-fledged site dedicated to individual leagues.

## ✨ Key features
- 📊 **League table** - up-to-date listing of teams and their positions in the league.
- ⚽ **Best scorers** - a list of players with the most goals.
- 🏟 **Club Profile** - detailed information about the team:
  - Current team composition,
  - Coach's data,
  - Full match history of the team.

## 🔧 Technologies
FootScout was built using modern web technologies:

### Frontend:
- ⚡ **React.js** - dynamic user interface,
- 🎨 **Tailwind CSS** - component styling,
- 🌍 **React Router** - application navigation management.

### Backend:
- 🚀 **Node.js + Express.js** - handling API requests,
- 🗄 **SQLite3** - database storing information about leagues, teams and matches,
- 🔗 **Fetch API** - communication between frontend and backend.

### Other:
- 🐳 **Docker (planned)** - application containerization,
- ⚙️ **ESLint & Prettier** - code quality maintenance.

## 🚀 Getting the project up and running.
### Prerequisites:
- Node.js and npm
- SQLite3

### Installing and running

‼️ For proper operation of the application you need to generate an apikey on the website https://www.football-data.org. Creating an account is free and immediately after its creation you will receive an apikey which should be placed in the .env file in the backend folder in the format API_KEY=“YOUR-API-KEY”.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Szymi611/FootScout.git
   cd FootScout
   ```

2. **Start the backend:**
   ```bash
   cd backend
   npm install
   node server.js
   ```

3. **Start frontend:**
   ```bash
   cd frontend/FrontendFootScout
   npm install
   npm start
   ```

The application should now be available at `http://localhost:5173`.

## 🎯 Future development plans
- 🏆 A dedicated page for each league,
- 🔍 Advanced statistics of teams and players,
- 📅 History and analysis of matches,
- 🌍 Integration with sports APIs for up-to-date data.
- ⚽ Photos of players and coaches.

## Screenshots 📸
![image](https://github.com/user-attachments/assets/1661c1af-8e34-4c6d-a68e-02608ea3014e)

![image](https://github.com/user-attachments/assets/c48e3d08-7157-4ac2-86f9-6afb5b58dc2b)

![image](https://github.com/user-attachments/assets/d5aeadd3-5e7e-4842-ac31-f2309371458c)



## 📬 Contact.
If you have ideas for development or want to contribute to the project, go ahead and open an issue or send a pull request!

---
_Developed with passion for football ⚽ by Szymi611_

