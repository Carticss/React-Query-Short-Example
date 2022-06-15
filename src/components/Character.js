import { Text, View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useQuery } from 'react-query'
import React, { useEffect, useState } from 'react'

export default function Character() {

    const fetchCharacters = async () => {
        const response = await fetch("https://rickandmortyapi.com/api/character")
        return response.json()        
    }
    
    const { data, status } = useQuery("GET_CHARACTERS", fetchCharacters)

    if(status === "loading"){
        return (
            <View>
                <Text>
                    Loading...
                </Text>
            </View>
        )
    }

    if(status === "error"){
        return (
            <View>
                <Text>
                    Error
                </Text>
            </View>
        )
    }
    
    return (
        <SafeAreaView>
            {data.results.map((ch) => (
                <View key={ch.id}>
                    <Text>{ch.name}</Text>
                    <Image source={ch.image} />
                </View>
            ))}
        </SafeAreaView>
    )
}