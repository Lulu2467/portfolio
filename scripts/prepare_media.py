"""Turn raw project files into web-sized covers in public/images.

Usage: python scripts/prepare_media.py
Needs Pillow and imageio-ffmpeg (pip install pillow imageio-ffmpeg).
"""

import re
import subprocess
from pathlib import Path

import imageio_ffmpeg
from PIL import Image

Image.MAX_IMAGE_PIXELS = None

ROOT = Path(r"E:\file")
OUT = Path(__file__).resolve().parent.parent / "public" / "images"
FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()
DYNAMIC = ROOT / "CV" / "杨心玥-简历-作品集" / "杨心玥-动态作品集"

IMAGES = {
    "veil-1.jpg": ROOT / "联合工作营2.0" / "Veilspace帷心界" / "1.png",
    "veil-2.jpg": ROOT / "联合工作营2.0" / "Veilspace帷心界" / "2.png",
    "veil-3.jpg": ROOT / "联合工作营2.0" / "Veilspace帷心界" / "3.png",
    "veil-4.jpg": ROOT / "联合工作营2.0" / "Veilspace帷心界" / "4.png",
    "grad-board.jpg": ROOT / "毕设" / "展面图" / "样图.png",
    "cards-1.jpg": ROOT / "CV" / "同春牌话1.png",
    "cards-2.jpg": ROOT / "CV" / "同春牌话2.png",
    "symbion-wash.jpg": ROOT / "研课symbion" / "website" / "assets" / "hero-wash.png",
    "symbion-creation.jpg": ROOT / "研课symbion" / "website" / "assets" / "creation.png",
}

VIDEOS = {
    "food-pudding.jpg": ROOT / "实验声音" / "可食用频率" / "布丁+ui.mp4",
    "food-sweet.jpg": ROOT / "实验声音" / "可食用频率" / "甜.mp4",
    "grad-demo.jpg": ROOT / "毕设" / "Last design" / "12月16日demo.mp4",
    "fold.jpg": DYNAMIC / "意识褶皱.mp4",
    "rhythm.jpg": DYNAMIC / "律动之境.mp4",
    "echo.jpg": DYNAMIC / "余响.mp4",
    "he.jpg": DYNAMIC / "合.mp4",
    "scarecrow.jpg": DYNAMIC / "稻草人计划.mp4",
    "heal.jpg": DYNAMIC / "声愈.mp4",
}


def save(image, name, width=1600):
    image = image.convert("RGB")
    image.thumbnail((width, width * 2))
    image.save(OUT / name, quality=82, optimize=True, progressive=True)
    print(f"{name:22} {image.size}")


def duration(path):
    probe = subprocess.run([FFMPEG, "-i", str(path)], capture_output=True, text=True, errors="ignore")
    match = re.search(r"Duration: (\d+):(\d+):([\d.]+)", probe.stderr)
    if not match:
        return 10.0
    h, m, s = match.groups()
    return int(h) * 3600 + int(m) * 60 + float(s)


def grab(path, name, at=0.4):
    tmp = OUT / f"_{name}.png"
    seconds = duration(path) * at
    subprocess.run(
        [FFMPEG, "-y", "-loglevel", "error", "-ss", f"{seconds:.2f}", "-i", str(path), "-frames:v", "1", str(tmp)],
        check=True,
    )
    save(Image.open(tmp), name)
    tmp.unlink()


if __name__ == "__main__":
    OUT.mkdir(parents=True, exist_ok=True)
    for name, path in IMAGES.items():
        if path.exists():
            save(Image.open(path), name)
        else:
            print(f"missing {path}")
    for name, path in VIDEOS.items():
        if path.exists():
            grab(path, name)
        else:
            print(f"missing {path}")
