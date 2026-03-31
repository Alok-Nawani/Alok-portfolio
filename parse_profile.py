import re
import json

html = open('/Users/alok/Documents/portfolio/portfolio2/old/index.html', 'r').read()

items = re.findall(r'<div class="profile-description">\s*<h4>(.*?)</h4>(.*?)</div>.*?<iframe src="([^"]+)"', html, re.DOTALL)

results = []
for idx, (q, a, src) in enumerate(items):
    q = q.replace('\n', ' ').strip()
    a = a.replace('\n', ' ').strip()
    results.append({
        "id": f"q{idx}",
        "question": q,
        "answer": a,
        "vimeoSrc": src
    })

print(json.dumps(results, indent=2))
