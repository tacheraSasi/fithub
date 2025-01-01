import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

const iconPath = require("../assets/images/icon.png")

const ScanIcon = () => {
  return (
    <TouchableOpacity>
      <Image
      style={{
        width:60,
        height:60
      }}
      source={iconPath}
      />
    </TouchableOpacity>
  )
}

export default ScanIcon