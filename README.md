# 🚀 Wasif Ali - User Management System

<div align="center">

![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

A complete full-stack user management application built with **Laravel** (backend API) and **React** (frontend). This project demonstrates modern web development practices and is perfect for portfolios.

</div>

## 📋 Table of Contents
- [Features](#-features)
- [Screenshots](#-screenshots)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [API Documentation](#-api-documentation)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)
- [Author](#-author)

## ✨ Features

<div align="center">

| Feature | Status | Description |
|---------|--------|-------------|
| User Authentication | ✅ | Register, login, logout with JWT tokens |
| CRUD Operations | ✅ | Full Create, Read, Update, Delete functionality |
| Protected Routes | ✅ | Secure dashboard with authentication middleware |
| Responsive Design | ✅ | Mobile-friendly interface |
| Form Validation | ✅ | Client-side & server-side validation |
| REST API | ✅ | RESTful API communication |
| Error Handling | ✅ | Comprehensive error messages |
| Database Management | ✅ | MySQL with proper migrations |

</div>

## 📸 Screenshots

<div align="center">

| Login Page | Dashboard | User Management |
|------------|-----------|-----------------|
| <img src="https://via.placeholder.com/400x250/4e73df/ffffff?text=Login+Page" width="300"> | <img src="https://via.placeholder.com/400x250/1cc88a/ffffff?text=Dashboard" width="300"> | <img src="https://via.placeholder.com/400x250/36b9cc/ffffff?text=User+Management" width="300"> |


</div>

## 🎥 Video Demo
[![Watch the video](https://img.shields.io/badge/▶️_Watch_Demo-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtube.com)

## 🚀 Live Demo
<div align="center">

👤 **Admin Demo:** Email: `admin@example.com` | Password: `password123`

</div>

## 🛠️ Tech Stack

### **Backend**
<div align="center">

![PHP](https://img.shields.io/badge/PHP-8.2-777BB4?style=flat&logo=php&logoColor=white)
![Laravel](https://img.shields.io/badge/Laravel-10-FF2D20?style=flat&logo=laravel&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-8.0-005C84?style=flat&logo=mysql&logoColor=white)
![REST API](https://img.shields.io/badge/REST_API-✓-009688?style=flat&logo=rest&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-Auth-000000?style=flat&logo=jsonwebtokens&logoColor=white)

</div>

### **Frontend**
<div align="center">

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?style=flat&logo=bootstrap&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-✓-671DDF?style=flat&logo=axios&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-6-CA4245?style=flat&logo=reactrouter&logoColor=white)

</div>

## 📦 Installation & Setup

### Prerequisites
```bash
# Check installations
php --version
composer --version
node --version
npm --version
mysql --version
git --version
```

### Backend Setup

<details>
<summary><b>Click to expand backend setup instructions</b></summary>

```bash
# 1. Clone repository
git clone https://github.com/wasifali78632/user-management-app.git
cd user-management-app/backend

# 2. Install dependencies
composer install

# 3. Configure environment
cp .env.example .env
php artisan key:generate

# 4. Update .env file with database credentials
# DB_DATABASE=user_management
# DB_USERNAME=root
# DB_PASSWORD=

# 5. Run migrations
php artisan migrate

# 6. Start server
php artisan serve --port=8000
```
</details>

### Frontend Setup

<details>
<summary><b>Click to expand frontend setup instructions</b></summary>

```bash
# 1. Navigate to frontend directory
cd ../frontend

# 2. Install dependencies
npm install

# 3. Start development server
npm start

# 4. Open browser
# http://localhost:3000
```
</details>

## 📚 API Documentation

### Quick Test
```bash
# Test API connection
curl http://localhost:8000/api/test
```

### Authentication Endpoints
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/register` | Register new user | ❌ |
| POST | `/api/login` | Login user | ❌ |
| POST | `/api/logout` | Logout user | ✅ |
| GET | `/api/user` | Get authenticated user | ✅ |

### User Management Endpoints
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/users` | Get all users | ✅ |
| POST | `/api/users` | Create new user | ✅ |
| PUT | `/api/users/{id}` | Update user | ✅ |
| DELETE | `/api/users/{id}` | Delete user | ✅ |

## 🗂️ Project Structure

```
user-management-app/
├── backend/                 # Laravel Backend
│   ├── app/Http/Controllers/
│   │   ├── AuthController.php
│   │   └── UserController.php
│   ├── database/migrations/
│   ├── routes/api.php
│   └── .env.example
├── frontend/               # React Frontend
│   ├── src/components/
│   │   ├── Login.js
│   │   ├── Register.js
│   │   └── Dashboard.js
│   ├── public/
│   └── package.json
└── README.md
```

## 🔧 Environment Variables

<details>
<summary><b>.env Configuration</b></summary>

```env
# Backend (.env)
APP_NAME="Wasif Ali - User Management"
APP_URL=http://localhost:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=user_management
DB_USERNAME=root
DB_PASSWORD=

SANCTUM_STATEFUL_DOMAINS=localhost:3000
```
</details>

## 🧪 Testing

### Postman Collection
1. Import Postman collection
2. Set base URL: `http://localhost:8000`
3. Test all endpoints

### Manual Testing
- ✅ Register new user
- ✅ Login with credentials
- ✅ Access protected routes
- ✅ CRUD operations
- ✅ Form validation
- ✅ Error handling

## 🚀 Deployment

### Deploy Frontend (Vercel - Recommended)
```bash
npm run build
# Upload build folder to Vercel
```

### Deploy Backend (000webhost)
1. Upload backend files
2. Import database
3. Update .env file
4. Set document root to `public`

## 👨‍💻 Author

<div align="center">

### **Wasif Ali** 
#### Full Stack Developer

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/wasif-ali-shaikh)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/wasifali78632)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:wasifalishaikh8@gmail.com)
[![Portfolio](https://img.shields.io/badge/Portfolio-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white)](https://wasifali.dev)

</div>

## 📊 Repository Stats

<div align="center">

![GitHub repo size](https://img.shields.io/github/repo-size/wasifali78632/user-management-app?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/wasifali78632/user-management-app?style=for-the-badge&color=blue)
![GitHub issues](https://img.shields.io/github/issues/wasifali78632/user-management-app?style=for-the-badge&color=orange)
![GitHub license](https://img.shields.io/github/license/wasifali78632/user-management-app?style=for-the-badge)

</div>

## 🙏 Acknowledgments

<div align="center">

Special thanks to:
- [Laravel Documentation](https://laravel.com/docs)
- [React Documentation](https://reactjs.org/docs)
- [Bootstrap Documentation](https://getbootstrap.com/docs)

</div>

---

<div align="center">

### ⭐ If you like this project, give it a star!

[![Star History Chart](https://api.star-history.com/svg?repos=wasifali78632/user-management-app&type=Timeline)](https://star-history.com/#wasifali78632/user-management-app&Timeline)

**Built with ❤️ by Wasif Ali**

</div>
