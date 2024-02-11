


import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native"


const TimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 10000); // Update every second

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);
  // Formatting options
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true

  };

  const formattedTime = currentTime.toLocaleTimeString(undefined, options);

  return (
    <View>
      <Text style={{ color: 'grey' }}>{formattedTime}</Text>
    </View>
  );
};

export default TimeDisplay