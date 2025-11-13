# 🚀 Node.js Application Deployment & Migration Guide

## 🎯 Objective
Check, install, and deploy a Node.js application on **Windows** and then **migrate it to Ubuntu (VirtualBox)** using **FileZilla**.

---

## 🧩 Part 1 – Setup on Windows

### 🪄 Step 1: Check if Node.js is installed
Open **Command Prompt** and run:
```bash
node -v
````

If you see something like:

```
v22.9.0
```

✅ Node.js is already installed.

If you see:

```
'node' is not recognized as an internal or external command
```

then Node.js is **not installed** — continue below.

---

### 🧰 Step 2: Install Node.js

1. Go to the official Node.js website → [https://nodejs.org](https://nodejs.org)
2. Download the **LTS version** (or latest stable) for Windows.
3. Run the installer and follow the setup wizard.
4. Once installation finishes, verify it:

   ```bash
   node -v
   npm -v
   ```

You should now see both Node and npm versions.

---

### 💻 Step 3: Clone your repository

In Command Prompt:

```bash
cd C:\
git clone https://github.com/prathmesh-ghatmal/simple-nodeapp.git
```

---

### ⚙️ Step 4: Move into project directory

```bash
cd simple-nodeapp
```

---

### 📦 Step 5: Install dependencies

```bash
npm install
```

---

### ▶️ Step 6: Run the application

```bash
node server.js
```

If everything works, you’ll see:

```
Server running on http://localhost:5000
```

Now open your browser and go to:

```
http://localhost:5000
```

✅ Your Node.js app is running successfully on Windows.

📸 **Take screenshots:**

* Command Prompt showing “Server running…”
* Browser showing app output.

---

## 🧳 Part 2 – Migration to Ubuntu (VirtualBox)

### 🌐 Step 1: Use FileZilla to transfer the project

1. Open **FileZilla** on Windows.
2. Create a new SFTP connection:

   * **Host:** 127.0.0.1
   * **Port:** 2222 *(if using NAT + Port Forwarding)*
   * **Protocol:** SFTP
   * **Username:** `imcc`
   * **Password:** your Ubuntu password
3. Connect and drag the folder:

   ```
   C:\simple-nodeapp
   ```

   to:

   ```
   /home/imcc/simple-nodeapp
   ```

📸 **Take a screenshot** of FileZilla showing the transfer.

---

## 🐧 Part 3 – Setup on Ubuntu (VirtualBox)

### 🧠 Step 1: Check if Node.js is installed

Open Terminal in Ubuntu:

```bash
node -v
```

If it says “command not found”, Node.js is not installed.

---

### ⚙️ Step 2: Install latest Node.js version (v22.x)

Run these commands:

```bash
sudo apt update
sudo apt remove -y nodejs npm
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs
```

Verify installation:

```bash
node -v
npm -v
```

You should now see:

```
v22.9.0
```

---

### 💾 Step 3: Navigate to your project

```bash
cd /home/imcc/simple-nodeapp
```

---

### 📦 Step 4: Install dependencies

```bash
npm install
```

---

### ▶️ Step 5: Run the app

```bash
node server.js
```

If successful, you’ll see:

```
Server running on http://localhost:5000
```

---

### 🌐 Step 6: Visit your app

In Ubuntu’s Firefox browser, go to:

```
http://localhost:5000
```

🎉 Your app is running on Linux now!

📸 **Take screenshots:**

* Terminal showing server running
* Browser showing working app

---

## 📄 **Exam Screenshot Checklist**

| Step                            | Screenshot |
| ------------------------------- | ---------- |
| Windows Node.js check & install | ✅          |
| App running on Windows          | ✅          |
| FileZilla migration             | ✅          |
| Node.js install on Ubuntu       | ✅          |
| App running on Ubuntu           | ✅          |

---

## 🧠 Summary

| Environment | Commands to Run  | URL                     |
| ----------- | ---------------- | ----------------------- |
| Windows     | `node server.js` | `http://localhost:5000` |
| Ubuntu      | `node server.js` | `http://localhost:5000` |

---

### ✅ You’ve successfully:

* Checked & installed Node.js on Windows
* Cloned and ran your Node app
* Migrated it to Ubuntu via FileZilla
* Installed Node.js on Linux
* Deployed and tested the same app again 🎯

```


That way, you can just drop it into your GitHub repo or print it for your migration submission.
```
