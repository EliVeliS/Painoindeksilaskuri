import {View, Text, TouchableOpacity, ScrollView} from 'react-native'
import Styles from '../Styles'
import {useState} from 'react'

export default function Dropdown({bottles, setBottles, hours, setHours}) {

    const [chooseBottles, setChooseBottles] = useState(false)
    const [chooseHours, setChooseHours] = useState(false)
    const data = Array.from(Array(25).keys())
    
    const eventBottles = (key) => {
        setBottles(key)
        setChooseBottles(!chooseBottles)
    }
    const eventHours = (key) => {
        setHours(key)
        setChooseHours(!chooseHours)
    }
    
  return (<View>  
            <Text style = { Styles.secondTitle }>Bottles :</Text>
        <TouchableOpacity onPress = { () => setChooseBottles(!chooseBottles)}>
            <Text style = { Styles.dropDownTitles }> {bottles} bottles▼</Text>
        </TouchableOpacity>
            {!chooseBottles ? (
                    <View></View>
                ):(<View style =  {Styles.dropDownContainer}>
                    <ScrollView nestedScrollEnabled = {true}>  
                    {data.map((data, key) => {
                        return( <View key = {data}>
                        <TouchableOpacity onPress = { () => eventBottles(key) } >
                                <View>
                                    <Text style = {Styles.dropDownItems}>  {data} Bottles</Text>
                                </View>
                            </TouchableOpacity>   
                        </View>   
                        )
                    })}
                    </ScrollView>
                    </View>
                )}
            <Text style = { Styles.secondTitle }>Time :</Text>
        <TouchableOpacity onPress = { () => setChooseHours(!chooseHours)}>
                <Text style = { Styles.dropDownTitles  }> {hours} hours  ▼</Text>
        </TouchableOpacity>
            {!chooseHours ? (
                    <View></View>
                ):(<View style =  {Styles.dropDownContainer}>
                    <ScrollView nestedScrollEnabled = {true}> 
                    {data.map((data, key) => {
                        return( <View key = {data}>
                        <TouchableOpacity onPress = { () => eventHours(key) } >
                                <View>
                                    <Text style = {Styles.dropDownItems}>  {data} hours</Text>
                                </View>
                            </TouchableOpacity>
                            
                        </View>   
                        )
                    })}
                    </ScrollView>
                    </View>
                )}
    </View>)
}