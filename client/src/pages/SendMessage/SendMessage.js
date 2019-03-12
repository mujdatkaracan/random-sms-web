import React from 'react'
import CategoryItem from '../../components/CategoryItem/CategoryItem';
import {Card} from 'antd';
import { Radio } from 'antd';
const RadioGroup = Radio.Group;

const tabList = [{
  key: 'tab1',
  tab: 'tab1',
}, {
  key: 'tab2',
  tab: 'tab2',
}];


const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
];

const contentList = {
  tab1: <p></p>,
  tab2: <p>content2</p>,
};


class SendMessage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      selected: false,
      selectedName: "",
      key: 'tab1',
      value: 1,
    }

    this.onCategoryClick = this.onCategoryClick.bind(this);
  }

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  }


  onCategoryClick(name){
    this.setState({selected: true, selectedName: name});
  }

  render(){
    return(
    <div>

        <Card
          style={{ width: '100%' }}
          tabList={tabList}
          activeTabKey={this.state.key}
          onTabChange={(key) => { this.onTabChange(key, 'key'); }}
        >
          {/* {contentList[this.state.key]} */}
          <CategoryItem list={data} onClickEvent={this.onCategoryClick} />
        </Card>
        
      <div style={{padding: 10}}>
        {this.state.selected ? this.state.selectedName + ' selected :D': ''}
      </div>
    </div>
    );
  };
};

export default SendMessage;