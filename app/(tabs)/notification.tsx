import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

export default function notification() {
    return (
        <View>
            <Text>Notification Screen</Text>
            <Link href={"/"}>Go Home</Link>
        </View>
    )
}