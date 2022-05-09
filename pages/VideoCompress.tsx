import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text, FlatList, Image as RNImg, Dimensions, TouchableOpacity } from 'react-native';
import { Colors } from './assets/Colors';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const Style_path = require('./assets/Styles');
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { Video, Image } from 'react-native-compressor';
import { ImagePicker, launchCamera, launchImageLibrary } from 'react-native-image-picker';

// import VideoPlayer from "react-native-video-player"
import { VideoPlayer, Trimmer } from 'react-native-video-processing';
const VideoCompress = ({ navigation }) => {
    const [userName, setUserName] = useState('AboutReact');
    // const [backgroundMode, setBackgroundMode] = useState(true)
    const [CompressingProgress, setCompressingProgress] = useState({})

    const [filePath, setFilePath] = useState("");
    const [imgFilePath, setImgFilePath] = useState("");

    useEffect(() => {
        // compressVideo()
    }, [])


    const chooseImg = () => {
        launchImageLibrary({ mediaType: 'photo', includeBase64: true }, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                console.log("response file url ", response.assets[0].uri)
                compressImage(response.assets[0].uri)
            }
        });
    };

    const compressImage = async (data) => {
        const result = await Image.compress(data, {
            compressionMethod: 'auto',
        });

        console.log("result desired img link to upload -->", result)
        setImgFilePath(result)
    }

    const chooseVideo = () => {
        launchImageLibrary({ mediaType: 'video', includeBase64: true }, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                console.log("response video file url ", response)
                // setFilePath(response.assets[0].uri)
                compressVideo(response.assets[0].uri)

            }
        });
    };

    const compressVideo = async (data) => {
        // console.log("hi")
        const result = await Video.compress(
            data,
            {
                compressionMethod: 'auto',
                minimumFileSizeForCompress: 16,   // consider in mb eg: 16 means 16 mb 

                // compressionMethod: 'manual',
                // minimumFileSizeForCompress: 16,
                maxSize: 1000,
            },
            (progress) => {
                // if (backgroundMode) {
                console.log('Compression Progress: ', progress);
                // } else {
                //     setCompressingProgress(progress);
                // }
            }
        )

        await console.log("result desired video link to upload -->", result)
        await setFilePath(result)
        await console.log("filePath -->", filePath)
    }







    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
            <View >
                <Text >Video Compress</Text>
                <TouchableOpacity style={{ backgroundColor: "#a3a3a3", height: 20, width: 100, marginTop: 30 }} onPress={() => {
                    chooseImg()
                }}>
                    <Text>choose image</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ backgroundColor: "#a3a3a3", height: 20, width: 100, marginTop: 30 }} onPress={() => {
                    chooseVideo()
                }}>
                    <Text>choose video</Text>
                </TouchableOpacity>
                {/* <View style={{ backgroundColor: "red", padding: 5, width: "100%" }}>
                    {filePath != "" &&
                        (
                            <>
                                <Text> Video : {filePath}</Text>
                                <VideoPlayer
                                    // video={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
                                    video={{ uri: filePath }}
                                    // video={{} }
                                    videoWidth={1600}
                                    videoHeight={900}
                                    thumbnail={{ uri: 'https://img.freepik.com/free-vector/abstract-website-banner-with-modern-shapes_1361-1738.jpg?w=2000' }}
                                />
                            </>
                        )

                    }

                </View> */}
                <View style={{ backgroundColor: "red", padding: 5, width: "100%" }}>
                    {filePath != "" &&
                        (
                            <>
                                <Text> Video : {filePath}</Text>
                                <VideoPlayer
                                    // ref={ref => this.videoPlayerRef = ref}
                                    startTime={30}  // seconds
                                    endTime={120}   // seconds
                                    play={true}     // default false
                                    replay={true}   // should player play video again if it's ended
                                    rotate={true}   // use this prop to rotate video if it captured in landscape mode iOS only
                                    source={filePath}
                                    playerWidth={300} // iOS only
                                    playerHeight={500} // iOS only
                                    // style={{ backgroundColor : 'black' }}
                                    resizeMode={VideoPlayer.Constants.resizeMode.CONTAIN}
                                    onChange={({ nativeEvent }) => console.log({ nativeEvent })} // get Current time on every second
                                />
                            </>
                        )

                    }
                </View>


                <View style={{ backgroundColor: "green", padding: 5, width: "100%" }}>
                    {imgFilePath != "" &&
                        (
                            <>
                                <Text> Image : {imgFilePath}</Text>
                                <RNImg source={{ uri: imgFilePath }} style={{ height: 100, width: 100 }} />
                            </>
                        )

                    }

                </View>

            </View>
        </SafeAreaView>
    );
};

export default VideoCompress;
