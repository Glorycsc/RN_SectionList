/*Example of React Native Tree View*/
import React from 'react';
//import React
import {Text, View, ScrollView} from 'react-native';
//import Basic React Native components
import TreeView from 'react-native-final-tree-view';
//import library for the TreeView
import {Button, Popover} from 'beeshell';

//Dummy data for the Tree View
const state = {
    data: [
        {
            id: 'Parent1',
            name: 'Parent1',
            children: [
                {
                    id: 'child1',
                    name: 'child1',
                    children: [
                        {
                            id: 'child11',
                            name: 'child11',
                            children: [
                                {
                                    id: 'child111',
                                    name: 'child111',
                                },
                            ],
                        },
                        {
                            id: 'child12',
                            name: 'child12',
                        },
                    ],
                },
            ],
        },
        {
            id: 'Parent2',
            name: 'Parent2',
            children: [
                {
                    id: 'child2',
                    name: 'child2',
                    children: [
                        {
                            id: 'child21',
                            name: 'child21',
                        },
                        {
                            id: 'child22',
                            name: 'child22',
                        },
                    ],
                },
            ],
        },
    ],

    data2: {
        'id': 1,
        'name': 'ABB Motion',
        'isVisiable': true,
        'type': 1,
        'subType': 1,
        'children': [
            {
                'id': 7,
                'name': 'CP_测试_Y',
                'isVisiable': true,
                'type': 2,
                'subType': 2,
                'children': [
                    {
                        'id': 5,
                        'name': 'EU_水泥厂_Y',
                        'isVisiable': true,
                        'type': 3,
                        'subType': 2,
                        'children': [],
                    },
                    {
                        'id': 9,
                        'name': '测试公司',
                        'isVisiable': true,
                        'type': 3,
                        'subType': 2,
                        'children': [],
                    },
                    {
                        'id': 6,
                        'name': '测试name',
                        'isVisiable': true,
                        'type': 3,
                        'subType': 1,
                        'children': [],
                    },

                    {
                        'id': 5,
                        'name': 'EU_水泥厂_Y',
                        'isVisiable': true,
                        'type': 3,
                        'subType': 2,
                        'children': [],
                    },
                    {
                        'id': 9,
                        'name': '测试公司',
                        'isVisiable': true,
                        'type': 3,
                        'subType': 2,
                        'children': [],
                    },
                    {
                        'id': 6,
                        'name': '测试name',
                        'isVisiable': true,
                        'type': 3,
                        'subType': 1,
                        'children': [],
                    },
                    {
                        'id': 19,
                        'name': '华夏科技',
                        'isVisiable': true,
                        'type': 3,
                        'subType': 2,
                        'children': [],
                    },
                    {
                        'id': 5,
                        'name': 'EU_水泥厂_Y',
                        'isVisiable': true,
                        'type': 3,
                        'subType': 2,
                        'children': [],
                    },
                    {
                        'id': 9,
                        'name': '测试公司',
                        'isVisiable': true,
                        'type': 3,
                        'subType': 2,
                        'children': [],
                    },
                    {
                        'id': 6,
                        'name': '测试name',
                        'isVisiable': true,
                        'type': 3,
                        'subType': 1,
                        'children': [],
                    },
                    {
                        'id': 19,
                        'name': '华夏科技',
                        'isVisiable': true,
                        'type': 3,
                        'subType': 2,
                        'children': [],
                    },
                    {
                        'id': 5,
                        'name': 'EU_水泥厂_Y',
                        'isVisiable': true,
                        'type': 3,
                        'subType': 2,
                        'children': [],
                    },
                    {
                        'id': 9,
                        'name': '测试公司',
                        'isVisiable': true,
                        'type': 3,
                        'subType': 2,
                        'children': [],
                    },


                ],
            },
            {
                'id': 8,
                'name': 'CP_测试01_Y',
                'isVisiable': true,
                'type': 2,
                'subType': 2,
                'children': [],
            },
            {
                'id': 10,
                'name': '金算盘',
                'isVisiable': true,
                'type': 3,
                'subType': 2,
                'children': [],
            },
            {
                'id': 11,
                'name': '测试创建组织后刷新页面',
                'isVisiable': true,
                'type': 3,
                'subType': 2,
                'children': [],
            },
            {
                'id': 12,
                'name': '测试cp',
                'isVisiable': true,
                'type': 2,
                'subType': 2,
                'children': [],
            },
            {
                'id': 13,
                'name': '测试abb授权',
                'isVisiable': true,
                'type': 3,
                'subType': 2,
                'children': [],
            },
            {
                'id': 14,
                'name': 'EU_Test_0405',
                'isVisiable': true,
                'type': 3,
                'subType': 2,
                'children': [],
            },
            {
                'id': 15,
                'name': 'CP_测试添加CP',
                'isVisiable': true,
                'type': 2,
                'subType': 2,
                'children': [],
            },
            {
                'id': 16,
                'name': 'sdfji',
                'isVisiable': true,
                'type': 3,
                'subType': 2,
                'children': [],
            },
            {
                'id': 17,
                'name': 'sdfji',
                'isVisiable': true,
                'type': 3,
                'subType': 2,
                'children': [],
            },
            {
                'id': 18,
                'name': '纵横天下',
                'isVisiable': true,
                'type': 3,
                'subType': 2,
                'children': [],
            },
            {
                'id': 2,
                'name': 'Ghost CP',
                'isVisiable': true,
                'type': 2,
                'subType': 1,
                'children': [],
            },
            {
                'id': 3,
                'name': '测试组织',
                'isVisiable': true,
                'type': 3,
                'subType': 1,
                'children': [],
            },
            {
                'id': 20,
                'name': '吉利汽车',
                'isVisiable': true,
                'type': 3,
                'subType': 2,
                'children': [],
            },
            {
                'id': 21,
                'name': '测试创建后clean',
                'isVisiable': true,
                'type': 3,
                'subType': 2,
                'children': [],
            },
        ],
    },
};

function getIndicator(isExpanded, hasChildrenNodes, level) {
    console.log('[][][]' + level);
    if (!hasChildrenNodes) {
        return '*';
    } else if (isExpanded) {
        return '-';
    } else {
        return '+';
    }
}

function renderMuiltItem(isExpanded, hasChildrenNodes, level, node) {//目前最深为2层
    if (level === 0) {
        return (
            <Text>{node.name}</Text>
        );
    } else {
        return (
            <Text style={{backgroundColor: 'cyan', marginLeft: 30}}>{node.name}</Text>
        );
    }
}


function FinalTree() {
    return (
        <ScrollView>

            <Popover
                ref={c => {
                    this._popoverA = c;
                }}
            >
               nihaohnihao
            </Popover>

            <Button type="primary" size="md"
                    onPress={() => {
                        this._popoverA.open();
                    }}
            >
                <View>
                    <Text>自定义</Text>
                    <Text>支持组件</Text>
                </View>
            </Button>


            <TreeView
                style={{backgroundColor: 'red'}}
                data={state.data2.children}
                renderNode={({node, level, isExpanded, hasChildrenNodes}) => {
                    return (
                        <View>
                            {renderMuiltItem(isExpanded, hasChildrenNodes, level, node)}
                        </View>
                    );
                }}
            />
        </ScrollView>
    );

}

export default FinalTree; //可以到处一个方法, 一切都是function
