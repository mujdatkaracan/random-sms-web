import React, { Component } from 'react'
import './CategoryItem.css'
import {Card} from 'antd'

class CategoryItem extends Component {
    render(){
        return(
            <Card>
          {this.props.list.map(a => <Card.Grid onClick={() => { this.props.onClickEvent(a.title)}} style={gridStyle}>{a.title}</Card.Grid>)}
        </Card>
            // <div class="rc-item" onClick={() => this.props.onClickEvent(this.props.content)}>
            //     <p>{this.props.content}</p>
            // </div>
        );
    };
}

const gridStyle = {
    width: '25%',
    textAlign: 'center',
  };
  
export default CategoryItem;