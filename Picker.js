/*Example of React Native Tree View*/
import React from 'react';
//import React
import {Text, View, ScrollView,StyleSheet} from 'react-native';
//import Basic React Native components
import TreeView from 'react-native-final-tree-view';
//import library for the TreeView
import {Button, Picker, Tip} from 'beeshell';


export default class Pickers extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            directionIndex: 0,
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <ScrollView style={{paddingTop: 30}}>

                <Button
                    style={{marginTop: 12}}
                    ref={c => {
                        this.btnA = c;
                    }}
                    size='sm'
                    onPress={() => {

                        this._picker_.open().catch((e) => {
                            console.log(e);
                        });

                    }}>
                    基础
                </Button>

                <Picker
                    ref={(c) => {
                        this._picker_ = c;
                    }}
                    label='甜点饮品'
                    disabled={false}
                    cancelable={true}
                    onToggle={(active) => {
                        console.log(active);
                    }}>

                    <View
                        style={{
                            backgroundColor: '#fff',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 100,
                            borderTopColor: '#ddd',
                            borderTopWidth: StyleSheet.hairlineWidth,
                        }}>
                        <Text>内容区</Text>
                    </View>
                </Picker>
            </ScrollView>
        );
    }
}

