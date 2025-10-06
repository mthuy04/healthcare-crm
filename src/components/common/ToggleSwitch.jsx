// src/components/common/ToggleSwitch.jsx
import { useState } from 'react';

export default function ToggleSwitch({ initialIsOn = false }) {
  const [isOn, setIsOn] = useState(initialIsOn);

  const toggle = () => setIsOn(!isOn);

  return (
    <button
      onClick={toggle}
      className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors ${
        isOn ? 'bg-blue-500' : 'bg-gray-300'
      }`}
    >
      <span
        className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${
          isOn ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );
}