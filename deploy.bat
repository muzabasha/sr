@echo off
cd /d "%~dp0"
git add -A
git commit -m "Add free AI tools list to all 17 modules with categorized tool cards UI"
git push origin main
