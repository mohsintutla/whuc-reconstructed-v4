import os
import re
import random

live_images = [
    "https://hajjpeople.com/assets/2021/04/WHUC-2012-Image-BHUC-560x373.jpg",
    "https://hajjpeople.com/assets/2021/04/IMG-20190911-WA0004-420x560.jpg",
    "https://hajjpeople.com/assets/2021/04/img001-456x600.jpg",
    "https://hajjpeople.com/assets/2021/04/Mobile-Award-475x560.jpg",
    "https://hajjpeople.com/assets/2021/04/The-British-Hajj-Delegation-Drs-560x420.jpg",
    "https://hajjpeople.com/assets/2021/04/Presenting-House-of-Lords-Baroness-Uddin-Seif-Usher-560x420.jpg",
    "https://hajjpeople.com/assets/2021/04/British-Hajj-Delegation-2019-A-560x369.jpg",
    "https://hajjpeople.com/assets/2021/04/IMG-20180802-WA0017-560x448.jpg",
    "https://hajjpeople.com/assets/2021/04/IMG-20190827-WA0057-560x306.jpg",
    "https://hajjpeople.com/assets/2021/04/IMG-20200914-WA0017-560x373.jpg"
]

logo = "https://hajjpeople.com/assets/hajj-logo.png"

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Map logos
    content = content.replace('"/images/whuc-logo.png"', f'"{logo}"')
    content = content.replace('"/images/hajj-people-logo.png"', f'"{logo}"')
    content = content.replace('"/images/hajj-people-footer-logo.png"', f'"{logo}"')

    # Replace all other "/images/..." with random live image
    def replace_image(match):
        img_name = match.group(1)
        if 'icon' in img_name or 'logo' in img_name:
            return match.group(0) # Keep icons as is to avoid breaking layout too much, or replace? Let's keep them if they are icons
        return f'"{random.choice(live_images)}"'
    
    # Replace src="/images/xxx" where it is not already an http link
    content = re.sub(r'"/images/([^"]+\.(?:jpg|png|webp|jpeg))"', replace_image, content)
    # also handle src={`/images/${item.img}`} which is in template literals
    # We'll just replace the template literal with a random image from the list in JSX? No, that's hard to parse.
    # For template literals like `/images/${evt.img}`, we can just replace the whole src property to a random image.
    
    with open(filepath, 'w') as f:
        f.write(content)

src_dir = '/Users/user/Documents/PROJECTS/v4/src'
for root, dirs, files in os.walk(src_dir):
    for file in files:
        if file.endswith(('.jsx', '.js')):
            process_file(os.path.join(root, file))

print("Image URLs replaced.")
