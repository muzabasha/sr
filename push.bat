@echo off
cd /d "%~dp0"
git config user.email "muzabasha@users.noreply.github.com"
git config user.name "muzabasha"
git add -A
git commit -m "Initial commit: Research Compass - Ethical AI for Research Excellence"
git branch -M main
git remote add origin https://github.com/muzabasha/sr.git
git push -u origin main
