@echo off
cd /d "%~dp0"
git add -A
git commit -m "Add Research Copilot chatbot, branching ethics scenario, wire up all components"
git push origin main
