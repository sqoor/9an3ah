import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Platform, Linking, TouchableOpacity } from 'react-native'
class ProfileScreen extends Component {
    state = {
        avatar: '',
        name: 'مصطفى',
        phoneNumber: '0777753111',
        field: 'كهربجي',
        location: 'جرش',
        experience: 3,
        hourlyFare: 22
    }

    render() {
        /*  call = () => {
                    let phoneNumber = ''
                    if (Platform.OS === "android") {
                        phoneNumber = "tel:${0777522486}";
                    } else {
                        phoneNumber = "telprompt:${0777522486}";
                    }
                    Linking.openURL(phoneNumber)
                } */

        return (
            <View>
                <View style={styles.header}>
                    <Image
                        source={require('../../assets/Home/man.png')}
                        style={{ width: 140, height: 140, borderRadius: 400 / 2, alignSelf: "center", marginTop: "5%" }}
                    />
                    <Text style={styles.text1}>{this.state.name}</Text>
                    <Text style={styles.text1}>{this.state.phoneNumber}</Text>
                </View>

                <View style={styles.information}>
                    <View style={styles.row}>
                        <View style={styles.individualInfo}>
                            <Text style={{ marginTop: "18%" }}>{this.state.location}</Text>
                            <Image
                                source={require('../../assets/Profile/Location.png')}
                                style={{ width: 50, height: 50, borderRadius: 400 / 2, alignSelf: "auto", marginTop: "5%", marginRight: "18%" }}
                            />
                        </View>


                        <View style={styles.individualInfo}>
                            <Text> {this.state.hourlyFare} بالساعة </Text>
                            <Image
                                source={require('../../assets/Profile/money.png')}
                                style={{ width: 50, height: 50, borderRadius: 400 / 2, alignSelf: "auto", marginTop: "5%" }}
                            />
                        </View>

                    </View>


                    <View style={styles.row}>
                        <View style={styles.individualInfo}>
                            <Text> {this.state.experience} سنين خبرة</Text>
                            <Image
                                source={require('../../assets/Profile/behavior.png')}
                                style={{ width: 50, height: 50, borderRadius: 400 / 2, alignSelf: "auto", marginTop: "5%" }}
                            />
                        </View>

                        <View style={styles.individualInfo}>
                            <Text>{this.state.field}</Text>
                            <Image
                                source={require('../../assets/Profile/FieldOfWork.png')}
                                style={{ width: 50, height: 50, borderRadius: 400 / 2, alignSelf: "auto", marginTop: "5%" }}
                            />
                        </View>
                    </View>
                </View>


                <TouchableOpacity style={styles.div3} onPress={this.props.navigation.navigate({ routeName: 'EditProfile' })}>
                    <Text style={{ alignSelf: "center", color: "lightgreen", fontSize: 20 }}>تعديل</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    individualInfo: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        margin: 8
    },
    header: {
        width: '100%',
        height: '50%',
        marginTop: '6%',
        backgroundColor: "#FFE346",
        color: "black",
    },
    information: {
        borderRadius: 25,
        borderColor: "yellow",
        backgroundColor: "#FF7F90",
        alignSelf: "center",
        width: '90%',
        height: "33%",
        marginTop: "8%",
        borderWidth: 4,
        display: "flex",
    },
    text1: {
        alignSelf: "center",
        marginTop: "8%",
        color: "white",
        fontFamily: "Roboto",
        fontSize: 20
    },
    div3: {
        alignSelf: "center",
        width: 120,
        marginTop: "3%",
        backgroundColor: "#FF7F90",
        borderRadius: 7,
        height: 30
    },
    row: {
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems : 'center',
        width: '100%',
        margin: 8
    }
})

export default ProfileScreen;
