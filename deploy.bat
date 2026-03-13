@echo off
cd /d "%~dp0"
git add -A
git commit -m "Add AI tool instructions, output interpretation guides, and Resource Person tab"
git push origin main
