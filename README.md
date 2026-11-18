# 🛡️ Grimglyf · Procedural ASCII Action-RPG

**Grimglyf** is a complex, feature-rich browser-based Action-RPG built with React and HTML5 Canvas. Inspired by classic dark ARPGs like *Diablo II*, it features full ASCII vector rendering, multi-floor estate building, procedural dungeons across diverse biomes, deep character customization, and real-time cooperative multiplayer.

---

## 🌟 Key Features

* **ASCII Vector Engine:** High-contrast canvas renderer featuring flickering torch lighting, fog-of-war, dynamic entity scaling, weather effects (rain, snow, wind), and a circular radar minimap.
* **Oakhaven Village & Personal Land:** Trade with merchants, accept contracts, purchase biome portal scrolls, or teleport to your customizable personal estate. Build walls, stairs to higher floors, workbenches, and interactive arcade TVs!
* **Deep ARPG Mechanics:** 9 distinct class archetypes, 11 weapon categories (swords, staves, magic orbs, plasma casters, RPGs, AK-47s), armor slotting, ring/trinket systems, Socket & Runeword combinations, and a 15-node skill tree.
* **Procedural Biomes & Dangers:** Explore Catacombs, Jungle, Desert, Water, Ice, Volcanic, and Sky realms (watch out for chasms!). Includes destructible barrels, powder bombs, spike traps, and colossal dungeon bosses.
* **Multiplayer Co-op:** WebSocket integration supporting room codes, 4-player parties, and co-op estate visits.
* **Cross-Platform Controls:** Full support for Keyboard/Mouse, HTML5 Gamepads, and on-screen touch controls.

---

## 🕹️ Controls

| Action | Keyboard / Mouse | Gamepad |
| :--- | :--- | :--- |
| **Movement** | `W A S D` | Left Stick / D-Pad |
| **Aim & Attack** | Mouse Aim + Left Click | Right Stick + Right Trigger (`RT`) |
| **Dash / Evade** | `Spacebar` | Button `B` / `Circle` |
| **Active Skills** | `Q`, `E`, `R`, `T`, `Z`, `X` | Face Buttons / Bumpers |
| **Interact** | `F` | Button `X` / `Square` |
| **Inventory / Gear** | `I` | Select / View |
| **Skill Tree** | `K` | Menu Button |
| **Build Mode** | `B` (on Personal Land) | Left Stick Click |

---

## 🚀 Quick Start / Local Development

Clone the repository and install dependencies:

```bash
git clone [https://github.com/YOUR_USERNAME/grimglyf.git](https://github.com/YOUR_USERNAME/grimglyf.git)
cd grimglyf
npm install
npm run dev
