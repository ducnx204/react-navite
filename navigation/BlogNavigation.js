import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import EditCategoryScreen from "../screens/EditCategoryScreen";
import InsertCategoryScreen from "../screens/InsertCategoryScreen";
import ListCategoryScreen from "../screens/ListCategoryScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ListBlogScreen from "../screens/ListBlogScreen";
import EditBlogScreen from "../screens/EditBlogScreen";
import InsertBlogScreen from "../screens/InsertBlogScreen";


const Tab = createMaterialTopTabNavigator();

function MyTabs() {
	return (

		<Tab.Navigator initialRouteName="BlogStackNavigator"
			screenOptions={{
				tabBarActiveTintColor: 'darkorange',
				tabBarLabelStyle: { fontSize: 18, fontWeight: 'bold' },
				tabBarStyle: { backgroundColor: '#fff' },
			}}
		>
			<Tab.Screen
				name="BlogStackNavigator"
				component={BlogStackNavigator}
				options={{ tabBarLabel: 'Danh mục' }}
			/>
			<Tab.Screen
				name="BlogNewNavigator"
				component={BlogNewNavigator}
				options={{ tabBarLabel: 'Bài viết' }}
			/>
		</Tab.Navigator>
	);
}

const Stack = createStackNavigator();

function BlogNewNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="ListBlogScreen" component={ListBlogScreen}
				options={{ headerShown: false }} />
			{/* options={{ headerLeft: null, title: 'Danh sách bài viết', headerTintColor: "orange" }} /> */}
			{/* ẩn nút back để quay lại */}
			<Stack.Screen name="InsertBlogScreen" component={InsertBlogScreen}
				options={{ headerShown: false }} />
			<Stack.Screen name="EditBlogScreen" component={EditBlogScreen}
				options={{ headerShown: false }} />
		</Stack.Navigator>
	);
}
function BlogStackNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="ListCategoryScreen" component={ListCategoryScreen} options={{ headerShown: false }} />
			{/* options={{ headerLeft: null, title: 'Danh sách danh mục', headerTintColor: "orange" }} /> */}
			{/* ẩn nút back để quay lại */}
			<Stack.Screen name="InsertCategoryScreen" component={InsertCategoryScreen}
				options={{ headerShown: false }} />
			<Stack.Screen name="EditCategoryScreen" component={EditCategoryScreen}
				options={{ headerShown: false }} />
		</Stack.Navigator>
	);
}
function AuthNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="LoginScreen" component={LoginScreen}
				options={{ headerShown: false }} />
			{/* <Stack.Screen name="BlogStackNavigator" component={BlogStackNavigator}
				options={{ headerShown: false, title:""}} /> */}
			<Stack.Screen name="MyTabs" component={MyTabs}
				options={{ headerShown: false }} />
			{/* ẩn header ở BlogStack */}
			<Stack.Screen name="RegisterScreen" component={RegisterScreen}
				options={{headerTitleAlign:"center", title: 'Đăng ký', headerTintColor: "green" }} />
		</Stack.Navigator>
	);
}

const BlogNavigation = () => {
	return (
		<NavigationContainer>
			<AuthNavigator />
		</NavigationContainer>
	);
};

export default BlogNavigation;