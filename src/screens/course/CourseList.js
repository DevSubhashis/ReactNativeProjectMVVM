import React from 'react';
import { View, Text, FlatList, Image, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem } from './CartSlice';

const Header = () => {
    const addedItems = useSelector(state => state.cart);
    return (
        <View style={hstyles.header}>
            <Text style={hstyles.title}>Course List</Text>
            <View style={hstyles.cartContainer}>
                <Icon name="cart-outline" size={30} color="#fff" />
                <Text style={hstyles.cartCount}>{addedItems.length}</Text>
            </View>
        </View>
    );
};

const hstyles = StyleSheet.create({
    header: {
        height: 60,
        backgroundColor: '#6200ee',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
    title: {
        color: '#fff',
        fontSize: 20,
    },
    cartContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cartCount: {
        color: '#fff',
        marginLeft: 5,
        fontSize: 18,
    },
});


const courses = [
    { id: 1, name: 'Course 1', price: 100, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Course 2', price: 200, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Course 3', price: 300, image: 'https://via.placeholder.com/150' },
];

function CourseList() {
    const dispatch = useDispatch();
  
    const addToCart = (item) => {
       dispatch(addCartItem(item))
    }

    const renderItem = ({ item }) => (
        <View style={styles.courseContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.courseDetails}>
                <Text style={styles.courseName}>{item.name}</Text>
                <Text style={styles.coursePrice}>${item.price}</Text>
                <Button title="Add to Cart" onPress={()=> addToCart(item)} />
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Header />
            <FlatList
                data={courses}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.courseList}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    courseList: {
        padding: 10,
    },
    courseContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 2,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 5,
    },
    courseDetails: {
        marginLeft: 10,
        flex: 1,
        justifyContent: 'space-between',
    },
    courseName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    coursePrice: {
        fontSize: 16,
        color: '#6200ee',
    },
});

export default CourseList;