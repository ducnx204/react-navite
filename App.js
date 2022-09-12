import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import BlogNavigation from './navigation/BlogNavigation';
import authReducer from './store/reducers/authReducer';
import blogReducers from './store/reducers/blogReducers';
import categoryReducers from './store/reducers/categoryReducers';

const rootReducer = combineReducers({
  categories: categoryReducers,
  auths: authReducer,
  blogs: blogReducers,
})

const store = createStore(rootReducer)

export default function App() {
  return (
    <Provider store={store}>
      <BlogNavigation></BlogNavigation>

    </Provider>
  );
}

const styles = StyleSheet.create({
  
});
