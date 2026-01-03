import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

export default function profile() {
    return (
        <View>
            <Text>Profile Screen</Text>
            <Link href={"/"}>Go Home</Link>
        </View>
    )
}