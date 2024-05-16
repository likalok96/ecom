import React from 'react'
import { Route } from 'react-router-dom';
import Account from '../Account/Account';
import Login from '../Account/Login/Login';
import Order from '../Account/Order/Order';
import OrderDetail from '../Account/Order/OrderDetail';
import Profile from '../Account/Profile/Profile';
import Password from '../Account/Password/Password';

const AccountRouter = () => {
  return (
    <Route path='/account'>
        <Route path='login' element={<Login />} />
        <Route path='' element={<Account />} />
        <Route path='order' element={<Order />} />
        <Route path='order/:order_id' element={<OrderDetail />} />
        <Route path='profile' element={<Profile />} />
        <Route path='password' element={<Password />} />
    </Route>
  )
}

export default AccountRouter