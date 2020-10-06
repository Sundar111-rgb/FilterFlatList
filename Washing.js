
import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert, FlatList, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckBox from '@react-native-community/checkbox';

export default class Washing extends Component {

    constructor() {
        super()

        this.state = {
            cost: 0,
            toggle: false,
            costprice:true,
            quantity:0,
            data: [],
            lists:[],
            
          //  isChecked : [],
            selectedLists:[],
            isChecked : false
         }
    }


       
       componentDidMount() {

        let initialCheck = this.state.lists.map(() => false);
    //   console.log(initialCheck);
        this.setState({isChecked : initialCheck})
           this.ApiFetch()
       }

     
       isIconCheckedOrNot = (item,index) => {

        // if(this.state.isChecked){
        //     alert('h')
        //     this.setState({isChecked:item})
        // }else {
        //     alert('Y')
        //     this.setState({isChecked:item})
        // }
      // this.state.isChecked[index] = !this.state.isChecked[index];
       console.log('--------------------',item.title)
        let  isChecked = this.state.isChecked
        let selectedLists = this.state.selectedLists
        isChecked[index] = !isChecked[index];
        this.setState({ isChecked : isChecked});
        if(isChecked[index] == true) {
            selectedLists.push(item.price)
        } else {            
            selectedLists.pop(item.price)
        }

        alert(selectedLists)
       }
    

       ApiFetch1 = () => {
        var formdata = new FormData()
       formdata.append('name','sundar')
        formdata.append('email','')
        formdata.append('mobile',)
        formdata.append('password','chauhan1234@#')
        formdata.append('device_type','android')
        formdata.append('device_token','abcd')

    var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };
  
 fetch("https://www.webmobril.org/dev/dogtraining/api/v1/register-user", requestOptions)
    .then(response => response.json())
    .then((response) => {    
      console.log("inspection response=-=+++++=->>",response) 

     // this.setState({data:response.result})
      
    })
    .catch(error => console.log('error', error));
      }

    ApiFetch = () => {
            var formdata = new FormData()
            formdata.append('service_id',1)

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
          };
      
     fetch("http://webmobril.org/dev/goodwash/api/Mobileapi/getservicedetail", requestOptions)
        .then(response => response.json())
        .then((response) => {    
          console.log("inspection response=-=+++++=->>",response) 
    
          this.setState({data:response.result})
          
        })
        .catch(error => console.log('error', error));
          }
    

    Call = (index) => {
      //  this.setState({toggle : !this.state.toggle})
        this.setState({ isChecked : !this.state.isChecked[index] })
    }

    onCheck = (item, index) => {
        let items; 
     //   item.data[index].checked = item.data[i].checked ? ! item.data[i].checked : true
         items[index] = item.price
       this.setState({list:items})
        alert(list)
     }

    adddd = (item) => {
      
        this.setState({quantity: this.state.quantity+1})
        item.totalprice = item.price * item.quantity
        this.setState({ cost: item.totalprice })
    }

    acccc = (item) => {
        if (item.quantity > 0)
            item.quantity = item.quantity - 1
        item.totalprice = item.price * item.quantity
        this.setState({ cost: item.totalprice })
    }

    renderItem = (item,index) => {
        return(
            <View style={{ width: wp('90%'), height: 'auto', alignSelf: 'center', elevation: 10, marginTop: hp('1%'), backgroundColor: '#fff',paddingBottom:hp('2%') }}>
            <View style={{ width: wp('90%'), height: hp('3.5%'), flexDirection: 'row', backgroundColor: 'lightgrey', elevation: 0, marginBottom: hp('1%') }}>
            <View style={{ width: wp('50%'), paddingStart: 17, paddingTop: 3 }}><Text style={{ alignSelf: 'flex-start', color: '#000', fontWeight: 'bold' }}>{item.name}</Text></View>
            <View style={{ width: wp('20%'), paddingTop: 3 }}><Text style={{ alignSelf: 'center', color: '#000', fontWeight: 'bold' }}>Quantity</Text></View>
            <View style={{ width: wp('20%'), paddingTop: 3 }}><Text style={{ alignSelf: 'center', color: '#000', fontWeight: 'bold' }}>Price</Text></View>
            </View>
                   <FlatList
                        data={item.data}
                        keyExtractor={item => item.id}
                        renderItem={({ item,index }) =>  this.renderItemChild(item, index)} 
                      /> 
            </View>
        )
    }

    renderItemChildTest = (item,index) => {
        return(
            <View style={{ width: wp('90%'), height: hp('3%'), flexDirection: 'row', borderWidth: 1, borderColor: '#000', marginTop: hp('1%') }}>
               
        <Text>{item.price}</Text>
        </View>
        )
    }

   

    renderItemChild = (item,index) => {
        return(
            <View style={{ width: wp('90%'), height: hp('3%'), flexDirection: 'row', borderWidth: 0, borderColor: '#000', marginTop: hp('1%') }}>
               
            <View style={{flex:1.3, flexDirection: 'row', width: wp('60%'), borderWidth: 0,borderRadius:1, borderColor: '#000', alignItems: 'center', paddingStart: hp('1%') }}>
                <CheckBox value={this.state.isChecked[index]}  onValueChange={() => this.isIconCheckedOrNot(item,index)}  />
                <Text style={{ alignSelf: 'center', fontSize: hp('1.4%'), paddingStart: 0,fontWeight:'bold' }}>{item.title}</Text>
            </View>

            <View style={{flex:0.4,
                flexDirection: 'row', borderColor: '#000',
                marginLeft: hp('1.7%'), borderWidth: 1, borderColor: '#000',
                width: wp('20%'), height: hp('4%'), alignSelf: 'center',
                elevation: 0, marginLeft: hp('2%'), justifyContent: 'center',
                backgroundColor: 'light'
            }}>
                <View style={{flexDirection:'row',marginTop:hp('0.5%')}}>
                <TouchableOpacity onPress={() => this.acccc(item)}>
                    <View style={{ width: wp('6%'), height: hp('3%'), alignItems: 'center',borderLeftRadius:15, borderWidth: 1,borderRightWidth:0, borderColor: '#000', }}>
                        <Icons name="minus" size={17} />
                    </View>
                </TouchableOpacity>

                <View style={{ width: wp('6%'), height: hp('3%'), alignItems: 'center', borderBottomWidth: 1, borderTopWidth: 1, borderColor: '#000', }}>
                    <Text style={{ paddingBottom: hp('0%'), fontSize: 15 }}>{this.state.quantity}</Text>
                </View>

                <TouchableOpacity onPress={() => this.adddd(item)}>
                    <View style={{ width: wp('6%'), height: hp('3%'), alignItems: 'center',borderRightRadius:15, borderWidth: 1,borderLeftWidth:0, borderColor: '#000', }}>
                        <Icons name="plus" size={17} />
                    </View>
                </TouchableOpacity>
                </View>
           
            </View>

            <View style={{ flex:0.6,width: wp('10%'), borderWidth: 0, borderColor: '#fff', }}>
                {/* { this.state.costprice ? */}
                 <Text style={{ alignSelf: 'center', fontSize: 15 }}>{item.price}</Text>
                   {/* : <Text style={{ alignSelf: 'center', fontSize: 15 }}>{this.state.cost}</Text>} */}
            </View>

        </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'lightgrey', width: wp('100%'), height: hp('100%') }}>
                <View style={{ width: wp('50%'), marginTop: hp('1.2%'), marginLeft: wp('4%') }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Service(Required)</Text>
                </View>
                  
                    <FlatList
                        data={this.state.data}
                       // keyExtractor={item => item.id}
                        renderItem={({ item,index }) =>  this.renderItem(item, index)} 
                      />
                

               
                <View style={{ flexDirection: 'row', width: wp('65%'), borderWidth: 0, borderColor: '#000', alignItems: 'center', paddingStart: hp('4%'), marginTop: hp('1%') }}>
                <CheckBox  />

                    <Text style={{ alignSelf: 'center', fontSize: 15, paddingStart: 2 }}>Dry Cleaning</Text>
                </View>
                <View style={{ flexDirection: 'row', width: wp('45%'), borderWidth: 0, borderColor: '#000', alignItems: 'center', paddingStart: hp('4%'), marginTop: hp('1%') }}>
                <CheckBox />

                    <Text style={{ alignSelf: 'center', fontSize: 15, paddingStart: 2 }}>Press Only</Text>
                </View>

                <View style={{ width: wp('100%'), alignItems: 'center', marginTop: hp('1%') }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Total Amount : ${this.state.cost}</Text>
                </View>

                <TouchableOpacity onPress={() => alert(this.state.list)}>
                    <View style={{ width: wp('80%'), elevation: 20, height: hp('6%'), backgroundColor: '#48cfc9', borderRadius: 30, alignSelf: 'center', justifyContent: 'center', marginTop: hp('0%') }}>
                        <Text style={{ color: '#fff', alignSelf: 'center', fontSize: 20, fontWeight: 'bold' }}>Confirm</Text>
                    </View>
                </TouchableOpacity>
            </View>

        );
    }
}