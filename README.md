# SmartHome Interface 🏠📱

## About the Project
**SmartHome** is an interface design project developed for a university competition focused on innovation, creativity, and usability.

The goal was to prototype the interface for a **digital home manager** that runs on a specific touch controller (tablet-like). The system allows residents to centrally control various home aspects (IoT devices) without needing to physically visit each room.

**Key Focus Areas:**
* **User Experience (UX):** Intuitive navigation and error prevention.
* **Usability:** Adherence to heuristic evaluation criteria.
* **Interaction:** Going beyond text with rich visuals, icons, and feedback.

## Features & Tasks
The prototype supports specific high-value tasks identified during the analysis phase:

## First Page : home.html

### 1. HVAC Control ❄️
* Control Air Conditioning units in different rooms (e.g., Living Room, Dining Room).
* Adjust temperature settings (e.g., set to 25ºC).
* Control fan speed intensity.
* Toggle power (On/Off) per unit.

### 2. Smart Kitchen Management 🍎
* **Smart Fridge & Pantry:** View current inventory.
* **Product Details:** Check expiration dates and nutritional scores.
* **Shopping:** View suggested shopping lists and execute purchase orders directly through the interface.

## Technical Constraints & Implementation
* **Resolution:** Designed strictly for **1280x720px** (Landscape orientation).
* **State Persistence:** The application maintains state during the session (e.g., remembering the last set temperature when navigating away and back) using Session Storage or in-memory structures.
* **Data:** No backend database is used. Data is pre-loaded/mocked for demonstration purposes.
* **Authentication:** The system assumes the user is already logged in.

## Usage Scenario (Demo)
*To evaluate the interface, follow this target scenario:*

> "You are sitting in the **Living Room** watching the national team soccer match, and the room is getting warm.
> 1. Turn **ON** the Living Room AC.
> 2. Set the temperature to **25ºC**.
> 3. Set the fan speed to **Minimum**.
> 4. Turn **OFF** the Dining Room AC (since no one is there)."


---
*This interface is a prototype developed for educational purposes.*
