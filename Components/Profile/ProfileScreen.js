import React ,{Component} from 'react';
import {Alert,View ,TouchableHighlight, Text ,Button ,StyleSheet ,Image, Platform, Linking,TouchableOpacity, Modal} from 'react-native'
class ProfileScreen extends Component {
    state={

    }
    
    render(){

        call=()=>{
            let phoneNumber=''
            if (Platform.OS==="android")
               {phoneNumber="tel:${0777522486}";}
                else {
                phoneNumber="telprompt:${0777522486}";
            }
            Linking.openURL(phoneNumber)
        }
        return(
        <View>
            <View style={styles.div1}>
                
             <Image 
              source={{ uri: 'https://png.pngtree.com/element_our/20190604/ourlarge/pngtree-image-character-boy-brunette-half-body-image_1483116.jpg'}} 
              style={{width: 140, height: 140, borderRadius: 400/ 2 ,alignSelf:"center", marginTop:"5%" }} 
             />
             <Text style={styles.text1}>Mustafa</Text>
             <View style={{flexDirection:"row", marginLeft:"30%"}}>
               <Image 
                       source={{ uri: 'https://www.pnglot.com/pngfile/detail/107-1074462_telephone-phone-icon-telephone-icon-yellow-png.png'}} 
                       style={{width: 35, height: 35, borderRadius: 600/ 3 ,alignSelf:"auto", marginTop:"5%", marginRight:"1%" }} 
                    />
                    <TouchableOpacity onPress={this.call}>
               <Text style={styles.text1}  >0777522486</Text>
           </TouchableOpacity> 
           </View>

            </View>

            <View style={styles.div2}>
              <View style={styles.f1}>
                <View style={{width:150 ,marginLeft:40,marginTop:10, flexDirection:"row-reverse", }}>
                    <Text style={{marginTop:"18%"}}>الموقع</Text>
                    <Image 
                       source={{ uri: 'https://png.pngtree.com/element_our/20190529/ourlarge/pngtree-company-ppt-positioning-icon-png-free-map-image_1187976.jpg'}} 
                       style={{width: 50, height: 50, borderRadius: 400/ 2 ,alignSelf:"auto", marginTop:"5%", marginRight:"18%" }} 
                    />
                </View>


                <View style={{width:150,marginRight:25,marginTop:10}}>
                  <Text>بالساعة</Text>
                  <Image 
                     source={{ uri: 'https://image.winudf.com/v2/image1/aG93LnRvLm1ha2UubW9uZXkudXNfaWNvbl8xNTQ5OTA0ODY3XzA0MA/icon.png?w=170&fakeurl=1'}} 
                     style={{width: 50, height: 50, borderRadius: 400/ 2 ,alignSelf:"auto", marginTop:"5%" }} 
                  />
                </View>

             </View>


             <View style={styles.f2}>
               <View style={{width:150 , marginLeft:40 ,marginTop:10}}>
                 <Text>الخبرة</Text>
                 <Image 
                    source={{ uri: 'https://st2.depositphotos.com/7107694/10595/v/950/depositphotos_105958840-stock-illustration-gear-integration-flat-vector-symbol.jpg'}} 
                    style={{width: 50, height: 50, borderRadius: 400/ 2 ,alignSelf:"auto", marginTop:"5%" }} 
                  />
               </View>

               <View style={{width:150,marginRight:25,marginTop:10}}>
                 <Text>المهنة</Text>
                 <Image 
                    source={{ uri: 'https://png.pngtree.com/png-vector/20190104/ourlarge/pngtree-builddesigndeveloptooltools-flat-line-filled-icon--beaut-png-image_310581.jpg'}} 
                    style={{width: 50, height: 50, borderRadius: 400/ 2 ,alignSelf:"auto", marginTop:"5%" }} 
                  />
                </View>
             </View>
            </View>
            

                 <TouchableOpacity style={styles.div3} >
                 <Text style={{alignSelf:"center",color:"lightgreen",fontSize:20}}>تعديل</Text>
                 </TouchableOpacity>
            
              
              
         </View>
        )
    }
}
const styles = StyleSheet.create({
    div1:{
        width:'100%',
        height:'50%',
        marginTop:'6%',
        backgroundColor:"#FFE346",
        color:"black",
        
        

    },
    div2:{
        borderRadius:25,
        borderColor:"yellow",
        backgroundColor:"#FF7F90",
        alignSelf:"center",
        width:'90%',
        height:"33%",
        marginTop:"8%",
        borderWidth:4,
        display:"flex",
        

       

    },
    text1:{
        alignSelf:"center",
        marginTop:"8%",
        color:"white",
        fontFamily:"Roboto",
        fontSize:20
        

    },
    div3:{
        alignSelf:"center",
        width:120,
        marginTop:"3%",
        backgroundColor:"#FF7F90",
        borderRadius:7,
        height:30

    
    },
    f1:{
        flexDirection:"row",
    
    },
    f2:{
        flexDirection:"row",
    }
    
    
})

export default ProfileScreen;
