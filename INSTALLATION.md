# Installation Guide

Due to PowerShell execution policy restrictions on your system, follow these steps to install and run the portfolio:

## Option 1: Use Command Prompt (Recommended)

1. Open **Command Prompt** (not PowerShell):
   - Press `Win + R`
   - Type `cmd` and press Enter

2. Navigate to the portfolio directory:
```cmd
cd "z:\projects\new portifolio\portfolio"
```

3. Install dependencies:
```cmd
npm install
```

4. Start the development server:
```cmd
npm start
```

## Option 2: Change PowerShell Execution Policy (Administrator)

1. Open PowerShell as Administrator
2. Run this command:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

3. Then install normally:
```powershell
cd "z:\projects\new portifolio\portfolio"
npm install
npm start
```

## Option 3: Use NPX Bypass

Run commands using `npx` prefix in PowerShell:
```powershell
cd "z:\projects\new portifolio\portfolio"
npx --yes npm install
npx --yes npm start
```

## After Installation

Once `npm install` completes successfully, the server will start automatically. Open your browser to:
```
http://localhost:3000
```

## Manual Dependencies (If needed)

If automated installation fails, install packages one by one using Command Prompt:

```cmd
npm install react@18.2.0
npm install react-dom@18.2.0
npm install react-router-dom@6.20.0
npm install react-scripts@5.0.1
```

## Troubleshooting

### Port Already in Use
If port 3000 is busy, you can use a different port:
```cmd
set PORT=3001 && npm start
```

### Module Not Found
Delete node_modules and reinstall:
```cmd
rmdir /s /q node_modules
del package-lock.json
npm install
```

### Clear Cache
```cmd
npm cache clean --force
npm install
```
