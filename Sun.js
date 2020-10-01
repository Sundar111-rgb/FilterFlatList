import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert,FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

class Washing extends Component {

      constructor() {
          super()

          this.state = {
              data:[  
                {id:1,key: 'Android',price:10,totalprice:0},
                {id:2,key: 'iOS',price:10,totalprice:0},
                 {id:3,key: 'Java',price:10,totalprice:0},
                 {id:4,key: 'Swift',price:10,totalprice:0},  
                ],
              name:'',
              num:0,
              cost:0,
              price:234,
          }
        }
     
         componentDidMount() {

            formdata = new FormData()
            formdata.append('service_id',1)
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: formdata
            };
            fetch('http://webmobril.org/dev/goodwash/api/Mobileapi/getservicedetail', requestOptions)
                .then(response => response.json())
                .then(data => this.setState({ name:data }));
                console.log(this.state.name)
         }
          
          adddd = (item) => {
            
            //  this.setState({cost : item.price})
            item.totalprice = item.totalprice + item.price
            //  this.price()
          //  this.setState({cost : item.totalprice})
            }

            acccc = (item) => {
                // if(this.state.num>0){
                // this.setState({num: this.state.num - 1})
                // this.price()
                // }
                item.totalprice = item.totalprice - item.price


              }

              price = () => {
                  
                  this.setState({cost : this.state.price*this.state.num })
                  if(this.state.num==1)
                  {
                      this.setState({cost:234})
                  }
              }


      
    
    render() {
        return (
           <View style={{flex:1,backgroundColor:'lightgrey' }}>

               <View style={{width:wp('90%'),height:hp('30%'),alignSelf:'center',elevation:10,marginTop:hp('10%'),backgroundColor:'#fff'}}>
                   <View style={{width:wp('90%'),height:hp('3%'),flexDirection:'row',justifyContent:'space-between',}}>
                       <Text>Garment</Text>
                       <Text style={{paddingLeft:hp('16%')}}>Quantity</Text>
                       <Text>Price</Text>
                   </View>
              <FlatList  
                    data={this.state.data}  
                        keyExtractor={item => item.id}
                    renderItem={({item}) =>  {
                        return(
                    
                   <View style={{width:wp('90%'), height:hp('3.5%'),justifyContent:'space-between',flexDirection:'row',padding:0}}>
                       <Text>{item.key}</Text>
<View style={{flexDirection:'row',borderColor:'#000',marginLeft:hp('16%'),borderWidth:1,width:wp('17%'),height:hp('3%'),elevation:10,marginTop:hp('0%'),backgroundColor:'light'}}>
               
                    <TouchableOpacity onPress={(item) =>this.acccc(item)}>
                        <View>
                            <Text style={{width:wp('5%'),height:hp('2.3%'),paddingLeft:3,paddingTop:1}}>
                                <Icons name="minus" size={15} />
                            </Text>
                        </View>
                    </TouchableOpacity>
    
                <View>
                <Text style={{width:wp('5%'),height:hp('2.3%'),paddingLeft:7,paddingBottom:0,fontSize:12}}>{this.state.num}</Text>
                </View>
    
                    <TouchableOpacity  onPress={(item) =>this.adddd(item)}>
                        <View>
                            <Text style={{width:wp('5%'),height:hp('2.3%'),paddingLeft:3,paddingTop:1,fontSize:12}}>
                                <Icons name="plus" size={15} />
                            </Text>
                        </View>
                    </TouchableOpacity>
                   </View>
                    <Text>{item.totalprice}</Text>
                   </View>
                        )}
                  }   
                  />  
               </View>
               </View>
        );
    }
}

export default Washing;
