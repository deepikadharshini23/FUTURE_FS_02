# 🚀 Client Lead Management System (Mini CRM)

A full-stack Customer Relationship Management (CRM) application built using **HTML, CSS, JavaScript, Node.js, Express.js, and MySQL**.

This application helps businesses manage customer leads, track lead status, store follow-up notes, and organize sales activities efficiently.

---

## 📌 Features

### 🔐 Authentication

* Admin Login System
* User Authentication
* Protected Dashboard Access

### 👥 Lead Management

* Add New Leads
* View All Leads
* Edit Lead Information
* Delete Leads

### 📊 Lead Tracking

* Track Lead Status:

  * New
  * Contacted
  * Converted
* Real-time Status Updates

### 📝 Notes Management

* Add Follow-up Notes
* Store Customer Interaction History
* View Notes Directly in Dashboard

### 🔍 Search Functionality

* Search Leads by Name
* Search Leads by Email

### 📈 Dashboard

* Total Leads Count
* New Leads Count
* Contacted Leads Count
* Converted Leads Count

### 💾 Database Integration

* MySQL Database
* Persistent Data Storage
* CRUD Operations

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript (ES6)

### Backend

* Node.js
* Express.js

### Database

* MySQL

### Tools Used

* VS Code
* MySQL Workbench
* Git
* GitHub
* Postman

---

## 📂 Project Structure

```text
Client_Lead_Management_System/
│
├── dashboard.html
├── login.html
├── style.css
├── script.js
│<img width="1533" height="470" alt="login_page" src="https://github.com/user-attachments/assets/d6acb5a5-4f8d-42d0-820c-6d7572cd9728" />

├── backend/
│   ├── server.js
│   ├── db.js
│   │
│   ├── routes/
│   │   ├── leadRoutes.js
│   │   └── authRoutes.js
│   │
│   ├── package.json
│   └── node_modules/
│
└── README.md
```

---

## 📸 Screenshots



### Main page

<img width="1355" height="805" alt="main_page" src="https://github.com/user-attachments/assets/fe5be317-9cc6-4516-b67a-1040065fafd8" />


### Login Page

<img width="1533" height="470" alt="login_page" src="https://github.com/user-attachments/assets/0daf241d-9f03-4ee1-ae36-6fc46cf3a9b0" />


### CRM Dashboard

<img width="1920" height="851" alt="Dashboardpage" src="https://github.com/user-attachments/assets/10e1b486-22e6-4c01-97af-7a810d6d80d1" />


### Lead Management

<img width="1920" height="935" alt="lead_managementpage" src="https://github.com/user-attachments/assets/df573677-ff40-40b8-846c-c17720366bcf" />


### MySQL Database

<img width="1920" height="1020" alt="Screenshot 2026-06-12 124554" src="https://github.com/user-attachments/assets/f8eafa56-d060-4a54-b81e-b708c94fdcdc" />


---

m

GitHub Repository:

https://github.com/deepikadharshini23/client-lead-management-system

---

## 🗄️ Database Schema

### Leads Table

| Column    | Type         |
| --------- | ------------ |
| id        | INT          |
| name      | VARCHAR(255) |
| email     | VARCHAR(255) |
| phone     | VARCHAR(20)  |
| company   | VARCHAR(255) |
| status    | VARCHAR(50)  |
| notes     | TEXT         |
| createdAt | TIMESTAMP    |

### Users Table

| Column   | Type         |
| -------- | ------------ |
| id       | INT          |
| username | VARCHAR(100) |
| password | VARCHAR(255) |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/deepikadharshini23/client-lead-management-system.git
```

### 2️⃣ Navigate to Backend

```bash
cd backend
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Configure Database

Create a MySQL database:

```sql
CREATE DATABASE mini_crm;
```

Use the database:

```sql
USE mini_crm;
```

Create Leads Table:

```sql
CREATE TABLE leads (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(20),
    company VARCHAR(255),
    status VARCHAR(50) DEFAULT 'new',
    notes TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Create Users Table:

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100),
    password VARCHAR(255)
);
```

Insert Test User:

```sql
INSERT INTO users(username,password)
VALUES('admin','*****');
```

### 5️⃣ Start Server

```bash
node server.js
```

Server Running At:

```text
http://localhost:3000
```

---

## 🔗 API Endpoints

### Leads

| Method | Endpoint             | Description   |
| ------ | -------------------- | ------------- |
| GET    | /api/leads           | Get All Leads |
| POST   | /api/leads           | Add Lead      |
| PUT    | /api/leads/:id       | Update Status |
| PUT    | /api/leads/:id/edit  | Edit Lead     |
| DELETE | /api/leads/:id       | Delete Lead   |
| POST   | /api/leads/:id/notes | Save Note     |

### Authentication

| Method | Endpoint        | Description |
| ------ | --------------- | ----------- |
| POST   | /api/auth/login | User Login  |

---

## 💡 Real-World Use Cases

This CRM can be used by:

* Real Estate Agencies
* Educational Institutions
* Insurance Companies
* Digital Marketing Agencies
* Software Service Companies
* Freelancers & Consultants
* Sales Teams

---

## 🚀 Future Enhancements

* JWT Authentication
* Password Hashing using bcrypt
* Role-Based Access Control
* Email Notifications
* Lead Analytics Dashboard
* Export Leads to Excel/PDF
* Customer Follow-Up Reminders
* Activity Logs

---

## 👨‍💻 Author

**Deepika Dharshini**

GitHub: https://github.com/deepikadharshini23

LinkedIn: https://linkedin.com/in/deepika-dharshini-kattula-b46398377

---


