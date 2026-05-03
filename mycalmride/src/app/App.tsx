import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router';
import { AnimatePresence, motion } from 'motion/react';
import { SplashScreen } from './components/screens/SplashScreen';
import { OnboardingWelcomeScreen } from './components/screens/OnboardingWelcomeScreen';
import { OnboardingAppInfoScreen } from './components/screens/OnboardingAppInfoScreen';
import { OnboardingLocationAccessScreen } from './components/screens/OnboardingLocationAccessScreen';
import { OnboardingAllowLocationAccessScreen } from './components/screens/OnboardingAllowLocationAccessScreen';
import { OnboardingAccountSetupScreen } from './components/screens/OnboardingAccountSetupScreen';
import { OnboardingAccountSetup1Screen } from './components/screens/OnboardingAccountSetup1Screen';
import { OnboardingNameSetupScreen } from './components/screens/OnboardingNameSetupScreen';
import { RideStrategiesSetupScreen } from './components/screens/RideStrategiesSetupScreen';
import { LoadingScreen } from './components/screens/LoadingScreen';
import { OverviewScreen } from './components/screens/OverviewScreen';
import { RideStrategiesScreen } from './components/screens/RideStrategiesScreen';
import { HealthInsightsScreen } from './components/screens/HealthInsightsScreen';
import { DestinationScreen } from './components/screens/DestinationScreen';
import { DriverInitializationScreen } from './components/screens/DriverInitializationScreen';
import { HaloDisplayScreen } from './components/screens/HaloDisplayScreen';
import { DriverHaloDisplayReportsScreen } from './components/screens/DriverHaloDisplayReportsScreen';
import { RideLogScreen } from './components/screens/RideLogScreen';
import { AccountScreen } from './components/screens/AccountScreen';

function AnimatedRoutes() {
  const location = useLocation();

  const pageTransition = {
    initial: { x: '100%' },
    animate: { x: 0 },
    exit: { x: '100%' },
    transition: { type: 'tween', ease: [0.25, 0.1, 0.25, 1], duration: 0.3 }
  };

  return (
    <AnimatePresence initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/onboarding/welcome" element={<OnboardingWelcomeScreen />} />
        <Route path="/onboarding/app-info" element={<OnboardingAppInfoScreen />} />
        <Route path="/onboarding/location-access" element={<OnboardingLocationAccessScreen />} />
        <Route path="/onboarding/allow-location-access" element={<OnboardingAllowLocationAccessScreen />} />
        <Route path="/onboarding/account-setup" element={<OnboardingAccountSetupScreen />} />
        <Route path="/onboarding/account-setup-1" element={<OnboardingAccountSetup1Screen />} />
        <Route path="/onboarding/account-setup-3" element={<OnboardingNameSetupScreen />} />
        <Route path="/onboarding/account-setup-4" element={<RideStrategiesSetupScreen />} />
        <Route path="/loading" element={<LoadingScreen />} />
        <Route path="/overview" element={<OverviewScreen />} />
        <Route
          path="/ride-strategies"
          element={
            <motion.div {...pageTransition} className="size-full absolute inset-0 bg-[#042b48]">
              <RideStrategiesScreen />
            </motion.div>
          }
        />
        <Route
          path="/health-insights"
          element={
            <motion.div {...pageTransition} className="size-full absolute inset-0 bg-[#042b48]">
              <HealthInsightsScreen />
            </motion.div>
          }
        />
        <Route
          path="/destination"
          element={
            <motion.div {...pageTransition} className="size-full absolute inset-0 bg-[#042b48]">
              <DestinationScreen />
            </motion.div>
          }
        />
        <Route path="/driver-initialization" element={<DriverInitializationScreen />} />
        <Route path="/halo-display" element={<HaloDisplayScreen />} />
        <Route path="/halo-display/reports" element={<DriverHaloDisplayReportsScreen />} />
        <Route
          path="/ride-log"
          element={
            <motion.div {...pageTransition} className="size-full absolute inset-0 bg-[#042b48]">
              <RideLogScreen />
            </motion.div>
          }
        />
        <Route
          path="/account"
          element={
            <motion.div {...pageTransition} className="size-full absolute inset-0 bg-[#042b48]">
              <AccountScreen />
            </motion.div>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="size-full overflow-hidden relative bg-[#042b48]">
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}