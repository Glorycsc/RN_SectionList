/*Example of React Native Tree View*/
import React from 'react';
import {Text, View, ScrollView, StyleSheet, FlatList} from 'react-native';
import { Picker} from './beeshell/dist/components/Picker';
import {Tip} from './beeshell/dist/components/Tip';
import {Button} from './beeshell/dist/components/Button';


export default class Pickers extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            directionIndex: 0,
            pickerVal: '',
            pickerData: [
                {key: 'Devin'},
                {key: 'Dan'},
                {key: 'Dominic'},
                {key: 'Jackson'},
                {key: 'James'},
                {key: 'Joel'},
                {key: 'John'},
                {key: 'Jillian'},
                {key: 'Jimmy'},
                {key: 'Julie'},
            ],
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
                    // label={this.state.pickerVal === '' ?
                    //     this.state.pickerData===[]?'':this.state.pickerData[0].key
                    //     : this.state.pickerVal}
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
                            height: 500,
                            borderTopColor: '#ddd',
                            borderTopWidth: StyleSheet.hairlineWidth,
                        }}>
                        <Text>内容区</Text>
                        <FlatList
                            data={this.state.pickerData}
                            renderItem={({item}) => <Text
                                onPress={() => {
                                    this._picker_.close();
                                    this.setState({
                                        pickerVal: item.key,
                                    });
                                }}
                                style={styles.item}>{item.key}</Text>}
                        />
                    </View>
                </Picker>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});
