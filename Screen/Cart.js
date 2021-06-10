import React, { useEffect, useState } from "react"
import { StyleSheet, ScrollView, View } from "react-native"
import { Text, Divider, Button } from "react-native-elements"
import CardCart from "../Components/Cart/CardCart"

const products = [
    {
        _id: "60b0e5a905412b2814c3dbc7",
        units:1,
        brand: "Svakon",
        categories:  [
          { _id: "60b0e5a905412b2814c3dbc8", name: "sextoy ",},
           { _id: "60b0e5a905412b2814c3dbc9", name: "penises", },
        ],
        comments: [],
        coverImage: "http://tingarciadg.com/wp-content/uploads/2021/05/WinniCockRing.png",
        description: "SVAKOM Winni Wearable Remote Control G-spot Stimulating Vibrating Penis Ring possesses the ability to improve the sex life of both partners. It can prolong man's endurance and stimulate woman's pleasure at the same time. Winni can be used by woman as a clitoris stimulator. By limiting blood flow it will also enhance man's pleasure during masturbation.",
        discount: 10,
        name: "Svakom Winni Cock Ring",
        price: 57,
        productsImages: [{
            _id: "60b0e5a905412b2814c3dbca",
            photo: "http://tingarciadg.com/wp-content/uploads/2021/05/03_600x.png",
          },
        {
             _id: "60b0e5a905412b2814c3dbcb",
            photo: "http://tingarciadg.com/wp-content/uploads/2021/05/Winni_600x.png",
        }]
    },
    {
        _id: "60b0e5a905412b2814c3dbc8",
        units:1,
        brand: "Svakon",
        categories:  [
          { _id: "60b0e5a905412b2814c3dbc8", name: "sextoy ",},
           { _id: "60b0e5a905412b2814c3dbc9", name: "penises", },
        ],
        comments: [],
        coverImage: "http://tingarciadg.com/wp-content/uploads/2021/05/WinniCockRing.png",
        description: "SVAKOM Winni Wearable Remote Control G-spot Stimulating Vibrating Penis Ring possesses the ability to improve the sex life of both partners. It can prolong man's endurance and stimulate woman's pleasure at the same time. Winni can be used by woman as a clitoris stimulator. By limiting blood flow it will also enhance man's pleasure during masturbation.",
        discount: 10,
        name: "Svakom Winni Cock Ring",
        price: 57,
        productsImages: [{
            _id: "60b0e5a905412b2814c3dbca",
            photo: "http://tingarciadg.com/wp-content/uploads/2021/05/03_600x.png",
          },
        {
             _id: "60b0e5a905412b2814c3dbcb",
            photo: "http://tingarciadg.com/wp-content/uploads/2021/05/Winni_600x.png",
        }]
    }
]

const Cart = ({ navigation })=>{
    const [ subtotal, setSubtotal ] = useState()

    useEffect(()=>{
       setSubtotal( products.reduce((a, b)=> ( a.price * a.units ) + ( b.price * b.units ) ) )
    },[ products ])


return <ScrollView contentContainerStyle={ styles.mainContainer } >
        {  products.length 
            ? products.map( product => <CardCart key={ product._id } product={ product } /> )
            :null
        }
        
        <View style={{ marginTop:"5%" }}>
            <Text style={{ marginLeft:"4%",marginBottom:"2.5%" }}>Price Details</Text>
            
            <View style={ styles.totalsContainer }>
                
                <View style={ styles.containers }>
                    <Text style={ styles.textGrey }>Sub Total</Text>
                    <Text style={ styles.textGrey }>€{ subtotal }</Text>
                </View>
                <View style={ styles.containers }>
                    <Text style={ styles.textGrey }>Discount</Text>
                    <Text style={ styles.textGrey }>€65</Text>
                </View>
                <View style={ styles.containers }>
                    <Text style={ styles.textGrey }>Estimated Tax</Text>
                    <Text style={ styles.textGrey }>€55</Text>
                </View>
                <View style={ styles.containers }>
                    <Text style={ styles.textGrey }>Delivery</Text>
                    <Text style={ styles.textGrey }>€22</Text>
                </View>

                <Divider />

                <View style={ styles.totalContainer }>
                    <Text style={ styles.textbold } >Total Payable</Text>
                    <Text style={ styles.textbold } >€555</Text>
                </View>

            </View>

            <View style={ styles.buttonsContainer }>
                <Button buttonStyle={ styles.buttons } onPress={ ()=> navigation.goBack() } type="outline" title="cancel" />
                <Button buttonStyle={ styles.buttons } onPress={ ()=> navigate('Profile', { props: "props" }) } title="next" />
            </View>

        </View>

   </ScrollView>
}

export default Cart

const styles = StyleSheet.create({
    mainContainer:{
        margin:"4%",
        paddingBottom:"10%"
    },
    totalsContainer:{
        borderColor:"#CDCDCD",
        borderWidth:1.5,
        borderRadius:7
    },
    containers:{
        flexDirection:"row",
        justifyContent:"space-between",
        margin:"3.5%"
    },
    totalContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:"4%",
        marginBottom:"4%",
        marginLeft:"10%",
        marginRight:"10%"
    },
    textbold:{
        fontWeight:"bold"
    },
    buttonsContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    buttons:{
        marginTop:"4%",
        marginBottom:"2%",  
        width:"87%",
        borderRadius:7
    },
    textGrey:{
        color:"#5B5A5A"
    },
})