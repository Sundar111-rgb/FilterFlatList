
import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert, FlatList, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckBox from '@react-native-community/checkbox';


export default class JustTestItBro extends Component 
{
        constructor() {
        super()

        this.state = {
            service_id:1,
            cost: 0,
            toggle: false,
            togglee: false,
            costprice:true,
            quantitylist:[],
            data: [],

            lists:[],
          // initialquantity:0,
          //  isChecked : [],
            selectedLists:[],
            isChecked : false,
            quantity:0,
            partationdata:'',
            qtydata:'',
         }
    }
    

    onUpdateItem1 = i => {
        this.setState(state => {
         const quantitylist = state.quantitylist.map((i,j) => {
          if (j === i) {
            return i + 1;
          } else {
            return i;
          }
      
         });
          return {
           quantitylist,
         };
       });
    
      };
     
    
      onUpdateItem2 = i => {
        this.setState(state => {
          const quantitylist = state.quantitylist.map((i, j) => {
            if (j === i) {
              return i - 1;
            } else {
              return i;
            }
             //return i - 1;
          });
           return {
            quantitylist,
          };
        });
       // alert(this.state.quantitylist[i]-1)
      };
    


       
       componentDidMount() {

        let initialCheck = this.state.lists.map(() => false);
      //  let initialquantity = this.state.quantitylist.map(() => 0);
    //   console.log('---------------------.......>>>>>>>',initialquantity);
        this.setState({isChecked : initialCheck})
      //  this.setState({quantitylist:initialquantity})
      //  console.log('--------------------->>>>>>>',this.state.quantity);
           this.ApiFetch()
          // this.state.quantitylist[0] = 2;
         // alert(this.state.quantitylist)
       }

     
       isIconCheckedOrNot = (item,index) => {
       console.log('--------------------',item.title,'------------------',item.id)
        let  isChecked = this.state.isChecked
        let selectedLists = this.state.selectedLists
      //  let quantitylist = this.state.quantitylist
        isChecked[item.id] = !isChecked[item.id];
        this.setState({ isChecked : isChecked});

        if(isChecked[item.id] == true) {
            selectedLists.push(item.price)
          // quantitylist.push(this.state.quantity)
        } else {            
            selectedLists.pop(item.price)
           // quantitylist.pop(this.state.quantity)
            //this.setState({cost:this.state.cost-item.price})
        }

        alert(selectedLists)
       }
    
       ApiFetch1 = () => {

        let quantity = this.state.quantitylist
        var formdata = new FormData()
        formdata.append('service_id',this.state.service_id)

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
      for(var i=0;i<response.result.length;i++) {
            console.log(response.result.data[i])
      }
    })
    .catch(error => console.log('error', error));
      }
    
    ApiFetch = () => {
      let quantity = this.state.quantitylist
            var formdata = new FormData()
            formdata.append('service_id',this.state.service_id)

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

          for(var i=0;i<this.state.data.length;i++) {
            // console.log('--------------',response.result[i].data.length)
            var ddd = response.result[i].data.length
            }
          // console.log(response.result[this.state.data.length].data.length)
          console.log(ddd)
     
          for(var i=0;i<ddd;i++) {
           quantity.push(0)
          }
          this.setState({quantitylist:quantity})
     
          console.log(this.state.quantitylist)
         // this.setState({quantitylist:response.result})
        //  var arr1=[];
        //  var arr2 =[];
        //   for(var i=0;i<response.result.length;i++){
        //     arr2.push(response.result[i].data.length)
        //     for(var j=0;j<response.result[i].data.length;j++){
        //       arr1.push({id:response.result[i].data.id,qty:'0'})
        //    }
        //   }
        //   this.setState({partationdata:arr2,qtydata:arr1})
        })
        .catch(error => console.log('error', error));
          }
    

    Call = () => {
      //  this.setState({service_id:2})
      this.setState({toggle : !this.state.toggle,service_id:2})
      this.componentDidMount()
     }

     Callll = () => {
        //  this.setState({service_id:2})
        this.setState({togglee : !this.state.togglee,service_id:3})
        this.componentDidMount()
       }

       onUpdateItem = i => {
        this.setState(state => {
          const list = state.lists.map((item, j) => {
            if (j === i) {
              return item + 1;
            } else {
              return item;
            }
          });
     
          return {
            list,
          };
        });
      };

    onCheck = (item, index) => {
        let items; 
     //   item.data[index].checked = item.data[i].checked ? ! item.data[i].checked : true
         items[index] = item.price
       this.setState({list:items})
        alert(list)
     }

    adddd = (item) => {
       //  let  quantitylist = this.state.quantitylist[0]
       //  this.setState({quantitylist: quantitylist+1})
       //  totalprice = item.price * this.state.quantity
       //  this.setState({ cost: totalprice })
       //  alert(this.state.quantitylist[0])
    //   this.state.quantitylist.push(1)
    //   this.state.quantitylist.push(2)
    //   this.state.quantitylist.push(3)
     //  console.log(this.state.quantitylist)
    }

    acccc = (item) => {
        // let totalprice
        // if (this.state.quantity > 0)
        // this.setState({quantity: this.state.quantity-1})
        // totalprice = item.price * this.state.quantity
        // this.setState({ cost: totalprice })
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

   

   

    renderItemChild = (item,index) => {
        return(
            <View style={{ width: wp('90%'), height: hp('3%'), flexDirection: 'row', borderWidth: 0, borderColor: '#000', marginTop: hp('1%') }}>
               
            <View style={{flex:1.2, flexDirection: 'row', width: wp('65%'), borderWidth: 0,borderRadius:1, borderColor: '#000', alignItems: 'center', paddingStart: hp('1%') }}>
                <CheckBox value={this.state.isChecked[item.id]}  onValueChange={() => this.isIconCheckedOrNot(item,index)}  />
                <Text multiline style={{ alignSelf: 'center', fontSize: hp('1.4%'), paddingRight: 15,fontWeight:'bold', borderWidth: 0,borderRadius:0, borderColor: '#000', }}>{item.title}</Text>
            </View>

            <View style={{flex:0.4,
                flexDirection: 'row', borderColor: '#000',
                marginLeft: hp('1.7%'), borderWidth: 0, borderColor: '#000',
                width: wp('20%'), height: hp('4%'), alignSelf: 'center',
                elevation: 0, marginLeft: hp('2%'), justifyContent: 'center',
                backgroundColor: 'light'
            }}>
                <View style={{flexDirection:'row',marginTop:hp('0.5%')}}>
                <TouchableOpacity onPress={() => this.onUpdateItem2(item.id)}>
                    <View style={{ width: wp('6%'), height: hp('3%'), alignItems: 'center',borderLeftRadius:15, borderWidth: 1,borderRightWidth:0, borderColor: '#000', }}>
                        <Icons name="minus" size={17} />
                    </View>
                </TouchableOpacity>

                <View style={{ width: wp('6%'), height: hp('3%'), alignItems: 'center', borderBottomWidth: 1, borderTopWidth: 1, borderColor: '#000', }}>
          <Text style={{ paddingBottom: hp('0%'), fontSize: 15 }}>{this.state.quantitylist[item.id]}</Text>
                </View>

                <TouchableOpacity onPress={() => this.onUpdateItem1(item.id)}>
                    <View style={{ width: wp('6%'), height: hp('3%'), alignItems: 'center',borderRightRadius:15, borderWidth: 1,borderLeftWidth:0, borderColor: '#000', }}>
                        <Icons name="plus" size={17} />
                    </View>
                </TouchableOpacity>
                </View>
           
            </View>

            <View style={{ flex:0.6,width: wp('5%'), borderWidth: 0, borderColor: '#fff', }}>
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
                <CheckBox value={this.state.togglee} onChange={() => this.Callll()} />

                    <Text style={{ alignSelf: 'center', fontSize: 15, paddingStart: 2 }}>Dry Cleaning</Text>
                </View>
                <View style={{ flexDirection: 'row', width: wp('45%'), borderWidth: 0, borderColor: '#000', alignItems: 'center', paddingStart: hp('4%'), marginTop: hp('1%') }}>
                <CheckBox value={this.state.toggle} onChange={() => this.Call()}
                 />


                    <Text style={{ alignSelf: 'center', fontSize: 15, paddingStart: 2 }}> Ironing</Text>
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