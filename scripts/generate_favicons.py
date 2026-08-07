import os
from PIL import Image, ImageDraw

OUT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'public'))
PRIMARY = (220, 77, 1)
LIGHT = (249, 115, 22)

def draw_logo(size):
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    grad = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    dg = ImageDraw.Draw(grad)
    for y in range(size):
        t = y / size
        r = round(PRIMARY[0] + (LIGHT[0] - PRIMARY[0]) * t)
        g = round(PRIMARY[1] + (LIGHT[1] - PRIMARY[1]) * t)
        b = round(PRIMARY[2] + (LIGHT[2] - PRIMARY[2]) * t)
        dg.line([(0, y), (size, y)], fill=(r, g, b, 255))
    pad = int(size * 0.02)
    mask = Image.new('L', (size, size), 0)
    dm = ImageDraw.Draw(mask)
    dm.rounded_rectangle([pad, pad, size - pad, size - pad], radius=int(size * 0.22), fill=255)
    img = Image.composite(grad, img, mask)
    d = ImageDraw.Draw(img)
    m = size * 0.24
    M = size * 0.62
    cx, cy = size / 2, size / 2
    d.arc([cx - M, cy - M, cx + M, cy + M], start=30, end=330, fill=(255, 255, 255, 255), width=max(1, int(size * 0.075)))
    d.arc([cx - m, cy - m, cx + m, cy + m], start=30, end=330, fill=(255, 255, 255, 255), width=max(1, int(size * 0.06)))
    dot = int(size * 0.09)
    d.ellipse([cx - dot / 2 - M, cy - dot / 2, cx + dot / 2 - M, cy + dot / 2], fill=(255, 255, 255, 255))
    d.ellipse([cx - dot / 2 + M, cy - dot / 2, cx + dot / 2 + M, cy + dot / 2], fill=(255, 255, 255, 255))
    return img

os.makedirs(OUT, exist_ok=True)

for size, name in [(192, 'android-chrome-192x192.png'), (512, 'android-chrome-512x512.png'), (180, 'apple-touch-icon.png'), (32, 'favicon-32x32.png'), (16, 'favicon-16x16.png')]:
    draw_logo(size).save(os.path.join(OUT, name))
    print('wrote', name)

ico = draw_logo(48)
ico.save(os.path.join(OUT, 'favicon.ico'), sizes=[(16, 16), (32, 32), (48, 48)])
print('wrote favicon.ico')

W, H = 1200, 630
og = Image.new('RGB', (W, H), (255, 255, 255))
d = ImageDraw.Draw(og)
for y in range(H):
    t = y / H
    r = round(255 + (255 - 255) * t)
    g = round(237 + (248 - 237) * t)
    b = round(213 + (241 - 213) * t)
    d.line([(0, y), (W, y)], fill=(r, g, b))
logo = draw_logo(300)
og.paste(logo, ((W - 300) // 2, (H - 300) // 2), logo)
og.save(os.path.join(OUT, 'og-image.png'))
print('wrote og-image.png 1200x630')
