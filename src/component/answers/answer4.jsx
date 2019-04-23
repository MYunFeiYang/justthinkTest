import React from 'react';
import { Select } from 'antd';

const Option = Select.Option;

class Answer4 extends React.Component {
    constructor() {
        super();
        this.state = {
            defaultValue: { key: "请选择", value: "" },
            data: [
                { key: "请选择", value: "" },
                { key: "食", value: 1 },
                { key: "衣", value: 2 },
                { key: "住", value: 3 },
                { key: "行", value: 4 }
            ]

        }
    }
    handleChange = (e) => {
        const key = e.target.value;
        const value = e.target.getAttribute('data-value')
        this.setState({
            defaultValue: { key, value },
        })
        console.log(key, value)
    }
    render() {
        return <div onClick={this.handleChange}>
            <Select defaultValue={this.state.defaultValue.key} style={{ width: 120 }}>
                {this.state.data.map((value, index) => {
                    return <Option key={index} value={value.key} data-value={value.value}>{value.key}</Option>
                })}
            </Select>The value={this.state.defaultValue.value}
        </div>
    }
}
export default Answer4;