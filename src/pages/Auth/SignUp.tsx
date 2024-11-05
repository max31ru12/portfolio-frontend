import React, {Component} from "react";

import {Flex, FormProps} from 'antd';
import { Button, Form, Input,  } from 'antd';

import "./auth.css"

type SignUpProps = any;
type SignUpState = {}

type FieldType = {
    username?: string;
    email?: string;
    password?: string;
    passwordConfirmation?: string;
}

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};


class SignUp extends Component<SignUpProps, SignUpState> {
    constructor(props: SignUpProps) {
        super(props);

    }

    render() {
        return (

            <Flex style={{minHeight: '100vh'}} gap="middle" align="center" justify="center" vertical >
                <Form
                    name="basic"
                    labelCol={{ span: 10 }}
                    wrapperCol={{ span: 30 }}
                    style={{ maxWidth: 800, minWidth: 400 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Confirm password"
                        name="passwordConfirmation"
                        rules={[
                            { required: true, message: 'Please confirm your password!' },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                            })
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>

                </Form>
            </Flex>
        )
    }
}

export default SignUp;
