import {View, Text, TouchableOpacity} from 'react-native'
import Styles from '../Styles'

export default function Radiobutton({ checked, setChecked}) {

  const gender = ['Male','Female']; 

  return ( 
        <View style = { Styles.radioContainer}>
                  {gender.map((gender, key) => {
                      return(
                        <View key={gender}>
                          {checked == key ? (
                            <View>
                              <Text style = { Styles.black2 }> { gender }</Text>
                            <TouchableOpacity style={Styles.radioButton}>   
                              <View style = { Styles.selectedRadioButton}/>
                            </TouchableOpacity>
                          </View>
                          ) : (
                            <View>
                              <Text style={Styles.black3}> { gender }</Text>
                                <TouchableOpacity style={Styles.radioButton} onPress={() => { setChecked(key) }}>
                                  <View style = {Styles.unselected}></View>                         
                                </TouchableOpacity>
                              </View>
                          )}
                      </View>
                      )
                  })}
                </View>
   )
}