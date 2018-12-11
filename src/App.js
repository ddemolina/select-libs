import React, {Component} from 'react';
import './App.css';
import {Select} from 'antd';
import 'antd/dist/antd.css';

const Option = Select.Option;

class App extends Component
{
  render()
  {
    return (
        <Select className="main" placeholder="elige algo" showSearch={true}>
          <Option value="Bahamas">Bahamas</Option>
          <Option value="Camboya">Camboya</Option>
          <Option value="Islas Caimán">Islas Caimán</Option>
          <Option value="Dinamarca">Dinamarca</Option>
          <Option value="Ecuador">Ecuador</Option>
          <Option value="España">España</Option>
          <Option value="Finlandia">Finlandia</Option>
          <Option value="Gambia">Gambia</Option>
          <Option value="Haití">Haití</Option>
          <Option value="India">India</Option>
          <Option value="Kenya">Kenya</Option>
          <Option value="Líbano">Líbano</Option>
          <Option value="Malasia">Malasia</Option>
          <Option value="Nepal">Nepal</Option>
          <Option value="Omán">Omán</Option>
          <Option value="Panamá">Panamá</Option>
          <Option value="Qatar">Qatar</Option>
          <Option value="Rusia">Rusia</Option>
          <Option value="Samoa">Samoa</Option>
          <Option value="Túnez">Túnez</Option>
          <Option value="Uganda">Uganda</Option>
          <Option value="Venezuela">Venezuela</Option>
          <Option value="Wallis y Futuna">Wallis y Futuna</Option>
          <Option value="Zambia">Zambia</Option>
        </Select>

    );
  }
}

export default App;
