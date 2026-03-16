@echo off
cd /d "%~dp0"
git add -A
git commit -m "Enhance AI tools: add Do/Don't with examples, expand How to Use and Output Interpretation for first-time users"
git push origin main
