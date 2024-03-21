import { useState, useEffect, useRef } from 'react'
import { Text, View, Button, Platform } from 'react-native';
import Navigation from './src/config/navigation/Navigation';
import { app, auth, db } from './src/config/util/firebaseConnection';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import Notification from './src/modules/notifications/Notification';
export default function App() {
  return (
    <Notification />
  );
};