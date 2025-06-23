# 🔍 Debounced Search Hook Tester

A modern React application demonstrating a custom debounced search hook with real-time recipe search functionality. Features a sleek dark theme UI and optimized search performance.

![React](https://img.shields.io/badge/React-18.3.1-blue?logo=react)
![Docker](https://img.shields.io/badge/Docker-Ready-blue?logo=docker)
![AWS](https://img.shields.io/badge/AWS-EC2%20Deployable-orange?logo=amazon-aws)


## 📁 Project Structure

```
debounced-search-app/
├── src/
│   ├── components/
│   │   ├── SearchComponent.js    # Main search component
│   │   ├── useDebounce.js       # Custom debounce hook
│   │   └── styles.css           # Component styles
│   ├── App.js                   # Main app component
│   ├── App.css                  # Global app styles
│   └── index.js                 # Entry point
├── public/
├── Dockerfile                   # Docker configuration
├── package.json                 # Dependencies and scripts
└── README.md                    # This file
```

## 🚀 Local Development Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ocean303/docker_test_app.git
   cd docker_test_app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🐳 Docker Setup

### Build and Run with Docker

1. **Build Docker image**
   ```bash
   docker build -t docker_test_app .
   ```

2. **Run container**
   ```bash
   docker run -d -p 3000:3000 --name docker-app docker_test_app
   ```

3. **Access application**
   ```
   http://localhost:3000
   ```

### Docker Commands Reference

```bash
# Stop container
docker stop docker-app

# Remove container
docker rm docker-app

# View running containers
docker ps

# View logs
docker logs docker-app

# Remove image
docker rmi docker-app
```

## ☁️ AWS EC2 Deployment

### Step-by-Step Deployment Guide

1. **Create EC2 Instance**
   - Launch `t2.micro` instance with Amazon Linux 2023
   - Create security group allowing HTTP (80), HTTPS (443), SSH (22), and port 3000
   - Download and securely store the key pair file

2. **Connect to EC2**
   ```bash
   # Make key secure
   chmod 400 your-key.pem
   
   # Connect via SSH
   ssh -i your-key.pem ec2-user@YOUR_EC2_IP
   ```

3. **Install Docker on EC2**
   ```bash
   # Update system
   sudo yum update -y
   
   # Install Docker
   sudo yum install docker -y
   
   # Start Docker
   sudo systemctl start docker
   sudo systemctl enable docker
   
   # Add user to docker group
   sudo usermod -a -G docker ec2-user
   
   # Logout and login again
   exit
   ```

4. **Deploy Application**
   ```bash
   # Install Git
   sudo yum install git -y
   
   # Clone repository
   git clone https://github.com/ocean303/docker_test_app.git
   cd docker_test_app
   
   # Build and run
   docker build -t docker_test_app .
   docker run -d -p 3000:3000 --name docker-app docker_test_app
   ```

5. **Configure Security Group**
   - Add inbound rule for port 3000 (Custom TCP, Source: 0.0.0.0/0)

6. **Access Your App**
   ```
   http://YOUR_EC2_IP:3000
   ```
