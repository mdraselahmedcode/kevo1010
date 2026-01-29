// hooks/useLocation.ts
import { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { Alert } from 'react-native';

export default function useLocation() {
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchLocation = async () => {
    try {
      setLoading(true);

      const enabled = await Location.hasServicesEnabledAsync();
      if (!enabled) {
        Alert.alert('Location not enabled', 'Please enable your Location services');
        setError('Location services disabled');
        setLoading(false);
        return;
      }

      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission denied', 'Allow the app to use the location services');
        setError('Location permission denied');
        setLoading(false);
        return;
      }

      const { coords } = await Location.getCurrentPositionAsync({});
      setLocation({ latitude: coords.latitude, longitude: coords.longitude });
    } catch (err) {
      console.error(err);
      setError('Error fetching location');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  return { location, loading, error, fetchLocation };
}
