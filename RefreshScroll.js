import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Dimensions,
    RefreshControl,
    StatusBar,
    SafeAreaView,
} from 'react-native'
const width = Dimensions.get('window').width;


export  default  class RefreshScroll extends Component {
    constructor(){
        super();
        this.state = {
            rowDataArr: Array.from( new Array(30)).map( (value, index) => ({
                title: '初始化数据' + index
            })),
            isRefreshing: false,
            loaded: 0,
        }
    }

    onRefreshHandle() {
        this.setState({
            isRefreshing: true
        })
        setTimeout(() => {
            let newDataArr = Array.from( new Array(5)).map( (value, index) => ({
                title: '我是下拉数据' + (index + this.state.loaded)
            })).concat( this.state.rowDataArr );
            this.setState({
                rowDataArr: newDataArr,
                isRefreshing: false,
                loaded: this.state.loaded + 5
            })
        }, 2000);
    }

    render() {
        const rowArr = this.state.rowDataArr.map((row, index) => (<Row data={row} key={index}></Row>))
        return (
            <>
                <StatusBar barStyle="dark-content"></StatusBar>
                <SafeAreaView>

                    <ScrollView
                        refreshControl = {
                            <RefreshControl
                                refreshing={ this.state.isRefreshing }
                                onRefresh = {() => this.onRefreshHandle()}
                            />
                        }
                    >
                        {rowArr}
                    </ScrollView>
                </SafeAreaView>
            </>
        )
    }
}

const styles = StyleSheet.create({

})


class Row extends Component {
    render() {
        return(
            <View style={{
                width: width,
                height: 40,
                borderBottomColor: 'red',
                borderBottomWidth: 1,
                justifyContent: 'center'
            }}>
                <Text>{this.props.data.title}</Text>
            </View>
        )
    }
}


