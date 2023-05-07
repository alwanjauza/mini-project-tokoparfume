import { Button } from "antd";
import { Link } from "react-router-dom";

export const MENU_ITEM = [
    {
        label: <Link to='/'>HOME</Link>,
        key: '/'
    },
    {
        label: <Link to='/shop'>SHOP</Link>,
        key: '/shop'
    },
    {
        label: <Link to='/our-story'>OUR STORY</Link>,
        key: '/our-story'
    },
    {
        label: <Link to='/login'>
            <Button
            type="primary"
            onClick={() => {
                localStorage.removeItem('token')
            }}>
                LOGOUT
            </Button>
        </Link>,
        key: '4'
    }
]