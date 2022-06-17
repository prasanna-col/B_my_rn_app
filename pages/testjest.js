// import React from 'react';
import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

// const TestJT = () => {
//     return (
//         <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//                 <Text style={styles.sectionTitle}>Hello World!</Text>
//             </View>

//             <Button
//                 title="Press me!"
//                 onPress={() => { }}
//                 testID="pressMeButton"
//                 accessibilityLabel="Press me"
//             />
//         </View>

//     );
// };

export default class TestJS extends Component {

    dataFunc(x) {
        return 5 * x
    }

    render() {
        return (
            <View style={styles.body}>
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Hello World!</Text>
                </View>

                <Button
                    title="Press me!"
                    onPress={() => { }}
                    testID="pressMeButton"
                    accessibilityLabel="Press me"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#ffffff',
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: '#000000',
    },
});

// export default TestJT;