import React, { Component } from 'react'
import { ScrollView, View, Text, StyleSheet, ActivityIndicator } from 'react-native'

import { TreeView } from 'beeshell'

const nestedData = [
    {
        label: '北京',
        id: 'beijing',
        children: [
            { label: '朝阳区', id: 'chaoyangqu', children: [{ label: '百子湾', id: 'baiziwan' }] },
            { label: '海淀区', id: 'haidianqu' }
        ]
    }
]

const flattenedData = [
    { label: '北京', id: 'beijing' },
    { label: '朝阳区', id: 'chaoyangqu', pId: 'beijing' },
    { label: '百子湾', id: 'baiziwan', pId: 'chaoyangqu' },
    { label: '海淀区', id: 'haidianqu', pId: 'beijing' }
]

export default class Tree extends Component<{}, any> {

    constructor (p) {
        super(p)
        this.state = {
        }
    }
    componentDidMount() {
    }
    render () {
        return (
            <ScrollView>
                <View >
                    <TreeView
                        data={nestedData}
                        dataStructureType='nested'
                        onPress={(item) => {
                            console.log(item)
                        }}
                    />
                </View>
            </ScrollView>
        )
    }
}
