import { ArchiveTwoTone } from '@material-ui/icons';
import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Washing extends Component {

    constructor() {
        super()

        this.state = {
            cost: 0,
            toggle: true,
            data: [
                { id: 1, quantity: 0, key: 'Android', price: 10, totalprice: 0 },
                { id: 2, quantity: 0, key: 'iOS', price: 20, totalprice: 0 },
                { id: 3, quantity: 0, key: 'Java', price: 30, totalprice: 0 },
                { id: 4, quantity: 0, key: 'Swift', price: 40, totalprice: 0 },
                { id: 5, quantity: 0, key: 'Android1', price: 50, totalprice: 0 },
                { id: 6, quantity: 0, key: 'Android2', price: 50, totalprice: 0 },
                { id: 7, quantity: 0, key: 'Android3', price: 50, totalprice: 0 },
            ],
        }
    }

    call = () => {
        this.setState({ toggle: !this.state.toggle })
    }

    adddd = (item) => {
        item.quantity = item.quantity + 1
        item.totalprice = item.price * item.quantity
        this.setState({ cost: item.totalprice })
    }

    acccc = (item) => {
        if (item.quantity > 0)
            item.quantity = item.quantity - 1
        item.totalprice = item.price * item.quantity
        this.setState({ cost: item.totalprice })
    }


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'lightgrey', width: wp('100%'), height: hp('100%') }}>
                <View style={{ width: wp('50%'), marginTop: hp('4%'), marginLeft: wp('4%') }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Service(Required)</Text>
                </View>
                <View style={{ width: wp('90%'), height: hp('35%'), alignSelf: 'center', elevation: 10, marginTop: hp('1%'), backgroundColor: '#fff' }}>
                    <View style={{ width: wp('90%'), height: hp('4%'), flexDirection: 'row', backgroundColor: 'grey', elevation: 0, marginBottom: hp('1%') }}>
                        <View style={{ width: wp('45%'), paddingStart: 17, paddingTop: 3 }}><Text style={{ alignSelf: 'flex-start', color: '#fff', fontWeight: 'bold' }}>Garment</Text></View>
                        <View style={{ width: wp('25%'), paddingTop: 3 }}><Text style={{ alignSelf: 'center', color: '#fff', fontWeight: 'bold' }}>Quantity</Text></View>
                        <View style={{ width: wp('20%'), paddingTop: 3 }}><Text style={{ alignSelf: 'center', color: '#fff', fontWeight: 'bold' }}>Price</Text></View>
                    </View>
                    <FlatList
                        data={this.state.data}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            return (

                                <View style={{ width: wp('90%'), height: hp('3%'), flexDirection: 'row', borderWidth: 0, borderColor: '#000', marginTop: hp('1%') }}>
                                  
                                    <View style={{ flexDirection: 'row', width: wp('45%'), borderWidth: 0, borderColor: '#000', alignItems: 'center', paddingStart: hp('2%') }}>
                                        <TouchableOpacity onPress={() => this.call()}>
                                            {this.state.toggle ? <Icons name='checkbox-blank-outline' size={18} /> : <Icons name='check-box-outline' size={18} />}
                                        </TouchableOpacity>
                                        <Text style={{ alignSelf: 'center', fontSize: 15, paddingStart: 2 }}>{item.key}</Text>
                                    </View>

                                    <View style={{
                                        flexDirection: 'row', borderColor: '#000',
                                        marginLeft: hp('0%'), borderWidth: 0, borderColor: '#fff',
                                        width: wp('25%'), height: hp('4%'), alignSelf: 'center',
                                        elevation: 0, marginTop: hp('0%'), justifyContent: 'center',
                                        backgroundColor: 'light'
                                    }}>
                                        <View style={{flexDirection:'row',marginTop:hp('0.5%')}}>
                                        <TouchableOpacity onPress={() => this.acccc(item)}>
                                            <View style={{ width: wp('6%'), height: hp('3%'), alignItems: 'center', borderWidth: 1, borderColor: '#000', }}>
                                                <Icons name="minus" size={17} />
                                            </View>
                                        </TouchableOpacity>

                                        <View style={{ width: wp('6%'), height: hp('3%'), alignItems: 'center', borderBottomWidth: 1, borderTopWidth: 1, borderColor: '#000', }}>
                                            <Text style={{ paddingBottom: hp('0%'), fontSize: 15 }}>{item.quantity}</Text>
                                        </View>

                                        <TouchableOpacity onPress={() => this.adddd(item)}>
                                            <View style={{ width: wp('6%'), height: hp('3%'), alignItems: 'center', borderWidth: 1, borderColor: '#000', }}>
                                                <Icons name="plus" size={17} />
                                            </View>
                                        </TouchableOpacity>
                                        </View>
                                   
                                    </View>

                                    <View style={{ width: wp('20%'), borderWidth: 1, borderColor: '#fff', }}>
                                        <Text style={{ alignSelf: 'center', fontSize: 15 }}>{item.totalprice}</Text>
                                    </View>

                                </View>
                            )
                        }
                        }
                    />
                </View>

                <View style={{ width: wp('90%'), height: hp('35%'), alignSelf: 'center', elevation: 10, marginTop: hp('2%'), backgroundColor: '#fff' }}>
                    <View style={{ width: wp('90%'), height: hp('4%'), flexDirection: 'row', backgroundColor: 'grey' }}>
                        <View style={{ width: wp('45%'), paddingStart: 17, paddingTop: 3 }}><Text style={{ alignSelf: 'flex-start', color: '#fff', fontWeight: 'bold' }}>Household Items</Text></View>
                        <View style={{ width: wp('25%'), paddingTop: 3 }}><Text style={{ alignSelf: 'center', color: '#fff', color: '#fff', fontWeight: 'bold' }}>Quantity</Text></View>
                        <View style={{ width: wp('20%'), paddingTop: 3 }}><Text style={{ alignSelf: 'center', color: '#fff', color: '#fff', fontWeight: 'bold' }}>Price</Text></View>
                    </View>
                    <FlatList
                        data={this.state.data}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            return (

                                <View style={{ width: wp('90%'), height: hp('3%'), flexDirection: 'row', borderWidth: 0, borderColor: '#000', marginTop: hp('1%') }}>

                                    <View style={{ flexDirection: 'row', width: wp('45%'), borderWidth: 0, borderColor: '#000', alignItems: 'center', paddingStart: hp('2%') }}>
                                        <TouchableOpacity onPress={() => this.call()}>
                                            {this.state.toggle ? <Icons name='checkbox-blank-outline' size={18} /> : <Icons name='check-box-outline' size={18} />}
                                        </TouchableOpacity>
                                        <Text style={{ alignSelf: 'center', fontSize: 15, paddingStart: 2 }}>{item.key}</Text>
                                    </View>

                                    <View style={{
                                        flexDirection: 'row', borderColor: '#000',
                                        marginLeft: hp('0%'), borderWidth: 0, borderColor: '#fff',
                                        width: wp('25%'), height: hp('4%'), alignSelf: 'center',
                                        elevation: 0, marginTop: hp('0%'), justifyContent: 'center',
                                        backgroundColor: 'light'
                                    }}>
                                             <View style={{flexDirection:'row',marginTop:hp('0.5%')}}>
                                        <TouchableOpacity onPress={() => this.acccc(item)}>
                                            <View style={{ width: wp('6%'), height: hp('3%'), alignItems: 'center', borderWidth: 1, borderColor: '#000', }}>
                                                <Icons name="minus" size={17} />
                                            </View>
                                        </TouchableOpacity>

                                        <View style={{ width: wp('6%'), height: hp('3%'), alignItems: 'center', borderBottomWidth: 1, borderTopWidth: 1, borderColor: '#000', }}>
                                            <Text style={{ paddingBottom: hp('0%'), fontSize: 15 }}>{item.quantity}</Text>
                                        </View>

                                        <TouchableOpacity onPress={() => this.adddd(item)}>
                                            <View style={{ width: wp('6%'), height: hp('3%'), alignItems: 'center', borderWidth: 1, borderColor: '#000', }}>
                                                <Icons name="plus" size={17} />
                                            </View>
                                        </TouchableOpacity>
                                            </View>
                                    </View>

                                    <View style={{ width: wp('20%'), height: hp('3%'), borderWidth: 0, borderColor: '#000', }}>
                                        <Text style={{ alignSelf: 'center', fontSize: 15, paddingBottom: 7 }}>{item.totalprice}</Text>
                                    </View>

                                </View>
                            )
                        }
                        }
                    />


                </View>

                <View style={{ flexDirection: 'row', width: wp('65%'), borderWidth: 0, borderColor: '#000', alignItems: 'center', paddingStart: hp('4%'), marginTop: hp('1%') }}>
                    <TouchableOpacity onPress={() => this.call()}>
                        {this.state.toggle ? <Icons name='checkbox-blank-outline' size={18} /> : <Icons name='check-box-outline' size={18} />}
                    </TouchableOpacity>
                    <Text style={{ alignSelf: 'center', fontSize: 15, paddingStart: 2 }}>Dry Cleaning</Text>
                </View>
                <View style={{ flexDirection: 'row', width: wp('45%'), borderWidth: 0, borderColor: '#000', alignItems: 'center', paddingStart: hp('4%'), marginTop: hp('1%') }}>
                    <TouchableOpacity onPress={() => this.call()}>
                        {this.state.toggle ? <Icons name='checkbox-blank-outline' size={18} /> : <Icons name='check-box-outline' size={18} />}
                    </TouchableOpacity>
                    <Text style={{ alignSelf: 'center', fontSize: 15, paddingStart: 2 }}>Press Only</Text>
                </View>

                <View style={{ width: wp('50%'), alignSelf: 'center', marginTop: hp('1%') }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Total Amount : ${this.state.cost}</Text>
                </View>

                <TouchableOpacity onPress={() => alert('Hello')}>
                    <View style={{ width: wp('80%'), elevation: 20, height: hp('6%'), backgroundColor: '#48cfc9', borderRadius: 30, alignSelf: 'center', justifyContent: 'center', marginTop: hp('0%') }}>
                        <Text style={{ color: '#fff', alignSelf: 'center', fontSize: 20, fontWeight: 'bold' }}>Confirm</Text>
                    </View>
                </TouchableOpacity>
            </View>

        );
    }
}

