import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert, FlatList, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

class TestApi extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      quantitylist: [0],
    };
  }
 
  onUpdateItem1 = i => {
    this.setState(state => {
      const quantitylist = state.quantitylist.map((item, j) => {
        if (j === i) {
          return item + 1;
        } else {
          return item;
        }
      });
       return {
        quantitylist,
      };
    });
  };
 

  onUpdateItem2 = i => {
    this.setState(state => {
      const quantitylist = state.quantitylist.map((item, j) => {
        if (j === i) {
          return item - 1;
        } else {
          return item;
        }
      });
       return {
        quantitylist,
      };
    });
  };


  ApiFetch = () => {
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

      this.setState({quantitylist:response.result})
  
    })
.catch(error => console.log('error', error));
  }


  componentDidMount() {
             this.ApiFetch();
     }

  render() {
    return (
      <View>
       
          {this.state.quantitylist.map((item, index) => (
             <View style={{flexDirection:'row'}}>
             <TouchableOpacity onPress={() => this.onUpdateItem2(index)}>
                    <View style={{ width: wp('6%'), height: hp('3%'), alignItems: 'center',borderLeftRadius:0, borderWidth: 1,borderRightWidth:0, borderColor: '#000', }}>
                        <Icons name="minus" size={17} />
                    </View>
              </TouchableOpacity>
              <View><Text key={item}>{item}</Text></View>
              <TouchableOpacity onPress={() => this.onUpdateItem1(index)}>
              <View style={{ width: wp('6%'), height: hp('3%'), alignItems: 'center',borderLeftRadius:0, borderWidth: 1,borderRightWidth:0, borderColor: '#000', }}>
                  <Icons name="plus" size={17} />
              </View>
          </TouchableOpacity>
             </View>   
            
          ))}
        
      </View>
    );
  }
}
 
export default TestApi;