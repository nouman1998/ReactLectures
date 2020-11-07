import React , { Component } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';

const value = 123;

class FirstScreen extends Component{

    constructor(props){
        super(props);
        this.state = ({Count:0});
    }

    render(){
        return(
            <View style={{flex:3, justifyContent:'center'}}>
                <Text style={{flex:1}}> Simple Text</Text> 
                <TouchableOpacity  style={{flex:1}} onPress={()=> this.setState({Count:this.state.Count+1})}>
                     <Text style={{flex:1,marginBottom:40}}> Count Value {this.state.Count} </Text>  
                      
                </TouchableOpacity>
                <TouchableOpacity  style={{flex:1}} onPress={()=> this.resetCount()}>
                            <Text style={{margin:40}}>Reset Value </Text>  
                        </TouchableOpacity>
            </View>
        )
    }

    componentDidMount(){

    }

    componentWillUnmount(){

    }

    resetCount = ()=> {
        this.setState({Count:0})
      
    }

    increaseCount = ()=>{
        this.setState({Count:this.state.Count+1})
    }

}

export default FirstScreen;