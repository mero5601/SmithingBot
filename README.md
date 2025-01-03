# Smithing Bot

A Python-based automation bot designed for OSRS smithing tasks. This upgraded version incorporates **color recognition** to detect and interact with dynamic game elements, providing a more reliable alternative to static pixel clicking used in earlier versions like the Agility Bot.

## Features

- **Color Recognition**: Detects the furnace and other key game elements based on their unique color values, enabling dynamic interactions even when game elements shift.
- **Real-Time Coordinate Retrieval**: Uses `pyautogui` to fetch real-time coordinates for accurate targeting of interactable objects.
- **Mouse Automation**: Leverages `robotJS` for smooth and realistic mouse movements.
- **Randomized Pixel Offsets**: Adds random pixel offsets for "constant" key areas like inventory and bank items, simulating human-like behavior and reducing bot detection risks.

## Improvements Over Previous Version

- Replaces static pixel clicking with **color recognition**, making the bot adaptable to changing game environments.
- Enhanced randomization and variability in behavior to mimic human actions more effectively.

## Requirements

- Python 3.x
- Required libraries:
  - `pyautogui`
  - `robotjs`

Install dependencies using:

```bash
pip install pyautogui
npm install robotjs

```
