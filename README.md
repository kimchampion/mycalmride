# Calm Ride

Calm Ride is a passenger-centered ride support thesis prototype built as a responsive React app. The MVP focuses on helping passengers feel calmer and more in control during stressful ride moments through supportive ride status messaging, predictive ride insights, and a manual calm request flow.

The visual direction follows a calm system design: dark, low-contrast surfaces, soft rounded components, restrained blue actions, and subtle accent moments. Language is intentionally minimal and supportive.

---

## Stack

- React  
- TypeScript  
- Vite  
- Tailwind CSS  
- React Router (HashRouter)  
- Local mock data and state  

---

## Implemented Screens

- Welcome  
- Sign in  
- Create account  
- Health insights permission  
- Data use / legal placeholder  
- Profile  
- Destination entry  
- Role select  
- Driver initialization (placeholder)  
- Passenger initialization  
- Passenger ride  
- Calm request sent  
- Ride insight state  
- End session  
- Not found  

---

## Reusable Components

- AppShell  
- ScreenLayout  
- TopBar  
- BottomActionBar  
- Button  
- Input  
- Card  
- StatusPill  
- ToggleRow  
- Modal  
- BrandMark  
- PermissionCard  
- ModeSelector  
- RideInsightCard  
- RideStatusHeader  
- CalmRequestBanner  
- HaloPlaceholder  
- EmptyState  

---

## Mocked vs Future Features

### Currently mocked

- Onboarding and account flows  
- Health insights permission  
- Ride start and role selection  
- Passenger ride support state  
- Calm request flow  
- Ride insight examples  
- Profile and settings  

### Reserved for future integration

- Apple Health / HealthKit  
- BLE heart rate strap  
- Halo communication layer  
- Route and traffic APIs  
- Breathing support module  
- Analytics or session logging  
- Capacitor wrapping for mobile packaging  

---

## Project Structure

> Note: the app lives inside a nested folder.

## GitHub Pages Deployment

This project is deployed using GitHub Pages with a GitHub Actions workflow.

### Key setup

- App root: `/mycalmride`
- Build output: `/dist`
- Vite base path:

```ts
base: '/mycalmride/'
```

### Deployment flow

1. Push to `main`
2. GitHub Actions builds from `/mycalmride`
3. The `dist/` folder is deployed to Pages

### Live site

https://kimchampion.github.io/mycalmride/

---

## Suggested Next Build Phases

1. Add a lightweight breathing support interaction to the ride screen
2. Expand ride insights into a timed event stream
3. Add settings persistence with local storage
4. Improve motion and transitions between states
5. Wrap with Capacitor once the prototype flow is stable

---

## Notes

- This is a prototype, not a medical product
- No real backend, auth, maps, BLE, or HealthKit integration
- No server-side rendering
- Passenger experience is prioritized over driver features in this phase

---

## Context

This project is part of a graduate thesis exploring how design can restore a sense of control for passengers during stressful ride moments.

The goal is not to eliminate anxiety, but to make stressful moments more predictable and provide a low-friction way to communicate discomfort.
