import React, { Component } from 'react';
import Nav from "../components/Nav/Nav";
import Layout from "../components/Layouts/layout"
import Status from "../components/Status/Status"
import "./Stalk.scss";
import Button from '../components/Button/Button';


class Stalk extends Component {
    state = {
        users: []
    }

    componentDidMount = () => {
        this.fetchData();

    }

    addFriend = (e) => {
        let handle = document.querySelector('#handle').value;

        let friends = localStorage.getItem('friends');
        friends = JSON.parse(friends);
        friends = friends || [];
        friends.push(handle);

        friends = Array.from(new Set(friends));

        localStorage.setItem("friends", JSON.stringify(friends));

        console.log(friends);

        let btn = e.target;
        btn.innerHTML = 'Added';
        setTimeout(() => {
            btn.innerHTML = 'Add Friend';
        }, 1000);

        document.querySelector('#handle').value = '';

    }

    clearStorage = (e) => {
        localStorage.clear();
        let btn = e.target;
        btn.innerHTML = 'Cleared Successfully.';
        setTimeout(() => {
            btn.innerHTML = 'Add Friends to see their status';
        }, 1000);

    }

    fetchData() {
        let friends = localStorage.getItem('friends');
        friends = JSON.parse(friends);
        friends = friends || [];
        friends.forEach(async (friend) => {
            try {
                let res_user = await fetch(`https://codeforces.com/api/user.info?handles=${friend}`);
                let data_user = await res_user.json();
                let user = data_user.result[0];
                let users = [...this.state.users];
                users.push(user);
                this.setState({ users });
            }
            catch (err) {
                console.log("Error : " + err);
                this.setState({ error: err });
            }
        });
    }

    render() {
        let friends = [];
        this.state.users.forEach(user => {

            friends.push(
                <div key={user.handle} className="list_user">
                    <div className="name">{user.handle}</div>
                    <div className="on">
                        <Status date={new Date(user.lastOnlineTimeSeconds * 1000)} />
                    </div>
                </div>
            )
        })
        return (
            <Layout>
                <div className="container">
                    <header>
                        <input type="text" id="handle" />
                        <Button value="Add Friend" onClick={this.addFriend} />
                    </header>
                    <div className="list_user head">
                        <div className="name">User</div>
                        <div className="on">Last Online</div>
                    </div>

                    {friends}

                    <footer>
                        <div className="link" onClick={this.clearStorage}>clear List</div>
                    </footer>
                </div>
            </Layout>

        );
    }
}

export default Stalk;