# 🏥 Smart AMC/CMC Scheduling & Management System

🔗 **Live Demo:**  
https://smart-amc-cmc-scheduling.vercel.app/  

---

## 📌 Overview

The **Smart AMC/CMC Scheduling & Management System** is a web-based platform designed to efficiently manage **Annual Maintenance Contracts (AMC)** and **Comprehensive Maintenance Contracts (CMC)** for hospital equipment.

It automates scheduling, avoids conflicts between vendors, tracks contract lifecycles, and improves operational efficiency in healthcare organizations.

---

## 🚀 Features

- 📅 **Smart Scheduling**
  - Prevents overlapping maintenance schedules  
  - Efficient vendor assignment  

- 🔔 **Automated Alerts**
  - Contract expiry reminders

- 👥 **Role-Based Access**
  - Admin, Engineer, and Management dashboards  

- 📊 **Vendor Management**
  - Track vendor performance and service history  

- 🏥 **Equipment Tracking**
  - Maintain maintenance logs and equipment records  

- 🔐 **Authentication**
  - Secure login system using Clerk  

- 🌐 **Real-Time Dashboard**
  - View schedules, alerts, and system updates  

---

## 🛠️ Tech Stack

**Frontend**
- React.js  
- Tailwind CSS  

**Backend**
- Next.js  
- Express.js  

**Database**
- NeonDB (Serverless PostgreSQL)  

**Authentication**
- Clerk  

**Deployment**
- Vercel  

---

## ⚙️ Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/piyushmeena020/Smart-AMC-CMC-Scheduling.git
cd Smart-AMC-CMC-Scheduling
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file and add:

```env
DATABASE_URL=your_neon_database_url
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

### 4. Run the Project

```bash
npm run dev
```

---
