import React, {Component} from 'react'
import { signOut } from '../services/Helper';


export default class Logout extends Component {

    componentDidMount() {
        signOut();
        return {};
    }

    render() { 
        return null; 
    }
}
