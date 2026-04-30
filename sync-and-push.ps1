# Copies your latest export over index.html, commits, and pushes to GitHub.
# Vercel (if linked to this repo) redeploys automatically after push.
$ErrorActionPreference = "Stop"
$repo = $PSScriptRoot
$source = "C:\Users\eishm\Downloads\portfolio.html"
Set-Location $repo

if (-not (Test-Path $source)) {
  Write-Error "Not found: $source"
}
Copy-Item -LiteralPath $source -Destination (Join-Path $repo "index.html") -Force
Write-Host "Updated index.html ($((Get-Item (Join-Path $repo 'index.html')).Length) bytes)"

git status -sb
$dirty = git status --porcelain
if (-not $dirty) {
  Write-Host "No git changes (file already matched HEAD). Nothing to push."
  exit 0
}

git add index.html
git commit -m "Update portfolio from Downloads/portfolio.html"
git push origin main
Write-Host "Done. Check Vercel dashboard for the new deployment."
