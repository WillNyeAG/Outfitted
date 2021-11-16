import React, {Component} from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View, TextInput,  Alert, ActivityIndicator } from 'react-native';
import firebase from '../../firebase';
import NavBar from '../common/navbar';
import { InfoRow, Body, Icon, Title1, Title2, Button, Collection, SegmentedControl, RowItem, TabBar } from 'react-native-ios-kit';
import { Image, Card, ListItem, Container } from 'react-native-elements';

export default class ItemView extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            isLoading: false,
            imageURI: null
        }
    }

    componentDidMount() {
        this.getImageFromStorage("test");
    }

    updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    getImageFromStorage(imageName) {
        let imageRef = firebase.storage().ref('/' + imageName);
        imageRef
          .getDownloadURL()
          .then((url) => {
            //from url you can fetched the uploaded image easily
            this.setState({ imageURI: url });
          })
          .catch((e) => console.log('getting downloadURL of image error => ', e));
    }

    render() {
        return(
            <View style={styles.container}>
                <Title1>Megan's shirt</Title1>
                <Image
                        style={{ marginVertical: 15, width: 350, height: 350, alignSelf: 'center' }}
                        source={{ uri: this.state.imageURI }}
                        PlaceholderContent={<ActivityIndicator />}/>
                <View style={{}}>
                    <InfoRow icon="pencil-outline" title="Description" info="placeholder"/>
                </View>

            </View>
        );
    }
}
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    infoRow: {
        width: 'inherit'
    }
})