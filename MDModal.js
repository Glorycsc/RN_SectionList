/*Example of React Native Tree View*/
import React from 'react';
import {Text, View, ScrollView, StyleSheet, FlatList} from 'react-native';
import { Modal} from 'beeshell/dist/components/Modal';
import {ModalProps} from './beeshell/dist/components/Modal';
import {Button} from './beeshell/dist/components/Button';
import {Input} from './beeshell/dist/components/Input';


export default class MDModal extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            directionIndex: 0,
            pickerVal: '',

        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <ScrollView style={{paddingTop: 30}}>
                <Button
                    style={{ marginTop: 12 }}
                    type='primary'
                    textColorInverse
                    size='sm'
                    onPress={() => {
                        this.modal1.open()
                    }}>
                    基础
                </Button>
                <Modal
                    ref={c => {
                    this.modal1 = c
                }}
                    cancelable>

                    <View
                        style={{
                            width: 400,
                            minHeight: 100,
                            padding: 20,
                            backgroundColor: '#fff',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 4
                        }}>
                        <Text>自定义内容{this.state.foo || ''}</Text>
                    </View>
            </Modal>
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
